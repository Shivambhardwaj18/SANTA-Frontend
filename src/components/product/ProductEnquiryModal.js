import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../config/config";

function ProductEnquiryModal({ product, show, onHide }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { cartItems } = useSelector((state) => state.cart);

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation > 1 ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation > 1 ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation > 1 ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);
  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

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

  const onCloseModal = () => {
    setThumbsSwiper(null);
    onHide();
  };

  const initialValues = {
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email"),
    message: Yup.string(),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const name = `${values.fname} ${values.lname}`;

      const requestData = {
        name,
        phoneNumber: values.phoneNumber,
        email: values.email,
        message: values.message,
        productId: product._id,
        productName: product.name,
      };

      await axios.post(`${BASE_URL}data/send-enquiry`, requestData);
      toast.success("Enquiry sent successfully!");
      resetForm();
      onCloseModal();
    } catch (error) {
      console.error("Error sending enquiry:", error);
      toast.error("Failed to send enquiry. Please try again later.");
    }
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton>
        <h3>Send Enquiry</h3>
      </Modal.Header>

      <div className="modal-body">
        <div className="checkout-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-s-12 col-xs-12">
                <div className="billing-info-wrap">
                  <h3>Personal Details</h3>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                            <div className="billing-info mb-20">
                              <label>First Name</label>
                              <Field type="text" name="fname" />
                              {errors.fname && touched.fname && (
                                <div className="text-danger">
                                  {errors.fname}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                            <div className="billing-info mb-20">
                              <label>Last Name</label>
                              <Field type="text" name="lname" />
                              {errors.lname && touched.lname && (
                                <div className="text-danger">
                                  {errors.lname}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                            <div className="billing-info mb-20">
                              <label>Phone</label>
                              <Field type="text" name="phoneNumber" />
                              {errors.phoneNumber && touched.phoneNumber && (
                                <div className="text-danger">
                                  {errors.phoneNumber}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                            <div className="billing-info mb-20">
                              <label>Email Address</label>
                              <Field type="email" name="email" />
                              {errors.email && touched.email && (
                                <div className="text-danger">
                                  {errors.email}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="additional-info-wrap">
                          <h4>Additional information</h4>
                          <div className="additional-info">
                            <Field
                              as="textarea"
                              placeholder="Notes about your product enquiry"
                              name="message"
                              defaultValue=""
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                              <div className="pro-details-quality">
                                <div className="pro-details-cart btn-hover">
                                  <button
                                    type="submit"
                                    style={{
                                      width: "100%",
                                      border: "1px solid",
                                      background: "black",
                                      color: "white",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Send
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-s-12 col-xs-12">
                              <div className="pro-details-quality">
                                <div className="pro-details-cart btn-hover">
                                  <button
                                    onClick={onCloseModal}
                                    style={{
                                      width: "100%",
                                      border: "1px solid",
                                      background: "black",
                                      color: "white",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-s-12 col-xs-12">
                <div className="billing-info-wrap">
                  <h3>Product Details</h3>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-s-12">
                      <div className="billing-info mb-20">
                        <label>Product Name : </label>
                        <div className="pro-details-list1">
                          <p>{product.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-s-12">
                      <div className="billing-info mb-20">
                        <label>Description</label>
                        <div className="pro-details-list">
                          <p>{product.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ProductEnquiryModal.propTypes = {
  currency: PropTypes.shape({}),
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.shape({}),
  show: PropTypes.bool,
  wishlistItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
};

export default ProductEnquiryModal;
