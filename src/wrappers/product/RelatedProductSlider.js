import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { getProducts } from "../../helpers/product";
import { BASE_URL } from "../../config/config";

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const fetchData = async (setProducts) => {
  try {
    const response = await axios.get(`${BASE_URL}data/getAll`);
    setProducts(response.data.data);
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};

const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  // const { products } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  // const products = getProducts(products, category, null, 6);

  useEffect(() => {
    fetchData(setProducts);
  }, []);

  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />
        {products?.length ? (
          <Swiper options={settings}>
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductGridSingle
                  product={product}
                  currency={0}
                  cartItem={cartItems.find(
                    (cartItem) => cartItem.id === product._id
                  )}
                  wishlistItem={wishlistItems.find(
                    (wishlistItem) => wishlistItem.id === product._id
                  )}
                  compareItem={compareItems.find(
                    (compareItem) => compareItem.id === product._id
                  )}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default RelatedProductSlider;
