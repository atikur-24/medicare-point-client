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
import { FreeMode, Pagination } from "swiper/modules";
import LabTitle from "./LabTitle";
import PopularCategories from "./PopularCategories";

const PopularLab = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/labCategories").then((res) => setCategories(res?.data));
  }, []);
  return (
    <div>
      <LabTitle title="POPULAR CATEGORIES" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide className="swiper-slide-d mt-10" key={category._id}>
            <PopularCategories category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularLab;
