import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
            {" "}
            {t("Products")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>{t("About Us")}</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
