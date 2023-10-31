import PropTypes from "prop-types";

import {
  getIndividualCategories,
  getIndividualTags,
  setActiveSort,
} from "../../helpers/product";

const ShopTopFilter = ({ products, getSortParams }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className="product-filter-wrapper" id="product-filter-wrapper">
      <div className="product-filter-wrapper__inner">
        <div className="row">
          <div className="col-md-3 col-sm-5 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Categories</h5>
              {uniqueCategories ? (
                <ul>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={(e) => {
                            getSortParams("category", category);
                            setActiveSort(e);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>
          <div className="col-md-3 col-sm-5 col-xs-12 mb-30">
            <div className="product-filter product-filter--tag">
              <h5>Tag</h5>
              {uniqueTags ? (
                <ul>
                  {uniqueTags.map((tag, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={(e) => {
                            getSortParams("tag", tag);
                            setActiveSort(e);
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No tags found"
              )}
            </div>
          </div>
          <div className="col-md-3 col-sm-2 col-xs-12 mb-30 ">
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="clearfilter"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
};

export default ShopTopFilter;
