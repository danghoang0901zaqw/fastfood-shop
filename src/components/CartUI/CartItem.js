import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItems,
} from "../../redux/product-cart/productSlice";
import formatNumber from "../../utils/formatNumber";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
  };
  const handleIncreaseItem = (item) => {
    dispatch(increaseItem(item));
  };
  const handleDecreaseItem = (item) => {
    dispatch(decreaseItem(item));
  };
  console.log(item.color, item.size);
  return (
    <div className="w-full flex items-center justify-between px-5">
      <div className="flex items-center justify-center gap-4">
        <img
          src={item.image01}
          alt=""
          className="h-24 w-24 object-cover rounded hover:scale-105 transition-all duration-200"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center">
            <p className="text-xl text-slate-900 font-semibold">{item.title}</p>
            <p className="text-md font-normal text-slate-800 truncate w-[350px]">
              {item.description}
            </p>
            <div className="flex items-center justify-start gap-3 ">
              <p className="text-md font-normal text-slate-800">Color:</p>
              <p className="font-bold capitalize">{item.color}</p>
            </div>
            <div className="flex items-center justify-start gap-3 ">
              <p className="text-md font-normal text-slate-800  ">Size:</p>
              <p className="font-bold uppercase">{item.size}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleDecreaseItem(item)}
              className="w-7 h-7 bg-slate-900 rounded flex items-center justify-center"
            >
              <i className="text-slate-100 text-xl bx bx-minus"></i>
            </button>
            <p className="w-14 h-7 bg-slate-900 text-slate-100 rounded flex items-center justify-center">
              {item.quantity}
            </p>
            <button
              onClick={() => handleIncreaseItem(item)}
              className="w-7 h-7 bg-slate-900 rounded flex items-center justify-center"
            >
              <i className="text-slate-100 text-xl bx bx-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <p className="text-[18px] font-semibold text-slate-900">
          ${formatNumber(item.quantity * item.price)}
        </p>
        <button
          onClick={() => handleRemoveItem(item)}
          className="w-7 h-7 rounded flex items-center justify-center bg-slate-900"
        >
          <i className="text-slate-100 text-xl bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
