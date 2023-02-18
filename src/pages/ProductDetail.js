import React from "react";
import CommonSection from "../components/CommonSection";
import { useParams } from "react-router-dom";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductUI/ProductCard";
import CartSidebar from "../components/CartUI/CartSidebar";
import RelatedProduct from "../components/ProductUI/RelatedProduct";

const ProductDetail = ({ title }) => {
  const { slug } = useParams();
  const productDetail = productData.getAllProducts().find((x) => x.id === slug);
  document.title = "Fast Food Store - " + title;
  return (
    <div className="px-10">
      <CartSidebar />
      <CommonSection title={productDetail.title} />
      <div>
        <ProductCard product={productDetail} />
      </div>
      <RelatedProduct title="Related Products" product={productDetail}/>
    </div>
  );
};

export default ProductDetail;
