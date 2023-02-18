import { useLocation } from "react-router-dom";
import logo from "../assets/images/res-logo.png";

const LayoutOnly = ({ children }) => {
  let location = useLocation();
  return (
    <div>
      <header className="px-10 h-20 py-2 flex items-center justify-between ">
        <div className="flex items-center justify-center gap-3">
          <img src={logo} alt="" className="w-11 h-11 object-cover" />
          <p className="text-2xl">
            {location.pathname === "/login" ? "Login" : "Register"}
          </p>
        </div>
        <p className="text-orange-600 cursor-pointer">Can you help me ?</p>
      </header>
      <div>
        <div>{children}</div>
      </div>
      <div className="bg-[#f5f5f5] w-full">
        <div className="grid grid-cols-5 px-10 py-10 ">
          <div className="px-[20px]">
            <h5 className="py-5 text-xs text-slate-900 font-bold ">
              CHĂM SÓC KHÁCH HÀNG
            </h5>
            <ul className="flex flex-col items-start justify-center gap-3">
              <li className="text-xs text-[#747474]"> Trung Tâm Trợ Giúp</li>
              <li className="text-xs text-[#747474]"> Shopee Blog</li>
              <li className="text-xs text-[#747474]"> Shopee Mall</li>
              <li className="text-xs text-[#747474]"> Hướng Dẫn Mua Hàng</li>
              <li className="text-xs text-[#747474]"> Hướng Dẫn Bán Hàng</li>
              <li className="text-xs text-[#747474]"> Thanh Toán</li>
              <li className="text-xs text-[#747474]"> Shopee Xu</li>
              <li className="text-xs text-[#747474]"> Vận Chuyển</li>
              <li className="text-xs text-[#747474]"> Trả Hàng & Hoàn Tiền</li>
              <li className="text-xs text-[#747474]"> Chăm Sóc Khách Hàng</li>
              <li className="text-xs text-[#747474]"> Chính Sách Bảo Hành</li>
            </ul>
          </div>
          <div className="px-[20px]">
            <h5 className="py-5 text-xs text-slate-900 font-bold ">
              VỀ TASTY TREAT
            </h5>
            <ul className="flex flex-col items-start justify-center gap-3">
              <li className="text-xs text-[#747474]">
                Giới Thiệu Về Shopee Việt Nam
              </li>
              <li className="text-xs text-[#747474]">Tuyển Dụng</li>
              <li className="text-xs text-[#747474]">Điều Khoản Shopee</li>
              <li className="text-xs text-[#747474]">Chính Sách Bảo Mật</li>
              <li className="text-xs text-[#747474]">Chính Hãng</li>
              <li className="text-xs text-[#747474]">Kênh Người Bán</li>
              <li className="text-xs text-[#747474]">Flash Sales</li>
              <li className="text-xs text-[#747474]">
                Chương Trình Tiếp Thị Liên Kết Shopee
              </li>
              <li className="text-xs text-[#747474]">
                Liên Hệ Với Truyền Thông
              </li>
            </ul>
          </div>
          <div className="px-[20px]">
            <div>
              <h5 className="py-5 text-xs text-slate-900 font-bold ">
                THANH TOÁN
              </h5>
              <ul className="grid grid-cols-3 gap-2">
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/bc2a874caeee705449c164be385b796c"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/2c46b83d84111ddc32cfd3b5995d9281"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/5e3f0bee86058637ff23cfdf2e14ca09"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/9263fa8c83628f5deff55e2a90758b06"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/0217f1d345587aa0a300e69e2195c492"
                    alt=""
                    className=""
                  />
                </li>
              </ul>
            </div>
            <div>
              <h5 className="py-5 text-xs text-slate-900 font-bold ">
                ĐƠN VỊ VẬN CHUYỂN
              </h5>
              <ul className="grid grid-cols-3 gap-2">
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/d10b0ec09f0322f9201a4f3daf378ed2"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/77bf96a871418fbc21cc63dd39fb5f15"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/59270fb2f3fbb7cbc92fca3877edde3f"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/957f4eec32b963115f952835c779cd2c"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/0d349e22ca8d4337d11c9b134cf9fe63"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/3900aefbf52b1c180ba66e5ec91190e5"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/6e3be504f08f88a15a28a9a447d94d3d"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/b8348201b4611fc3315b82765d35fc63"
                    alt=""
                    className=""
                  />
                </li>
                <li className="shadow-lg rounded bg-white filter drop-shadow-lg p-1 flex items-center justify-center">
                  <img
                    src="https://cf.shopee.vn/file/0b3014da32de48c03340a4e4154328f6"
                    alt=""
                    className=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="px-[20px]">
            <h5 className="py-5 text-xs text-slate-900 font-bold ">
              THEO DÕI CHÚNG TÔI TRÊN
            </h5>
            <ul className="flex flex-col items-start justify-center gap-3">
              <li className="flex items-center justify-start gap-2 text-xs text-[#747474]">
                <i className="bx bxl-facebook-circle text-xl"></i>
                <p>Facebook</p>
              </li>
              <li className="flex items-center justify-start gap-2 text-xs text-[#747474]">
                <i className="bx bxl-instagram-alt text-xl"></i>
                <p>Instagram</p>
              </li>
              <li className="flex items-center justify-start gap-2 text-xs text-[#747474]">
                <i className="bx bxl-linkedin-square text-xl"></i>
                <p>LinkedIn</p>
              </li>
            </ul>
          </div>
          <div className="px-[20px]">
            <h5 className="py-5 text-xs text-slate-900 font-bold ">
              TẢI ỨNG DỤNG SHOPEE NGAY THÔI
            </h5>
            <div className="flex gap-3">
              <div className="filter drop-shadow-lg">
                <img
                  src="https://cf.shopee.vn/file/a5e589e8e118e937dc660f224b9a1472"
                  alt=""
                  className="h-[88px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-white filter drop-shadow-lg p-1">
                  <img
                    src="https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163"
                    alt=""
                    className=""
                  />
                </div>
                <div className="bg-white filter drop-shadow-lg p-1">
                  <img
                    src="https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def"
                    alt=""
                    className=""
                  />
                </div>
                <div className="bg-white filter drop-shadow-lg p-1">
                  <img
                    src="https://cf.shopee.vn/file/35352374f39bdd03b25e7b83542b2cb0"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[50px] border-t border-[#cccc]"></div>
        <div className="p-10">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#747474]">
              © 2023 Tasty Treat. Tất cả các quyền được bảo lưu.
            </p>
            <p className="text-center text-sm text-[#747474]">
              Quốc gia & Khu vực: Singapore | Indonesia | Đài Loan | Thái Lan |
              Malaysia | Việt Nam | Philippines | Brazil | México | Colombia |
              Chile | Poland
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 pt-20 pb-5">
            <p className="text-sm text-[#747474]">CHÍNH SÁCH BẢO MẬT</p>
            <p className="text-sm text-[#747474]">QUY CHẾ HOẠT ĐỘNG</p>
            <p className="text-sm text-[#747474]">CHÍNH SÁCH VẬN CHUYỂN</p>
            <p className="text-sm text-[#747474]">
              CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
            </p>
          </div>
          <div className="pb-5">
            <p className="text-center text-sm text-[#747474]">
              Công ty TNHH Tasty Treat
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-sm text-[#747474]">
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
              Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
              đài hỗ trợ: 19001221 - Email: cskh@hotro.tastytreat.vn
            </p>
            <p className="text-sm text-[#747474]">
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
              liên hệ: 024 73081221 (ext 4678)
            </p>
            <p className="text-sm text-[#747474]">
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
              cấp lần đầu ngày 10/02/2015
            </p>
            <p className="text-sm text-[#747474]">
              © 2015 - Bản quyền thuộc về Công ty TNHH Tasty Treat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutOnly;
