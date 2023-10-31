import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { addToWishlist } from "../../store/slices/wishlist-slice";

function ProductModal({ product, show, onHide, wishlistItem, compareItem }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
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

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>

      <div className="modal-body">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="product-large-image-wrapper">
              <Swiper options={gallerySwiperParams}>
                {product.image &&
                  product.image.map((img, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="single-image">
                          <img
                            src={process.env.PUBLIC_URL + img}
                            className="img-fluid"
                            alt="Product"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="product-small-image-wrapper mt-15">
              <Swiper options={thumbnailSwiperParams}>
                {product.image &&
                  product.image.map((img, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="single-image">
                          <img
                            src={process.env.PUBLIC_URL + img}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="product-details-content quickview-content">
              <div className="row">
                <div className="col-l-10 col-md-10 col-sm-12 col-xs-12">
                  <h2>{product.name}</h2>
                </div>

                <div className="col-l-2 col-md-2 col-sm-12 col-xs-12">
                  <div className="pro-details-quality">
                    <div className="pro-details-wishlist">
                      <button
                        className={wishlistItem !== undefined ? "active" : ""}
                        disabled={wishlistItem !== undefined}
                        title={
                          wishlistItem !== undefined
                            ? "Added to wishlist"
                            : "Add to wishlist"
                        }
                        onClick={() => dispatch(addToWishlist(product))}
                      >
                        <i className="pe-7s-like" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h4>Description :</h4>
              <div className="pro-details-list1">
                <p>{product.shortDescription}</p>
              </div>
              <h4>Additional Information :</h4>
              <div className="pro-details-list1">
                <p>{product.fullDescription}</p>
              </div>
              <div className="pro-details-quality pt-4">
                <div className="pro-details-cart btn-hover">
                  <Link to={process.env.PUBLIC_URL + "/product/" + product._id}>
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ProductModal.propTypes = {
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

export default ProductModal;
