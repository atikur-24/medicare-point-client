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
import { FaArrowCircleRight } from "react-icons/fa";
import { FreeMode, Pagination } from "swiper/modules";

import LabCard from "./LabCard/LabCard";
import LabTitle from "./LabTitle";

const TopTest = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/labPopularItems").then((res) => setCategories(res?.data));
  }, []);
  return (
    <>
      <div className="mt-10 hidden md:block">
        <LabTitle title="TOP BOOKED TESTS" />
        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper relative"
        >
          {categories.map((category) => (
            <SwiperSlide className=" mt-10" key={category._id}>
              <div className="">
                <LabCard category={category} />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 right-4 z-10">
            <button type="button" className=" bg-white rounded-full ">
              <FaArrowCircleRight className="w-8 h-8 text-my-primary" />
            </button>
          </div>
        </Swiper>
      </div>
      <div className="mt-10 block md:hidden">
        <LabTitle title="TOP BOOKED TESTS" />
        <Swiper
          slidesPerView={2}
          spaceBetween={180}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper relative"
        >
          {categories.map((category) => (
            <SwiperSlide className="mt-10" key={category._id}>
              <div className="">
                <LabCard category={category} />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 right-4 z-10">
            <button type="button" className=" bg-white rounded-full ">
              <FaArrowCircleRight className="w-6 h-6 text-my-primary" />
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default TopTest;
