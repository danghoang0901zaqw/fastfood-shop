import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/product-cart/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product, isShowModal = false }) => {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [showMore, setShowMore] = useState(false);
  const tabs = ["Description", "Review"];
  const [tab, setTab] = useState("Description");
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  useEffect(() => {}, [tab]);
  const truncate = (str) => {
    return str?.length > 200 ? str.slice(0, 200) + " ..." : str;
  };
  const checkChooseOptions = () => {
    if (color === undefined) {
      toast.error("You need choose a color for product");
      return false;
    }
    if (size === undefined) {
      toast.error("You need choose a size for product");
      return false;
    }
    return true;
  };
  const handleAddToCart = (item) => {
    if (checkChooseOptions()) {
      dispatch(
        addItems({
          id: item.id,
          image01: item.image01,
          title: item.title,
          description: item.description,
          price: item.price,
          quantity: 1,
          color: color,
          size: size,
        })
      );
      toast.success("Add Item successfully");
    }
  };
  return (
    <div
      className={`py-[50px] ${
        isShowModal
          ? "px-10 bg-white h-[60vh] overflow-y-scroll rounded translate-y-[-0%]"
          : ""
      }`}
    >
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
      <ToastContainer />
      <div className="flex gap-10">
        <div className="flex flex-[1] flex-col   w-full  gap-10">
          <div className="flex gap-10 ">
            <div className="flex gap-4 flex-col">
              <img
                onClick={() => setPreviewImg(product?.image02)}
                src={product?.image02}
                alt=""
                className="w-[90px] h-[90px] object-cover cursor-pointer rounded-xl"
              />
              <img
                onClick={() => setPreviewImg(product?.image03)}
                src={product?.image03}
                alt=""
                className="w-[90px] h-[90px] object-cover cursor-pointer rounded-xl"
              />
              <img
                onClick={() => setPreviewImg(product?.image01)}
                src={product?.image01}
                alt=""
                className="w-[90px] h-[90px] object-cover cursor-pointer rounded-xl"
              />
            </div>
            <div>
              <img
                src={previewImg}
                alt=""
                className="w-[400px] h-[300px] object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex items-start justify-center flex-col">
            {showMore ? (
              <p className="text-slate-900 font-light">
                {product?.description}
              </p>
            ) : (
              <p className="text-slate-900 font-light">
                {truncate(product?.description)}
              </p>
            )}
            {product?.description?.length > 200 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 m-auto bg-orange-600 text-slate-100 rounded py-2 px-3 font-semnibold max-w-[100px] w-full"
              >
                {showMore ? "Xem thêm" : "Ẩn bớt"}
              </button>
            )}
          </div>
        </div>
        <div className={`flex-[1] ${isShowModal ? "sticky top-1 h-full" : ""}`}>
          <h5 className="text-2xl text-slate-900 font-bold">
            {product?.title}
          </h5>
          <div className="mt-5">
            <div className="flex items-center justify-start gap-5 ">
              <p className="flex items-center justify-start gap-4 ">Price:</p>
              <p className="text-orange-600 font-bold text-xl">
                ${product?.price}
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <p>Category:</p>
              <div className="bg-orange-200 capitalize px-3 py-2 rounded">
                {product?.category}
              </div>
            </div>
            <div className="flex items-center gap-5 mt-4 ">
              <p>Color:</p>
              {product?.colors?.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center  border-[2px]  w-12 h-12 p-0.5 rounded-full cursor-pointer ${
                    color === item ? "border-blue-600" : "border-[#8d8d8d]"
                  }`}
                >
                  <div
                    onClick={() => setColor(item)}
                    className={`flex items-center justify-center w-full h-full rounded-full ${
                      item === "black"
                        ? "bg-black"
                        : item === "white"
                        ? "bg-white"
                        : `bg-${item}-500`
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 mt-4 ">
              <p>Size:</p>
              {product?.size?.map((item, index) => (
                <div
                  onClick={() => setSize(item)}
                  key={index}
                  className={`flex items-center justify-center text-slate-900 border-[2px]  font-bold uppercase  w-12 h-12 rounded-full cursor-pointer ${
                    size === item ? "border-blue-600" : "border-[#8d8d8d]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-7 bg-orange-600 capitalize px-3 py-2 rounded text-slate-100 font-semibold text-[18px] active:scale-105 transition-all duration-150"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {!isShowModal && (
        <div className="flex flex-col">
          <div className="flex gap-3 mt-10">
            {tabs.map((item, index) => (
              <div
                className={`font-medium text-xl cursor-pointer ${
                  item === tab ? "text-orange-500" : "text-slate-900"
                }`}
                key={index}
                onClick={() => setTab(item)}
              >
                {item}
              </div>
            ))}
          </div>
          {tab === "Description" ? (
            <div className="mt-2">{product?.description}</div>
          ) : (
            <div className="flex flex-col gap-6 mt-6">
              {product?.review.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-start gap-2">
                    <img
                      src={item.image}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p>{item.name}</p>
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
