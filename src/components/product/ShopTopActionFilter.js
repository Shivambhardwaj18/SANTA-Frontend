import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopFilter from "./ShopTopFilter";
import { toggleShopTopFilter } from "../../helpers/product";

const ShopTopActionFilter = ({
  productCount,
  sortedProductCount,
  products,
  getSortParams,
}) => {
  return (
    <Fragment>
      <div className="shop-top-bar mb-35">
        <div className="select-shoing-wrap">
          <p>
            Showing {sortedProductCount} of {productCount} result
          </p>
        </div>

        <div className="filter-active">
          <button onClick={(e) => toggleShopTopFilter(e)}>
            <i className="fa fa-plus"></i> Filter
          </button>
        </div>
      </div>

      {/* shop top filter */}
      <ShopTopFilter products={products} getSortParams={getSortParams} />
    </Fragment>
  );
};

ShopTopActionFilter.propTypes = {
  getFilterSortParams: PropTypes.func,
  getSortParams: PropTypes.func,
  productCount: PropTypes.number,
  products: PropTypes.array,
  sortedProductCount: PropTypes.number,
};

export default ShopTopActionFilter;
