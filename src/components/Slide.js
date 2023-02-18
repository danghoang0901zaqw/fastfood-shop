import React from "react";
import hero from "../assets/images/hero.png";
import { Link } from "react-router-dom";

const Slide = () => {
  return (
    <div className="w-full pt-[100px] flex items-start  justify-center">
      <div className="flex-[1]">
        <h1 className="text-xl font-semibold text-slate-600">
          Easy way to make an order
        </h1>
        <p className="text-orange-600 font-bold text-5xl mt-5">
          HUNGRY? <span className="text-slate-700">Just wait </span>
        </p>
        <p className="text-slate-700 font-bold text-5xl mt-5">
          food at <span className="text-orange-600">your door</span>
        </p>
        <p className="mt-5 text-slate-500 font-light  ">
          Combo ĐÔI BẠN CÙNG CHIẾN với chỉ 359K - gồm 01 bánh Pizza Lẩu Hải Sản
          Viền Thanh Cua (cỡ vừa), 01 Cánh Gà Nướng BBQ (4 miếng), dùng kèm 02
          lon nước ngọt (250 ml) / 02 chai nước suối (500 ml).
        </p>
        <div className="mt-5 flex items-center justify-start gap-10">
          <button className="flex items-center justify-center px-4 py-2 rounded bg-orange-600 text-slate-100 font-medium transition-all duration-100 hover:bg-white border hover:text-orange-600 hover:border-orange-600">
            Order now
            <i className="mt-0.5 bx bx-chevron-right"></i>
          </button>
          <button className="px-4  py-2 rounded bg-white border text-orange-600 border-orange-600 font-medium transition-all duration-100 hover:bg-orange-600 hover:text-slate-100">
            <Link to="/products">See all foods</Link>
          </button>
        </div>
        <div className="mt-10 flex items-center justify-start gap-10">
          <div className="flex items-center justify-center gap-3  ">
            <div className="bg-orange-600 w-10 h-10 rounded-full text-slate-100 flex items-center justify-center">
              <i className="bx bxs-car"></i>
            </div>
            <p className="text-slate-900 font-medium">No shipping charge</p>
          </div>
          <div className="flex items-center justify-center gap-3  ">
            <div className="bg-orange-600 w-10 h-10 rounded-full text-slate-100 flex items-center justify-center">
              <i className="bx bxs-check-shield"></i>
            </div>
            <p className="text-slate-900 font-medium">100% secure checkout</p>
          </div>
        </div>
      </div>
      <div className="flex-[1] flex items-center justify-end">
        <img src={hero} alt="" className="h-auto w-[500px] object-fill" />
      </div>
    </div>
  );
};

export default Slide;
