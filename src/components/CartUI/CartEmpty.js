import React from "react";
import emptybag from "../../assets/images/emptybag.png";
import { useDispatch } from "react-redux";
import { setCloseCart } from "../../redux/product-cart/productSlice";
import { Link } from "react-router-dom";

const CartEmpty = ({ isGoToShop = false }) => {
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(setCloseCart(false));
  };
  return (
    <div
      className={`w-full flex items-center justify-center flex-col gap-8 ${
        isGoToShop ? "" : " h-[80vh]"
      }`}
    >
      <img src={emptybag} alt="" className="h-auto w-40 object-contain " />
      <div className="flex items-center justify-center flex-col gap-2">
        <p className="font-bold text-2xl">Your Cart is empty</p>
        <p className="text-[#747474] text-center">
          Looks like you have not added anything to you cart. Go ahead & explore
          top categories
        </p>
      </div>
      {isGoToShop ? (
        <Link
          to="/products"
          className="bg-gradient-to-b from-amber-500 to-orange-600 flex items-center justify-center gap-2 drop-shadow-md rounded py-2 px-3 cursor-pointer active:scale-105 "
        >
          <i className="text-2xl text-slate-100 bx bx-left-arrow-alt"></i>
          <p className="text-slate-100 font-bold text-[18px]">Shopping Now</p>
        </Link>
      ) : (
        <button
          onClick={handleCloseCart}
          className="bg-gradient-to-b from-amber-500 to-orange-600 flex items-center justify-center gap-2 drop-shadow-md rounded py-2 px-3 cursor-pointer active:scale-105 "
        >
          <i className="text-2xl text-slate-100 bx bx-left-arrow-alt"></i>
          <p className="text-slate-100 font-bold text-[18px]">
            Back to Tasty Treat store
          </p>
        </button>
      )}
    </div>
  );
};

export default CartEmpty;
