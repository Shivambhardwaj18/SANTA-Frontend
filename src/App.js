import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

// Lazy-loaded components
const HomeAutoParts = lazy(() => import("./pages/home/HomeAutoParts"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));
// const Admin = lazy(() => import("./Admin/AdminPanel"));

const DashboardLayout = lazy(() =>
  import("./Admin/layouts/dashboard/DashboardLayout")
);
const Admin = lazy(() => import("./Admin/pages/DashboardAppPage"));
const User = lazy(() => import("./Admin/pages/UserPage"));
const Products = lazy(() => import("./Admin/pages/ProductsPage"));
const Enquiry = lazy(() => import("./Admin/pages/Enquiry"));
const NewsLetter = lazy(() => import("./Admin/pages/Newsletter"));
const CustomerContact = lazy(() => import("./Admin/pages/Customercontact"));

const App = () => {
  const { user } = useSelector((state) => state?.user);

  return (
    <Router>
      <ToastContainer />
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<HomeAutoParts />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-filter"}
              element={<ShopGridFilter />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
              element={<ProductTabRight />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-sticky/:id"}
              element={<ProductSticky />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
              element={<ProductFixedImage />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/forgot-password"}
              element={<MyAccount />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/login"}
              element={<LoginRegister />}
            />
            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/404"}
              element={<NotFound />}
            />

            {/* Admin route */}
            <Route
              path="/admin"
              element={
                user.token ? <DashboardLayout /> : <Navigate to="/login" />
              }
            >
              <Route index element={<Navigate to="app" />} />
              <Route path="app" element={<Admin />} />
              <Route path="user" element={<User />} />
              <Route path="products" element={<Products />} />
              <Route path="enquiry" element={<Enquiry />} />
              <Route path="newsLetter" element={<NewsLetter />} />
              <Route path="customerContact" element={<CustomerContact />} />
            </Route>

            {/* Not Found pages */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
