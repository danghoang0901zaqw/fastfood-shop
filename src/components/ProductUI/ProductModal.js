import React, { useEffect, useState } from "react";
import productData from "../../assets/fake-data/products";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductUI/ProductCard";
import { remove } from "../../redux/product-modal/productModalSlice";

const ProductModal = () => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productModal.valueItem);
  const [products, setProducts] = useState(undefined);
  useEffect(() => {
    setProducts(productData.getAllProducts().find((x) => x === productDetail));
  }, [productDetail]);
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-[100] w-full h-full bg-black bg-opacity-50 flex items-center justify-center pt-[50px] ${
        products === undefined ? "opacity-0 hidden" : "opacity-100 visible"
      }`}
    >
      <div className="relative w-[70vw]">
        {products && (
          <>
            <ProductCard product={products} isShowModal={true} />
            <button
              className="absolute top-0 right-0 bg-orange-500 uppercase p-1 text-slate-100 "
              onClick={() => dispatch(remove())}
            >
              Đóng
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
