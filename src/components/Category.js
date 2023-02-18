import React from "react";
import category from "../assets/fake-data/category";

const Category = () => {
  return (
    <div className="flex items-center justify-between gap-10 py-[50px]">
      {category.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-5 py-4 text-slate-900 bg-[#fde4e4] rounded w-full hover:scale-110 transition-all hover:translate-y-[-20px] duration-300 cursor-pointer "
        >
          <img alt="" src={item.img} />
          <p className="font-semibold text-xl">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
