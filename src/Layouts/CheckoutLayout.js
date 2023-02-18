import Header from "../components/Header";

const CheckoutLayout = ({ children }) => {
  return (
    <div>
      <Header hide={true} />
      <div>{children}</div>
    </div>
  );
};

export default CheckoutLayout;
