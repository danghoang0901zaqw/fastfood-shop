import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductUI/ProductModal";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div> {children}</div>
      <Footer />
      <ProductModal />
    </div>
  );
};

export default DefaultLayout;
