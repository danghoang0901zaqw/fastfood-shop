import React from "react";
import featured from "../assets/fake-data/featured";
const Featured = () => {
  return (
    <div className="py-[50px]">
      <div className="flex items-center justify-center flex-col gap-3">
        <p className="text-orange-500 text-2xl font-medium">What we serve</p>
        <p className="text-slate-700 text-5xl font-bold ">
          Just sit back at home
        </p>
       <div className="flex gap-2">
          <p className="text-slate-700 text-5xl font-bold">
            we will
          </p>
            <p className="text-5xl font-bold text-orange-600">take care</p>
       </div>
        <p className="text-slate-900 font-light w-[8  00px]">
          Mặc dù đứng thứ hai về số lượng cửa hàng nhưng thương hiệu McDonald's
          lại đứng đầu ở mặt hàng bánh Hamburger ở 119 quốc gia khác nhau. Đây
          là thương hiệu nhà hàng phục vụ thức ăn nhanh được thành lập từ năm
          1940. Hiện nay, hãng có 14.098 cửa hàng tại Mỹ, 19.412 cửa hàng ở các
          nước khác (trong đó có 5.942 cửa hàng ở các thị trường mới nổi).
        </p>
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center mt-20 gap-20">
        {featured.map((item, index) => (
          <div className="" key={index}>
            <img src={item.img} alt="" />
            <h5 className="text-2xl font-bold text-slate-900">{item.title}</h5>
            <p className="text-slate-900 font-light mt-3">{item.desc}</p>
          </div>      
        ))}
      </div>
    </div>
  );
};

export default Featured;
