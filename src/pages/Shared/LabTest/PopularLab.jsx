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
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`${import.meta.env.VITE_API_URL}/labCategories`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setCategories(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching labCategories:", error);
      });

    return () => {
      cancelToken.cancel();
    };
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
        <div className="absolute right-4 top-1/2 z-10">
          <div className="rounded-full bg-white ">
            <FaArrowCircleRight className="text-2xl text-my-primary xl:text-3xl" />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 z-10">
          <div className="rounded-full bg-white">
            <FaArrowCircleLeft className="text-2xl text-my-primary xl:text-3xl" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default PopularLab;
