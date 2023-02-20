import React, { useEffect, useState } from "react";
import CartItem from "../components/CartUI/CartItem";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartUI/CartEmpty";
import formatNumber from "../utils/formatNumber";
import { Link } from "react-router-dom";

const Cart = ({ title }) => {
  document.title = "Fast Food Store - " + title;
  const cartProducts = useSelector((state) => state.cartItems.cartProducts);
  const userID = useSelector((state) => state.auth.user);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalProducts(
      cartProducts.reduce((total, item) => (total += item.quantity), 0)
    );
    setTotalPrice(
      cartProducts.reduce(
        (total, item) => (total += item.price * item.quantity),
        0
      )
    );
  }, [cartProducts]);
  console.log(totalPrice);
  return (
    <div className="px-10 ">
      <div className="flex items-center justify-center gap-3 py-5">
        <i className="text-4xl bx bx-basket"></i>
        <h2 className="text-slate-900 font-semibold text-4xl">My Cart</h2>
      </div>
      <div className="flex ">
        <div className="flex-[3]">
          <div
            className={`"py-5 w-full flex items-start justify-start gap-10 flex-col " ${
              cartProducts.length > 4 ? "h-[68vh] overflow-y-scroll" : ""
            }`}
          >
            {cartProducts.length === 0 ? (
              <CartEmpty isGoToShop={true} />
            ) : (
              cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))
            )}
          </div>
          {cartProducts.length > 0 && (
            <>
              <div className="mt-2 px-5 flex items-center justify-between">
               <div className="flex items-center">
                  <p className="text-2xl font-semibold"></p>
                  <p className="text-2xl font-semibold">{totalProducts} Items</p> 
               </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-semibold">Total:</p>
                  <p className="text-2xl font-semibold">${formatNumber(totalPrice)}</p>
                </div>
              </div>
              <Link
                to="/products"
                className="mt-2 bg-gradient-to-b from-amber-500 to-orange-600 p-2 w-full max-w-[250px] rounded font-semnibold text-xl flex items-center justify-center gap-3 text-slate-100 font-medium"
              >
                <i className="text-2xl bx bx-cart"></i>
                Continue Shopping
              </Link>
            </>
          )}
        </div>
        <div className="flex-[2] w-full px-10 h-full">
          <div className="w-full">
            <p className="uppercase font-semibold text-[#747474]">
              Enter Promo Code
            </p>
            <div className="flex items-center w-full border border-[#ccc] mt-4">
              <input
                className="border border-[#747474] w-full outline-none border-none p-3"
                placeholder="Promo Code"
              />
              <button className="max-w-[200px] w-full h-full bg-slate-900 text-slate-100 p-3">
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 w-full mt-7">
            <div className="flex items-center justify-between w-full">
              <p className="text-[#747474]">Shipping cost: </p>
              <p className="text-[#747474]">TBD</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[#747474]">Discount: </p>
              <p className="text-[#747474]">-$0</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[#747474]">Tax: </p>
              <p className="text-[#747474]">TBD</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="font-semibold text-[18px]">Esimated Total: </p>
              <p className="font-semibold text-xl">
                ${formatNumber(totalPrice)}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-semibold">
                or 4 interest-free paymennts of $10.00 with{" "}
              </p>
              <div className="ml-2 w-24 rounded-full bg-green-400 flex items-center gap-1 justify-center px-2 py-1">
                <p className=""> afterpay</p>
                <i className="bx bxs-hourglass"></i>
              </div>
              <div className="ml-2 w-7 h-7 rounded-full border border-[#ccc] flex items-center justify-center  ">
                <i className="bx bx-money"></i>
              </div>
            </div>
            <p className="w-full text-center text-[#747474] ">
              You're <span className="text-red-500 font-bold">$10.01</span> away
              from free shipping
            </p>
          </div>
          <Link to={`${userID == null ? "/login" : "/checkout"}`}>
            <button className="mt-4 bg-gradient-to-b from-amber-500 to-orange-600 p-2 w-full rounded font-semnibold text-xl flex items-center justify-center gap-3 text-slate-100 font-medium acive:scale-105 transition-all duration-150">
              <i className="text-xl bx bx-lock-alt"></i>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
