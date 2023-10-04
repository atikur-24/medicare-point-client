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
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`${import.meta.env.VITE_API_URL}/labPopularItems`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setCategories(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching labPopularItems:", error);
      });

    return () => cancelToken.cancel();
  }, []);

  return (
    <div className="mt-10 ">
      <LabTitle title="TOP BOOKED TESTS" />
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 70,
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
            slidesPerView: 6,
            spaceBetween: 40,
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
          <SwiperSlide className=" mt-10" key={category._id}>
            <div className="">
              <LabCard category={category} />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute right-4 top-1/2 z-10">
          <div className=" rounded-full    bg-white ">
            <FaArrowCircleRight className="text-2xl text-my-primary xl:text-3xl" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TopTest;
