import AllFoods from "../components/AllFood";
import CartSidebar from "../components/CartUI/CartSidebar";
import CommonSection from "../components/CommonSection";

const Product = ({ title }) => {
  document.title = "Fast Food Store - " + title;
  return (
    <div className="px-10 w-fulll">
      <CartSidebar />
      <CommonSection title={"All Foods"} />
      <AllFoods />
    </div>
  );
};

export default Product;
