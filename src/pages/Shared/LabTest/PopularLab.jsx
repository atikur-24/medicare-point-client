/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";
import "./LabStyle.css";
// import required modules
import axios from "axios";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FreeMode, Pagination } from "swiper/modules";
import LabTitle from "./LabTitle";
import PopularCategories from "./PopularCategories";

const PopularLab = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/labCategories").then((res) => setCategories(res?.data));
  }, []);
  return (
    <div className="">
      <LabTitle title="Lab CATEGORIES" />
      <Swiper
        // slidesPerView={7}
        // spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1536: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        freeMode
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper relative"
      >
        {categories.map((category) => (
          <SwiperSlide className=" mt-10 " key={category._id}>
            <PopularCategories category={category} />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 right-4 z-10">
          <div className="bg-white rounded-full ">
            <FaArrowCircleRight className="text-2xl xl:text-3xl text-my-primary" />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 z-10">
          <div className="bg-white rounded-full">
            <FaArrowCircleLeft className="text-2xl xl:text-3xl text-my-primary" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default PopularLab;
