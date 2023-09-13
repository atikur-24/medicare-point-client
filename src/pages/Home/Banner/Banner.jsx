/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image2 from "../../../assets/images/banner/image2.webp";
import image3 from "../../../assets/images/banner/image3.webp";
import image4 from "../../../assets/images/banner/image4.webp";
// import image5 from "../../../assets/images/banner/image5.webp";
// import image6 from "../../../assets/images/banner/image6.webp";
import image7 from "../../../assets/images/banner/image7.webp";
import Search from "../../Shared/Navbar/Search/Search";

const Banner = () => {
  return (
    <div className="">
      <div className="px-4 py-2 block xl:hidden">
        <Search />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-1/3 w-full" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-1/3 w-full" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-1/3 w-full" src={image4} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="h-1/3 w-full" src={image5} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img className="h-1/3 w-full" src={image6} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className="h-1/3 w-full" src={image7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
