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
import LabCard from "./LabCard";
import LabTitle from "./LabTitle";

const TopTest = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/public/popularLab.json").then((res) => setCategories(res?.data));
  }, []);
  return (
    <div className="mt-10">
      <LabTitle title="TOP BOOKED TESTS" />
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
        {categories.map((category, idx) => (
          <SwiperSlide className="swiper-slide-c mt-10" key={idx}>
            <div className="">
              <LabCard category={category} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopTest;
