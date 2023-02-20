import React from "react";
import location from "../assets/images/location.png";
import support from "../assets/fake-data/support";

const SupportFood = () => {
  return (
    <div className="flex gap-5">
      <div>
        <img src={location} alt="" className="" />
      </div>
      <div className="p-10">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-start font-semibold text-5xl text-slate-900">
            Why 
          </h1>
          <p className="font-semibold text-5xl text-orange-600">
            Tasty Treat ?
          </p>
        </div>
        <p className="mt-6 text-slate-900 font-light">
          Pizza Hut Việt Nam - nơi bạn được thỏa sức thể hiện chính mình với cơ
          hội hấp dẫn để phát triển cá nhân lẫn nghề nghiệp toàn diện! Chúng tôi
          tân tâm mang đến một môi trường làm việc thân thiện và chuyên nghiệp
          cho từng nhân viên, nỗ lực hoàn thiện giá trị “Cùng nhau hướng đến một
          Pizza Hut TUYỆT VỜI!”
        </p>
        <div className="flex items-start justify-center flex-col gap-4 mt-6">
          {support.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center w-full gap-2"
            >
              <div className="flex items-center justify-center gap-2">
                <i
                  className={`text-xl p-1 bg-orange-600 rounded-full text-white ${item.icon}`}
                ></i>
                <p className="font-semibold text-slate-900 text-xl">
                  {item.title}
                </p>
              </div>
              <p className="text-slate-700 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportFood;
