import React from "react";
import productData from "../../assets/fake-data/products";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ product ,title}) => {
  const categoryProducts = productData
    .getAllProducts()
    .filter((x) => x.category === product.category);
  const randomCategoryProducts = productData.getProducts(categoryProducts, 4);
  return (
   <div className="pb-10">
      <h2 className="text-2xl font-bold text slate-900">{title}</h2>
      <div className="py-5 grid grid-cols-4 items-center justify-center gap-3">
        {randomCategoryProducts.map((item,index) => (
          <ProductItem key={index} item={item} isBuy={false} />
        ))}
      </div>
   </div>
  );
};

export default RelatedProduct;
