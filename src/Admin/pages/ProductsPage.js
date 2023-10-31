import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../config/config";
import { toast } from "react-toastify";
import { ThemeProvider, createTheme, TextField } from "@mui/material";
import {
  Search,
  Edit,
  Delete,
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Cancel,
} from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Images from "./Images";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { MuiFileInput } from "mui-file-input";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles"; // Import makeStyles
import Image from "./Image";

// Define a makeStyles function
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "10%",
    overflow: "scroll",
    height: "100%",
    display: "block",
  },
  modalContent: {
    background: "#fff",
    borderRadius: "8px",
    padding: "40px",
  },
}));

export default function ProductPage() {
  const classes = useStyles();
  const { user } = useSelector((state) => state?.user);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImages1, setSelectedImages1] = useState([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [oldProductData, setOldProductData] = useState(null);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [imageNames, setImageNames] = useState([]);
  const [reload, setReload] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    sku: "",
    name: "",
    category: "",
    tag: "",
    fullDescription: "",
    shortDescription: "",
  });

  // The object fields correspond to the form input fields

  const theme = createTheme({
    // Your theme configuration here
  });

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [products]);

  useEffect(() => {
    if (reload == true) {
      fetchProducts();
      setReload(false);
    }
  }, [reload]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}data/getAll`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowAdd = async (event) => {
    event.preventDefault();
    try {
      const category = newProduct.category.split(",");
      const tag = newProduct.tag.split(",");

      const formData = new FormData();

      for (const imageFile of selectedImages) {
        formData.append("image", imageFile);
      }

      formData.append(
        "body",
        JSON.stringify({
          sku: newProduct.sku,
          name: newProduct.sku,
          new: false,
          rating: 4,
          category: category,
          tag: tag,
          shortDescription: newProduct.shortDescription,
          fullDescription: newProduct.fullDescription,
        })
      );

      const response = await axios.post(`${BASE_URL}data/upload`, formData, {
        headers: {
          Authorization: `${user?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const addedProduct = response.data.data;
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      setSelectedImages([]);
      setNewProduct({
        sku: "",
        name: "",
        category: "",
        tag: "",
        fullDescription: "",
        shortDescription: "",
      });
      setIsAddModalOpen(false);
      toast.success("Product Added!");
    } catch (error) {
      toast.error("Failed to Add Product.");
    }
  };

  const handleRowUpdate = async (event) => {
    event.preventDefault();
    try {
      console.log("editedProduct", editedProduct);

      const changes = {};

      if (oldProductData.sku !== editedProduct.sku) {
        changes.sku = editedProduct.sku;
      }
      if (oldProductData.name !== editedProduct.name) {
        changes.name = editedProduct.name;
      }
      if (oldProductData.category !== editedProduct.category) {
        changes.category = editedProduct.category;
      }
      if (oldProductData.tag !== editedProduct.tag) {
        changes.tag = editedProduct.tag;
      }
      if (oldProductData.fullDescription !== editedProduct.fullDescription) {
        changes.fullDescription = editedProduct.fullDescription;
      }
      if (oldProductData.shortDescription !== editedProduct.shortDescription) {
        changes.shortDescription = editedProduct.shortDescription;
      }

      const payload = {
        ...changes,
        imagesToDelete: imageNames,
      };

      console.log("Payload", payload);

      const formData = new FormData();

      for (const imageFile of selectedImages1) {
        formData.append("newImages", imageFile);
      }

      formData.append("body", JSON.stringify(payload));

      const response = await axios.put(
        `${BASE_URL}data/update/${oldProductData._id}`,
        formData,
        {
          headers: {
            Authorization: `${user?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === oldProductData._id
            ? { ...product, ...changes }
            : product
        )
      );
      setSelectedImages1([]);
      setEditedProduct(null);
      setOldProductData(null);
      setIsEditModalOpen(false);
      setImageNames([]);
      setReload(true);
      toast.success("Product Updated!");
    } catch (error) {
      toast.error("Failed to Updated Product.");
    }
  };

  const handleRowDelete = async (productId) => {
    try {
      await axios.delete(`${BASE_URL}data/delete/${productId._id}`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId._id)
      );
      toast.success("Product Deleted!");
    } catch (error) {
      toast.error("Failed to Product User.");
    }
  };

  const handleChange = (newValue, info) => {
    const files = newValue;
    const selected = [];

    for (let i = 0; i < files.length; i++) {
      selected.push(files[i]);
    }

    setSelectedImages(newValue);
  };
  const handleChange1 = (newValue, info) => {
    const files = newValue;
    const selected = [];

    for (let i = 0; i < files.length; i++) {
      selected.push(files[i]);
    }

    setSelectedImages1(newValue);
  };

  const handleOpenEditModal = (rowData) => {
    setEditedProduct({ ...rowData });
    setOldProductData({ ...rowData });
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditedProduct(null);
    setOldProductData(null);
    setIsEditModalOpen(false);
    setImageNames([]);
  };

  const handleOpenDeleteDialog = (rowData) => {
    setRowToDelete(rowData);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setRowToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewProduct({
      sku: "",
      name: "",
      category: "",
      tag: "",
      fullDescription: "",
      shortDescription: "",
    });
    setSelectedImages([]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          columns={[
            { title: "Id", field: "_id", hidden: true },
            // {
            //   title: "Actions",
            //   field: "actions",
            //   render: (rowData) => (
            //     <div style={{ width: "80px" }}>
            //       <IconButton
            //         color="inherit"
            //         onClick={() => handleOpenEditModal(rowData)}
            //       >
            //         <Edit />
            //       </IconButton>
            //       <IconButton
            //         color="inherit"
            //         onClick={() => handleOpenDeleteDialog(rowData)}
            //       >
            //         <Delete />
            //       </IconButton>
            //     </div>
            //   ),
            // },
            { title: "Product Id", field: "sku" },
            { title: "Name", field: "name" },
            {
              title: "Category",
              field: "category",
              render: (rowData) => <div>{rowData.category.join(", ")}</div>,
            },
            {
              title: "Tags",
              field: "tag",
              render: (rowData) => <div>{rowData.tag.join(", ")}</div>,
            },
            {
              title: "Full Description",
              field: "fullDescription",
              render: (rowData) => {
                const maxLength = 20;

                if (
                  rowData.fullDescription &&
                  rowData.fullDescription.length > maxLength
                ) {
                  return (
                    rowData.fullDescription.substring(0, maxLength) + "..."
                  );
                }
                return rowData.fullDescription;
              },
            },
            {
              title: "Short Description",
              field: "shortDescription",
              render: (rowData) => {
                const maxLength = 20;

                if (
                  rowData.shortDescription &&
                  rowData.shortDescription.length > maxLength
                ) {
                  return (
                    rowData.shortDescription.substring(0, maxLength) + "..."
                  );
                }

                return rowData.shortDescription;
              },
            },
            {
              title: "Images",
              field: "image",
              editable: "onAdd",
              render: (rowData) => {
                const slides = rowData?.image.map((img, i) => {
                  return {
                    src: process.env.PUBLIC_URL + img,
                    key: i,
                  };
                });
                console.log("slides", slides);
                return (
                  <div className="product-small-image-wrapper mt-15">
                    {rowData?.image?.length > 0 ? (
                      <div>
                        <Button variant="outlined" onClick={() => setIndex(0)}>
                          View
                        </Button>
                        <AnotherLightbox
                          open={index >= 0}
                          index={index}
                          close={() => setIndex(-1)}
                          slides={slides}
                          plugins={[Thumbnails, Zoom, Fullscreen]}
                        />
                      </div>
                    ) : (
                      "No Image Found"
                    )}
                  </div>
                );
              },
              editComponent: (props) => {
                return (
                  <div style={{ width: "190px" }}>
                    <MuiFileInput
                      placeholder="Insert a file"
                      multiple
                      hideSizeText
                      value={selectedImages}
                      onChange={handleChange}
                    />
                  </div>
                );
              },
              headerStyle: {
                textAlign: "center",
              },
            },
          ]}
          actions={[
            {
              icon: "add",
              tooltip: "Add Product",
              isFreeAction: true,
              onClick: () => {
                handleOpenAddModal();
              },
            },
            {
              icon: "edit",
              tooltip: "Edit Product",
              onClick: (event, rowData) => {
                handleOpenEditModal(rowData);
              },
            },
            {
              icon: "delete",
              tooltip: "Delete Product",
              onClick: (event, rowData) => {
                handleOpenDeleteDialog(rowData);
              },
            },
          ]}
          components={{
            Action: (props) => {
              if (props.action.icon === "add") {
                return (
                  <IconButton
                    color="inherit"
                    onClick={(event) => props.action.onClick(event, props.data)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                );
              }
              if (props.action.icon === "edit") {
                return (
                  <IconButton
                    color="inherit"
                    onClick={(event) => props.action.onClick(event, props.data)}
                  >
                    <Edit />
                  </IconButton>
                );
              }
              if (props.action.icon === "delete") {
                return (
                  <IconButton
                    color="inherit"
                    onClick={(event) => props.action.onClick(event, props.data)}
                  >
                    <Delete />
                  </IconButton>
                );
              }
            },
          }}
          data={products}
          title={"Products"}
          icons={{
            Search: Search,
            Edit: Edit,
            Delete: Delete,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            ResetSearch: CloseIcon,
            Add: AddShoppingCartIcon,
            Check: SaveIcon,
            Clear: CloseIcon,
            Cancel: CloseIcon,
            Export: SaveAltIcon,
            SortArrow: ArrowDownwardIcon,
          }}
          options={{
            exportButton: true,
            searchAutoFocus: true,
            exportFileName: "productData",
            addRowPosition: "first",
          }}
        />
      </ThemeProvider>
      {/* Edit Modal */}
      <Modal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        className={classes.modal}
        title={"Edit Product"}
      >
        <div className={classes.modalContent}>
          {editedProduct ? (
            <form
              onSubmit={(event) => handleRowUpdate(event)}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "16px",
              }}
            >
              {/* Product Id */}
              <TextField
                fullWidth
                label="Product Id"
                variant="outlined"
                value={editedProduct.sku}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, sku: e.target.value })
                }
                style={{ gridColumn: "span 3" }} // Span 3 columns
              />

              {/* Name */}
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={editedProduct.name}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, name: e.target.value })
                }
                style={{ gridColumn: "span 3" }} // Span 3 columns
              />

              {/* Category */}
              <TextField
                fullWidth
                label="Category"
                variant="outlined"
                value={editedProduct.category.join(", ")}
                onChange={(e) => {
                  const categories = e.target.value.split(", ");
                  setEditedProduct({ ...editedProduct, category: categories });
                }}
                style={{ gridColumn: "span 6" }} // Span 6 columns
              />

              {/* Tags */}
              <TextField
                fullWidth
                label="Tags"
                variant="outlined"
                value={editedProduct.tag.join(", ")}
                onChange={(e) => {
                  const tags = e.target.value.split(", ");
                  setEditedProduct({ ...editedProduct, tag: tags });
                }}
                style={{ gridColumn: "span 6" }} // Span 6 columns
              />

              {/* Full Description */}
              <TextField
                fullWidth
                label="Full Description"
                variant="outlined"
                value={editedProduct.fullDescription}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    fullDescription: e.target.value,
                  })
                }
                style={{ gridColumn: "span 6" }} // Span 6 columns
              />

              {/* Short Description */}
              <TextField
                fullWidth
                label="Short Description"
                variant="outlined"
                value={editedProduct.shortDescription}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    shortDescription: e.target.value,
                  })
                }
                style={{ gridColumn: "span 6" }} // Span 6 columns
              />

              {/* Images */}
              <div
                className="product-small-image-wrapper mt-15"
                style={{ gridColumn: "span 6" }}
              >
                {editedProduct?.image ? (
                  <Image
                    ImageData={editedProduct?.image}
                    imageNames={imageNames}
                    setImageNames={setImageNames}
                  />
                ) : (
                  "ImageData"
                )}
              </div>

              <MuiFileInput
                style={{ gridColumn: "span 3" }}
                placeholder="Insert a file"
                multiple
                hideSizeText
                value={selectedImages1}
                onChange={handleChange1}
              />

              {/* Save Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ gridColumn: "span 6" }}
              >
                Edit
              </Button>
            </form>
          ) : null}
        </div>
      </Modal>

      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Product ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleRowDelete(rowToDelete);
              handleCloseDeleteDialog();
            }}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        className={classes.modal}
        title={"Add Product"}
      >
        <div className={classes.modalContent}>
          <form
            onSubmit={(event) => handleRowAdd(event)}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "16px",
            }}
          >
            <TextField
              fullWidth
              label="Product Id"
              variant="outlined"
              value={newProduct.sku}
              onChange={(e) =>
                setNewProduct({ ...newProduct, sku: e.target.value })
              }
              style={{ gridColumn: "span 3" }}
            />

            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              style={{ gridColumn: "span 3" }}
            />

            <TextField
              fullWidth
              label="Category"
              variant="outlined"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              style={{ gridColumn: "span 6" }}
            />

            <TextField
              fullWidth
              label="Tags"
              variant="outlined"
              value={newProduct.tag}
              onChange={(e) =>
                setNewProduct({ ...newProduct, tag: e.target.value })
              }
              style={{ gridColumn: "span 6" }}
            />

            <TextField
              fullWidth
              label="Full Description"
              variant="outlined"
              value={newProduct.fullDescription}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  fullDescription: e.target.value,
                })
              }
              style={{ gridColumn: "span 6" }}
            />

            <TextField
              fullWidth
              label="Short Description"
              variant="outlined"
              value={newProduct.shortDescription}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  shortDescription: e.target.value,
                })
              }
              style={{ gridColumn: "span 6" }}
            />

            <div
              className="product-small-image-wrapper mt-15"
              style={{ gridColumn: "span 6" }}
            >
              <MuiFileInput
                placeholder="Insert a file"
                multiple
                hideSizeText
                value={selectedImages}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ gridColumn: "span 6" }}
            >
              Add Product
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
