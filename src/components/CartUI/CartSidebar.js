import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart, setCloseCart } from "../../redux/product-cart/productSlice";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const CartSidebar = () => {
  const ifcartState = useSelector((state) => state.cartItems.cartState);
  const cartProducts = useSelector((state) => state.cartItems.cartProducts);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(setCloseCart(false));
  };
  const handleDeleteCart = () => {
    dispatch(deleteCart());
  };
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalItems, setTotalItems] = useState(null);
  useEffect(() => {
    setTotalAmount(() =>
      cartProducts.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      )
    );
    setTotalItems(
      cartProducts.reduce((total, item) => (total += item.quantity), 0)
    );
  }, [cartProducts]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[100] ${
        ifcartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-[100%]"
      }`}
    >
      <div className="h-screen bg-slate-200 bg-opacity-40 absolute right-0 max-w-xl w-full shadow-lg">
        <div className="bg-white flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-1">
            <button onClick={handleCloseCart} className="mt-1">
              <i className="text-2xl bx bxs-chevron-left"></i>
            </button>
            <p className="text-[18px] font-light flex gap-2">
              Your Cart
              {totalItems > 0 && (
                <p className="bg-slate-900 rounded p-1 px-2 text-sm text-slate-100">
                  {totalItems} ( items )
                </p>
              )}
            </p>
          </div>
          <div
            onClick={handleDeleteCart}
            className="w-6 h-6 bg-slate-700 flex items-center justify-center rounded-[2px] active:scale-105 cursor-pointer"
          >
            <i className="text-slate-100 text-2xl bx bx-x"></i>
          </div>
        </div>
        {cartProducts.length > 0 ? (
          <>
            <div className="mt-5 overflow-y-scroll w-full h-[72vh] scroll-smooth scroll-hidden flex flex-col gap-7">
              {cartProducts.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            <div className="absolute bottom-0 py-2 px-4 bg-white w-full flex justify-center gap-2 flex-col">
              <div className="flex items-center justify-between">
                <p className="text-slate-900 font-bold ">SUBTOTAL</p>
                <div className="bg-slate-900 rounded py-1 px-2 ">
                  <p className="text-slate-100 font-light text-[18px]">
                    ${totalAmount}
                  </p>
                </div>
              </div>
              <p className="text-center font-medium">
                Tax and Shipping Will Caculate At Shipping
              </p>
              <Link to="/checkout">
                <button className="w-full bg-slate-900 rounded py-1 hover:opacity-90 transition-all duration-200">
                  <p className="text-slate-100">Checkout</p>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
