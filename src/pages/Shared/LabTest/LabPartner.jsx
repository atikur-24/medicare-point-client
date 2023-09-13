/* eslint-disable import/no-unresolved */

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../../assets/Lab/HealthLab.png";
import image3 from "../../../assets/Lab/LifeScan.png";
import image2 from "../../../assets/Lab/TestPro.png";

const LabPartner = () => {
  return (
    <div className="my-contaiiner grid md:grid-cols-3 grid-cols-1 md:gap-8">
      <div className="rounded-lg bg-my-primary text-white w-full h-36 md:h-full flex items-center justify-center text-3xl font-semibold mb-6">Lab Partner</div>
      <div className="col-span-2">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="py-4 object-cover border border-my-accent rounded-lg text-center space-y-4 h-44">
              <img src={image1} alt="" className="w-20 mx-auto" />
              <h3 className="text-sm md:text-lg font-medium">HealthLab</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-4 object-cover border border-my-accent rounded-lg text-center space-y-4 h-44">
              <img src={image2} alt="" className="w-20 mx-auto" />
              <h3 className="text-sm md:text-lg font-medium">LifeScan Laboratories</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-4 object-cover border border-my-accent rounded-lg text-center space-y-4 h-44">
              <img src={image3} alt="" className="w-20 mx-auto" />
              <h3 className="text-sm md:text-lg font-medium">ProHealth Labs</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-4 object-cover border border-my-accent rounded-lg text-center space-y-4 h-44">
              <img src={image1} alt="" className="w-20 mx-auto" />
              <h3 className="text-sm md:text-lg font-medium">DiagnoTech Solutions</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LabPartner;
