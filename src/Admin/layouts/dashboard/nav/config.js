import SvgColor from "../../../components/svg-color";
import { useSelector } from "react-redux";

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const NavigationConfig = () => {
  const user = useSelector((state) => state?.user);
  const userRole = user.user.user.role;
  let navConfig = [
    {
      title: "dashboard",
      path: "/admin/app",
      icon: icon("ic_analytics"),
    },
  ];

  if (userRole === "ADMIN") {
    navConfig = [
      ...navConfig,
      {
        title: "user",
        path: "/admin/user",
        icon: icon("ic_user"),
      },
      {
        title: "product",
        path: "/admin/products",
        icon: icon("ic_cart"),
      },
      {
        title: "enquiry",
        path: "/admin/enquiry",
        icon: icon("ic_cart"),
      },
      {
        title: "newsLetter",
        path: "/admin/newsLetter",
        icon: icon("ic_cart"),
      },
      {
        title: "customerContact",
        path: "/admin/customerContact",
        icon: icon("ic_cart"),
      },
    ];
  }

  if (userRole === "AGENT") {
    navConfig = [
      ...navConfig,
      {
        title: "enquiry",
        path: "/admin/enquiry",
        icon: icon("ic_cart"),
      },
      {
        title: "newsLetter",
        path: "/admin/newsLetter",
        icon: icon("ic_cart"),
      },
      {
        title: "customerContact",
        path: "/admin/customerContact",
        icon: icon("ic_cart"),
      },
    ];
  }

  return navConfig;
};

export default NavigationConfig;
