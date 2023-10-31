import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { BASE_URL } from "../../config/config";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    console.log("Inside fetchData");
    try {
      const response = await axios.get(
        `${BASE_URL}data/search-products?searchTerm=${id}`
      );
      console.log("Result", response);
      setProduct(response.data.products);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Fragment>
      <SEO titleTemplate="Product Page" description="" />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop Product", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {/* Conditional rendering based on whether product data is available */}
        {product.length > 0 ? (
          <Fragment>
            {/* product description with image */}
            <ProductImageDescription
              spaceTopClass="pt-100"
              spaceBottomClass="pb-100"
              product={product[0]}
            />

            {/* product description tab */}
            <ProductDescriptionTab
              spaceBottomClass="pb-90"
              productFullDesc={product[0]}
            />

            {/* related product slider */}
            <RelatedProductSlider
              spaceBottomClass="pb-95"
              category={product[0]?.category[0]}
            />
          </Fragment>
        ) : (
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </LayoutOne>
    </Fragment>
  );
};
export default Product;
