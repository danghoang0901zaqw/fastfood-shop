import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import DefaultLayout from "../Layouts/DefaultLayout";
import AuthLayout from "../Layouts/AuthLayout";
import CheckoutLayout from "../Layouts/CheckoutLayout";
const publicRoutes = [
  {
    helmet:'Home Page', path: config.routes.home, element: Home, layout: DefaultLayout,
  },
  {
    helmet:'Login', path: config.routes.login, element: Login, layout:AuthLayout
  },
  {
    helmet:'Register', path: config.routes.register, element: Register, layout: AuthLayout,
  },
  {
    helmet:'Product', path: config.routes.products, element: Product, layout: DefaultLayout,
  },
  {
    helmet:'Product Detail', path: config.routes.productDetail, element: ProductDetail, layout: DefaultLayout,
  },
  {
    helmet:'Cart', path: config.routes.cart, element: Cart, layout: CheckoutLayout,
  },
  {
    helmet:'Checkout', path: config.routes.checkout, element: Checkout, layout: null,
  },
  {
    helmet:'Contact', path: config.routes.contact, element: Contact, layout: DefaultLayout,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
