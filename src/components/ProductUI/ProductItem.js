import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set } from "../../redux/product-modal/productModalSlice";
import { useEffect } from "react";

const ProductItem = ({ item, isBuy = true }) => {
  const dispatch = useDispatch();
  const handleGotoDetail = (prod) => {
    dispatch(set(prod));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [item]);
  return (
    <>
      <div className="border border-bg-[#fde4e4] w-full p-[30px] min-h-[350px] h-full rounded shadow-lg">
        <img
          src={item.image01}
          alt=""
          className="w-full max-h-[200px] h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
        />
        <Link to={`/products/${item.id}`}>
          <h5 className="mt-5 text-center text-xl font-bold truncate">
            {item.title}
          </h5>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-semibold text-orange-600">${item.price}</p>
          {isBuy && (
            <button
              onClick={() => handleGotoDetail(item)}
              className="bg-orange-600 rounded text-slate-100 px-3 py-2 hover:bg-orange-500 active:scale-105 transition-all duration-150"
            >
              Choose to Buy
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
