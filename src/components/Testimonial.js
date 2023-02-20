import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import avatar01 from "../assets/images/avatar_01.jpeg";
import avatar02 from "../assets/images/avatar_02.jpeg";
import network from "../assets/images/network.png";

const Testimonial = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-[50px] grid grid-cols-2 items-center gap-10">
      <div className="">
        <div>
          <h1 className="text-orange-500 text-2xl font-medium">Testimonial</h1>
          <div className="flex items-center gap-2">
            <p className="text-4xl font-bold text-slate-800">What our</p>
            <p className="text-4xl font-bold text-orange-600">customers </p>
            <p className="text-4xl font-bold text-slate-800">are saying </p>
          </div>
          <p className="font-light text-slate-700 mt-3">
            Tết đến xuân sang, nhà nhà tụ tập cùng nhau tất bật chuẩn bị những
            mâm cỗ ngày Tết. Mâm cỗ năm nay thêm phần viên mãn với sự "góp mặt"
            của Viên Khoai Môn Kim Sa.
          </p>
        </div>
        <div className="mt-6">
          <Slider {...settings}>
            <div>
              <p className="text-slate-900 font-light text-sm">
                Vừa no nê tiệc năm cũ, thì lại rủ rê tiệc năm mới. Mà nghe Hut
                mời thì bao nhiêu “hội đồng thực” nhà Hut cũng chơi tới luôn đó.
                Chọn món đã ngon, mà nghe đến tên Combo thì lại thích quá xá.
              </p>
              <div className="mt-3 flex items-center justify-start gap-3">
                <img
                  src={avatar01}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full "
                />
                <p className="text-slate-900 font-semibold">Enzo Fernandez</p>
              </div>
            </div>
            <div>
              <p className="text-slate-900 font-light text-sm">
                Kỷ lục này không chỉ là niềm vui lớn, nhưng còn là điều tuyệt
                vời nhất khi Pizza Hut được chia sẻ niềm vui ấy cùng cộng đồng,
                vì toàn bộ chiếc bánh “siêu to khủng lồ” sau đấy được dùng để
                quyên góp cho các tổ thức thiện nguyện tại Los Angeles cùng mong
                muốn mang đến bữa ăn, chia sẻ niềm vui ý nghĩa ấy.
              </p>
              <div className="mt-3 flex items-center justify-start gap-3">
                <img
                  src={avatar02}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full "
                />
                <p className="text-slate-900 font-semibold">Marcel Sabitzer</p>
              </div>
            </div>
            <div>
              <p className="text-slate-900 font-light text-sm">
                Thú vị hơn, toàn bộ quá trình làm nên “bé pizza to bự” này còn
                được phát sóng tại kênh riêng của Youtubers đình đám “Eric
                'Airrack' Decker” với số lượng người theo dõi trực tiếp lên đến
                con số 10 triệu người. Quá là nhiều thành tích “đỉnh của chóp”!
              </p>
              <div className="mt-3 flex items-center justify-start gap-3">
                <img
                  src={avatar02}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full "
                />
                <p className="text-slate-900 font-semibold">Luiz Suarez</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="w-full  ">
        <img src={network} alt="" className=" " />
      </div>
    </div>
  );
};

export default Testimonial;
