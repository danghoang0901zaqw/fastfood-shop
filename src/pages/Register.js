import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import addAvatar from "../assets/images/addAvatar.png";
import logo1 from "../assets/images/location.png";
import { auth, db, storage } from "../firebase";
import { loginAccount } from "../redux/auth/AuthenticationSlice";

const Register = ({ title }) => {
  document.title = "Fast Food Store - " + title;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { login } = useParams();
  const [values, setValues] = useState({
    username: "",
    email: "",
    file: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "Username",
      errorMessage:
        "Tên đăng nhập phải từ 8-16 kí tự !",
      require: true,
      pattern: "^[a-zA-Z\s\.]{3,16}$",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMessage: "Trường này phải là Email ",
      require: true,
      pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
    },
    {
      id: 3,
      type: "password",
      name: "password",
      placeholder: "Password",
      errorMessage:
        "Mật khẩu phải từ 8-20 kí tự bao gồm ít nhất 1 chữ hoa, 1 số, 1 kí tự đặc biệt",
      require: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 4,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      errorMessage: "Mật khẩu không trùng khớp",
      require: true,
      pattern: values.password,
    },
    {
      id: 5,
      type: "file",
      name: "file",
      placeholder: "",
      errorMessage: "Chon file",
    },
  ];
  const [focused, setFocused] = useState(false);
  const handleBlur = (e) => {
    setFocused(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const date = new Date().getTime();
      const storageRef = ref(storage, `${values.username + date}`);

      await uploadBytesResumable(storageRef, values.file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: values.username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: values.username,
              email: values.email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            dispatch(loginAccount(res.user));
            navigate("/");
          } catch (err) {
            console.log(err.message);
          }
        });
      });
      console.log(res.user);
    } catch (err) {
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
            <p className="text-2xl font-light ">
              {login ? "Login" : "Register"}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            {inputs?.map((input, index) => {
              return (
                input.name !== "file" && (
                  <div
                    key={index}
                    className="w-full  mb-7"
                  >
                    <input
                      value={values[input.name]}
                      type={input.type}
                      onChange={(e) =>
                        setValues({ ...values, [input.name]: e.target.value })
                      }
                      placeholder={input.placeholder}
                      required={input.require}
                      onBlur={handleBlur}
                      focused={focused.toString()}
                      pattern={input.pattern}
                      className="w-full h-full outline-none p-3 border border-slate-200 rounded focus-within:border-[#aeaeae]"
                    />
                    <span className="mt-2">{input.errorMessage}</span>
                  </div>
                )
              );
            })}
            <div className="w-full rounded mb-7">
              <input
                onChange={(e) => setValues({ ...values, file: e.target.files[0] })}
                required
                className="hidden"
                type="file"
                id="file"
              />
              <label
                htmlFor="file"
                className="flex items-center justify-start w-full gap-3 "
              >
                <img src={addAvatar} alt="" className="w-8 cursor-pointer" />
                <p className="text-[#747474] ">Add an avatar</p>
              </label>
              <span>{inputs[4].errorMessage}</span>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-600 p-2 rounded text-slate-100 "
            >
              CREATE AN ACCOUNT
            </button>
          </form>
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
          </div>
          <p className="text-slate-300 text-sm text-center mt-10">
            You have Account ?{" "}
            <Link
              to={"/login"}
              className="text-orange-600 font-semibold cursor-pointer"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
