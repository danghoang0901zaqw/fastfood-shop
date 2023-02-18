import CartSidebar from "../components/CartUI/CartSidebar";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Products from "../components/ProductUI/Products";
import Slide from "../components/Slide";
import SupportFood from "../components/SupportFood";
import Testimonial from "../components/Testimonial";
const Home = ({ title }) => {
  document.title = "Fast Food Store - " + title;
  return (
    <div className="px-10">
      <CartSidebar />
      <Slide />
      <Category />
      <Featured />
      <Products show={true} />
      <SupportFood />
      <Testimonial />
    </div>
  );
};

export default Home;
