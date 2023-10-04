import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/modules";

import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import image2 from "../../assets/Medicine/Home10_bg1.jpg";
import image1 from "../../assets/Medicine/banner_img-25.jpg";
import image3 from "../../assets/Medicine/medi-banner.jpg";

const MedicineSwiper = () => {
  return (
    <div className="swiper-medicine w-full">
      <Swiper
        className="w-full"
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        modules={[Autoplay, Pagination]}

        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="carousel-item relative h-96   w-full">
            <div className="absolute left-16 top-8 space-y-2 text-center">
              <h1 className="text-xl font-semibold text-white">New Nowosc</h1>
              <h1 className="text-3xl font-bold text-white">MEGA SALE</h1>
              <Link
                to="/details/6507073d6b95c8f9aa872aef"
                className="rounded border bg-transparent p-1 text-base font-medium text-white hover:bg-my-primary"
              >
                Order Now
              </Link>
            </div>
            <img className="w-full" src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item relative h-96  w-full">
            <div className="absolute left-12 top-8 space-y-2 text-center ">
              <h1 className="text-xl font-semibold text-my-primary">
                MediCare Shop
              </h1>
              <h1 className="text-3xl font-bold text-my-primary">
                UP TO 50% OFF
              </h1>
              <Link
                to="/details/6506812448c96f8bbaf0107e"
                className="rounded border bg-transparent p-1 text-base font-medium text-my-primary hover:bg-lite"
              >
                Order Now
              </Link>
            </div>
            <img className="w-full" src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item relative h-96  w-full">
            <div className="absolute left-12 top-8 space-y-2 text-center">
              <h1 className="text-xl font-semibold text-white">
                Probiocare Complete
              </h1>
              <h1 className="text-3xl font-bold text-white">MEGA SALE</h1>
              <Link
                to="/details/650700a16b95c8f9aa872ae7"
                className="rounded border bg-transparent p-1 text-base font-medium text-white hover:bg-my-primary"
              >
                Order Now
              </Link>
            </div>
            <img className="w-full" src={image3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MedicineSwiper;
