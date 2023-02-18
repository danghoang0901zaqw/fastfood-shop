import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/images/location.png";
import { auth } from "../firebase";
import { loginAccount } from "../redux/auth/AuthenticationSlice";

const Login = ({ title }) => {
  document.title = "Fast Food Store - " + title;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginAccount(res.user));
      navigate("/");
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };
  return (
    <div className="w-full">
      <div className="px-[200px] bg-orange-600 flex justify-between py-[50px] gap-20">
        <div className="flex-[1] w-full h-full flex items-center flex-col justify-start">
          <img src={logo1} alt="" className="w-[350px] h-auto" />
          <p className="text-slate-200 text-center text-5xl">Tasty Treat </p>
          <p className="text-slate-200 text-center text-2xl mt-5">
            Cửa hàng đồ ăn nhanh được yêu thích nhất ở Đông Nam Á và Việt Nam
          </p>
        </div>
        <div className=" w-[400px] px-[20px] pt-[20px] pb-[40px] bg-white rounded">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-light ">Login</p>
            <div className="flex items-center justify-center gap-5  ">
              <div className="p-4 bg-yellow-100 border-[2px] border-yellow-500 relative">
                <p className="text-yellow-500">Login with QR Code</p>
                <div className="absolute w-4 h-4 top-[50%] translate-y-[-50%] right-[-9px] border-t-yellow-500 border-r-yellow-500 border-l-yellow-100 border-b-yellow-100 border-[2px] bg-yellow-100 rotate-45"></div>
              </div>
              <svg width="40" height="40" fill="none" className="sYzQJQ">
                <g clipPath="url(#clip0)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                    fill="#EE4D2D"
                    className=""
                  ></path>
                  <path
                    d="M37 37H22.5v3H40V22.5h-3V37z"
                    fill="#EE4D2D"
                    className=""
                  ></path>
                  <path
                    d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                    fill="#EE4D2D"
                    className=""
                  ></path>
                  <path
                    fill="#fff"
                    d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h40v40H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <form className="mt-5">
            <div className="w-full border border-slate-200 rounded mb-7">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full outline-none border-none p-3"
                type="text"
                placeholder="Email/Phone Number/User name"
              />
            </div>
            <div className="w-full border border-slate-200 rounded mb-7">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-full outline-none border-none p-3"
                type="password"
                placeholder="Password"
              />
            </div>
           {error && <p className="text-red-500 text-center mb-3">Thông tin tài khoản hoặc mật khẩu không đúng</p>}
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-600 p-2 rounded text-slate-100 "
            >
              LOGIN
            </button>
          </form>
          <div className="flex items-center justify-between mt-2">
            <p className="text-blue-600 text-xs cursor-pointer">
              Forget Password
            </p>
            <p className="text-blue-600 text-xs cursor-pointer">
              Login with SMS{" "}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-2 ">
            <div className="border border-slate-100 w-full"></div>
            <p className="text-[#cccccc] text-sm">HOẶC</p>
            <div className="border border-slate-100 w-full"></div>
          </div>
          <div className="flex items-center justify-between gap-3 mt-5">
            <button className="flex items-center justify-center gap-2 p-2 rounded border border-slate-300 w-full hover:bg-[#00000005] transition-all duration-150">
              <i className="text-2xl text-blue-600 bx bxl-facebook-circle"></i>
              Facebook
            </button>
            <button className="flex items-center justify-center gap-2 p-2 rounded border border-slate-300 w-full hover:bg-[#00000005] transition-all duration-150">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePQHKJGlrarKYj-1SD3MWgNCW68IX7gwr0w&usqp=CAU"
                alt=""
                className="w-5  h-5"
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 p-2 rounded border border-slate-300 w-full hover:bg-[#00000005] transition-all duration-150">
              <i className="text-2xl bx bxl-apple"></i>
              Apple
            </button>
          </div>
          <p className="text-slate-300 text-sm text-center mt-10">
            Bạn mới biết đến Tasty Treat ?{" "}
            <Link
              to={"/register"}
              className="text-orange-600 font-semibold cursor-pointer"
            >
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
