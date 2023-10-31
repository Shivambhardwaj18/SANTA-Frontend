import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import HeaderSocial from "./sub-components/HeaderSocial";

const HeaderTop = ({ borderStyle }) => {
  const currency = useSelector((state) => state.currency);
  return (
    <div
      className={clsx(
        "header-top-wap",
        borderStyle === "fluid-border" && "border-bottom"
      )}
    >
      <LanguageCurrencyChanger currency={currency} />
      <div className="header-offer">
        <div className="off-canvas-widget-social">
          <a href="//twitter.com" title="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="//instagram.com" title="Instagram">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="//facebook.com" title="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
