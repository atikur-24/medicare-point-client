import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/modules";

import { Autoplay, Pagination } from "swiper/modules";
import image2 from "../../assets/Medicine/Home10_bg1.jpg";
import image1 from "../../assets/Medicine/banner_img-25.jpg";
import image3 from "../../assets/Medicine/medi-banner.jpg";

const MedicineSwiper = () => {
  return (
    <div className="w-full swiper-medicine">
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
          <div className="carousel-item h-96 w-full">
            <div className="absolute top-8 left-16 text-center space-y-2">
              <h1 className="text-white text-xl font-semibold">New Nowosc</h1>
              <h1 className="text-white text-3xl font-bold">MEGA SALE</h1>
              <button type="button" className="text-base font-medium p-1 text-white border rounded bg-transparent hover:bg-my-primary">
                Order Now
              </button>
            </div>
            <img className="w-full" src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item h-96 w-full">
            <div className="absolute top-8 left-16 text-center space-y-2">
              <h1 className="text-my-primary text-xl font-semibold">MediCare Shop</h1>
              <h1 className="text-my-primary text-3xl font-bold">UP TO 50% OFF</h1>
              <button type="button" className="text-base font-medium p-1 text-my-primary border rounded bg-transparent hover:bg-lite">
                Order Now
              </button>
            </div>
            <img className="w-full" src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item h-96 w-full">
            <div className="absolute top-8 left-16 text-center space-y-2">
              <h1 className="text-white text-xl font-semibold">Probiocare Complete</h1>
              <h1 className="text-white text-3xl font-bold">MEGA SALE</h1>
              <button type="button" className="text-base font-medium p-1 text-white border rounded bg-transparent hover:bg-my-primary">
                Order Now
              </button>
            </div>
            <img className="w-full" src={image3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MedicineSwiper;
