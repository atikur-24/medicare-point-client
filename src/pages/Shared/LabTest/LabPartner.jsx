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
    <div className="my-contaiiner grid grid-cols-1 md:grid-cols-3 md:gap-8">
      <div className="mb-6 flex h-36 w-full items-center justify-center rounded-lg bg-my-primary text-3xl font-semibold text-white md:h-full">
        Lab Partner
      </div>
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
            <div className="h-44 space-y-4 rounded-lg border border-my-accent object-cover py-4 text-center">
              <img src={image1} alt="" className="mx-auto w-20" />
              <h3 className="text-sm font-medium md:text-lg">HealthLab</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-44 space-y-4 rounded-lg border border-my-accent object-cover py-4 text-center">
              <img src={image2} alt="" className="mx-auto w-20" />
              <h3 className="text-sm font-medium md:text-lg">
                LifeScan Laboratories
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-44 space-y-4 rounded-lg border border-my-accent object-cover py-4 text-center">
              <img src={image3} alt="" className="mx-auto w-20" />
              <h3 className="text-sm font-medium md:text-lg">ProHealth Labs</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-44 space-y-4 rounded-lg border border-my-accent object-cover py-4 text-center">
              <img src={image1} alt="" className="mx-auto w-20" />
              <h3 className="text-sm font-medium md:text-lg">
                DiagnoTech Solutions
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LabPartner;
