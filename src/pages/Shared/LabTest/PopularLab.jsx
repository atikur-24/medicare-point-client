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
    <>
      <div className="hidden md:block ">
        <LabTitle title="Lab CATEGORIES" />
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
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
            <button type="button" className=" bg-white ">
              <FaArrowCircleRight className="w-8 h-8 text-my-primary" />
            </button>
          </div>
          <div className="absolute top-1/2 left-0 z-10">
            <button type="button" className=" bg-white ">
              <FaArrowCircleLeft className="w-8 h-8 text-my-primary" />
            </button>
          </div>
        </Swiper>
      </div>
      <div className="block md:hidden">
        <LabTitle title="Lab CATEGORIES" />
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper relative"
        >
          {categories.map((category) => (
            <SwiperSlide className=" mt-10" key={category._id}>
              <PopularCategories category={category} />
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 right-4 z-10">
            <button type="button" className=" bg-white ">
              <FaArrowCircleRight className="w-6 h-6 text-my-primary" />
            </button>
          </div>
          <div className="absolute top-1/2 left-0 z-10">
            <button type="button" className=" bg-white ">
              <FaArrowCircleLeft className="w-6 h-6 text-my-primary" />
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default PopularLab;
