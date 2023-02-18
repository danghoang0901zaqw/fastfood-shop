import logo from "../assets/images/res-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#fde4e4] py-[50px]">
      <div className="px-10 grid grid-cols-4 items-start justify-items-center">
        <div className="flex flex-col gap-3">
          <img src={logo} alt="" className="w-[20%] object-contain  " />
          <h5 className="text-xl font-semibold text-slate-900">Tasty Treat</h5>
          <span className="font-light text-sm">
            Giấy CN ĐKDN số: 0311828036 do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày
            11/6/2012 sửa đổi lần thứ 23, ngày 10/12/2020 Chịu trách nhiệm quản
            lý nội dung: Trần Đăng Hoàng
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-xl font-semibold text-slate-900">
            Delivery Time
          </h5>
          <div className="">
            <p className="text-slate-900 font-medium">Sunday - Thursday</p>
            <span className="font-light text-sm">10:00am - 11:00pm</span>
          </div>
          <div>
            <p className="text-slate-900 font-medium">Friday - Saturday</p>
            <span className="font-light text-sm">Off day</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-xl font-semibold text-slate-900">Contact</h5>
          <span className="font-light text-sm">
            Location: BH City, Nguyễn Hoàng 31/4, Việt Nam
          </span>
          <p className="text-slate-900 font-medium">Phone: 0348240175</p>
          <p className="text-slate-900 font-medium">
            Email: danghoang0901zaqw@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full items-start pl-14">
          <h5 className="text-xl font-semibold text-slate-900">Newsletter</h5>
          <p className="text-slate-900 font-light">Subscribe our newsletter</p>
          <div className="flex items-center justify-center border border-slate-500 px-2 py-2 rounded w-full">
            <input
              placeholder="Enter your email"
              className="text-slate-900 w-full h-full bg-transparent outline-none border-none placeholder:text-slate-600"
            />
            <div className="w-14 h-full p-1 cursor-pointer rounded bg-slate-800 flex items-center justify-center hover:bg-slate-900 transition-colors">
              <i className="text-slate-100 text-xl bx bx-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="text-orange-600 ">
            Copyright - 2022, website made by Trần Đăng Hoàng. All Rights
            Reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p>Follow :</p>
          <ul className="flex items-center justify-center gap-4">
            <li className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white cursor-pointer hover:scale-110 hover:bg-slate-900 transition-all duration-300 ">
              <a
                rel="noreferrer"
                className="flex items-center justify-center"
                href="https://www.facebook.com/trandanghoang0901"
                target="_blank"
              >
                <i className="text-xl bx bxl-facebook-circle"></i>
              </a>
            </li>
            <li className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white cursor-pointer hover:scale-110 hover:bg-slate-900 transition-all duration-300 ">
              <a
                rel="noreferrer"
                className="flex items-center justify-center"
                href="https://www.instagram.com/danghoang0901"
                target="_blank"
              >
                <i className="text-xl bx bxl-instagram-alt"></i>
              </a>
            </li>
            <li className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white cursor-pointer hover:scale-110 hover:bg-slate-900 transition-all duration-300 ">
              <a
                rel="noreferrer"
                className="flex items-center justify-center"
                href="https://github.com/danghoang0901zaqw"
                target="__blank"
              >
                <i className="text-xl bx bxl-github"></i>
              </a>
            </li>
            <li className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white cursor-pointer hover:scale-110 hover:bg-slate-900 transition-all duration-300 ">
              <a
                rel="noreferrer"
                className="flex items-center justify-center"
                href="https://github.com/danghoang0901zaqw"
                target="__blank"
              >
                <i className="text-xl bx bxl-git"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
