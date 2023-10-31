import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import axios from "axios";
import { BASE_URL } from "../../config/config";

const fetchData = async (setProducts) => {
  try {
    const response = await axios.get(`${BASE_URL}data/getAll`);
    setProducts(response.data.data);
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};

const ProductGrid = ({ spaceBottomClass, category, type, limit }) => {
  const [products, setProducts] = useState([]);
  // const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  useEffect(() => {
    fetchData(setProducts);
  }, []);

  return (
    <Fragment>
      {products.slice(0, 4)?.map((product) => {
        return (
          <div
            className="col-xl-3 col-md-6 col-lg-4 col-sm-6"
            key={product._id}
          >
            <ProductGridSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              wishlistItem={wishlistItems.find(
                (wishlistItem) => wishlistItem._id === product._id
              )}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductGrid;
