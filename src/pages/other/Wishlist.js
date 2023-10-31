import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
  deleteFromWishlist,
  deleteAllFromWishlist,
} from "../../store/slices/wishlist-slice";
import ProductEnquiryModal from "../../components/product/ProductEnquiryModal";

const Wishlist = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [product, setProduct] = useState("");
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <SEO
        titleTemplate="Wishlist"
        description="Wishlist page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Wishlist", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {wishlistItems && wishlistItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your wishlist items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table className="w-100">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Enquiry</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishlistItems.map((wishlistItem, key) => {
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem._id
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        process.env.PUBLIC_URL +
                                        wishlistItem.image[0]
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem._id
                                    }
                                  >
                                    {wishlistItem.name}
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount">
                                    {wishlistItem.category[0]}
                                  </span>
                                </td>

                                <td className="product-wishlist-cart">
                                  <button
                                    onClick={() => {
                                      return (
                                        setModalShow(true),
                                        setProduct(wishlistItem)
                                      );
                                    }}
                                  >
                                    Enquiry Now
                                  </button>
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        deleteFromWishlist(wishlistItem._id)
                                      )
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="cart-shiping-update-wrapper"
                      style={{ justifyContent: "end" }}
                    >
                      <div className="cart-clear">
                        <button
                          onClick={() => dispatch(deleteAllFromWishlist())}
                        >
                          Clear Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-like"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in wishlist <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                        Add Items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
      <ProductEnquiryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />
    </Fragment>
  );
};

export default Wishlist;
