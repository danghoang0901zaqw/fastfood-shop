import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import navLinks from "../assets/fake-data/navLinks";
import logo from "../assets/images/res-logo.png";
import { logoutAccount } from "../redux/auth/AuthenticationSlice";
import { setOpenCart } from "../redux/product-cart/productSlice";

const Header = ({ hide = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleScrolled = () => {
    setScrolled(window.scrollY >= 80);
  };
  const handleLogout = async () => {
    dispatch(logoutAccount());
    navigate("/login");
  };
  const userID = useSelector((state) => state.auth.user);
  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, [scrolled]);
  const dispatch = useDispatch();
  const handleOpenCart = () => {
    dispatch(setOpenCart(true));
  };
  const cartProducts = useSelector((state) => state.cartItems.cartProducts);
  const totalAmount = cartProducts.reduce(
    (total, item) => (total += item.quantity),
    0
  );
  const active =
    "text-xl font-semibold h-full w-32 text-orange-500 flex items-center justify-center ";
  const notActive =
    "text-xl font-semibold h-full w-32 text-slate-900 hover:text-orange-500 flex items-center justify-center transition-all duration-300 hover:bg-slate-200 rounded ";
  return (
    <div
      className={`flex items-center justify-between px-5 h-[80px] w-full ${
        scrolled ? "sticky top-0  shadow-lg bg-white z-50" : ""
      }`}
    >
      <div className="flex flex-col items-center h-full">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="" className="w-[35%] object-contain pt-2 " />
        </Link>
        <h5 className="text-base font-semibold text-slate-900">Tasty Treat</h5>
      </div>
      <div className="flex items-center justify-center h-full">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center justify-between h-full gap-4">
        <div
          className="relative cursor-pointer w-16 h-full flex items-center justify-center "
          onClick={hide ? () => {} : handleOpenCart}
        >
          <i className="text-2xl text-slate-900  bx bx-shopping-bag"></i>
          {cartProducts.length > 0 && (
            <p className="absolute w-5 h-5 rounded-full bg-green-500 top-[30%] left-[50%] text-slate-100 text-sm flex items-center justify-center">
              {totalAmount}
            </p>
          )}
        </div>
        <div className={`cursor-pointer h-full flex items-center justify-center ${userID?.displayName?.length>=15 ? 'w-[200px]':'w-[140px]'}`}>
          {userID ? (
            <>
              <div className="flex items-center justify-center gap-3 account-user">
                <img
                  src={userID.photoURL}
                  alt={userID.photoURL}
                  className="w-7 h-7 object-cover rounded-full"
                />
                <p className="text-slate-900 font-bold">{userID.displayName}</p>
                <ul className="options-user">
                  <li className="py-2 px-4 flex items-center gap-3 hover:bg-[#f8f8f8]">
                    Profile
                    <i className="text-xl bx bx-user"></i>
                  </li>
                  <Link to="/cart">
                    <li className="py-2 px-4 flex items-center gap-3 hover:bg-[#f8f8f8]">
                      Billing
                      <i className="bx bx-shopping-bag"></i>
                    </li>
                  </Link>
                  <li
                    className="py-2 px-4 flex items-center gap-3 hover:bg-[#f8f8f8]"
                    onClick={handleLogout}
                  >
                    Logout
                    <i className="text-xl bx bx-log-in"></i>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center w-full justify-center account-user">
                <i className="text-slate-900 text-2xl bx bx-user"></i>
                <ul className="options-user">
                  <Link to="/login">
                    <li className="py-2 px-4 flex items-center gap-3 hover:bg-[#f8f8f8]">
                      Sign In
                      <i className="text-xl bx bx-log-out"></i>
                    </li>
                  </Link>
                  <Link to="/register">
                    <li className="py-2 px-4 flex items-center gap-3 hover:bg-[#f8f8f8]">
                      Sign Up
                      <i className="text-xl bx bx-log-in"></i>
                    </li>
                  </Link>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="md:hidden cursor-pointer w-16 h-full flex items-center justify-center ">
          <i className="text-2xl text-slate-900 active:scale-105 bx bx-menu"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
