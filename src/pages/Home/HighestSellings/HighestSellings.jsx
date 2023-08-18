/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../Shared/Heading/Heading";
import HSMedicine from "./HSMedicine";

const HighestSellings = () => {
  const [headingSMedicines, setHeadingSMedicines] = useState([]);
  useEffect(() => {
    axios.get("/categories.json").then((res) => setHeadingSMedicines(res?.data));
  }, []);

  return (
    <div className="my-container py-10 px-4 rounded-lg bg-lite">
      <Heading title="Highest selling Medicine " center />

      <div className="hidden lg:block">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {headingSMedicines.map((medicine, index) => (
            <SwiperSlide key={index}>
              <HSMedicine medicine={medicine} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {headingSMedicines.map((medicine, index) => (
            <SwiperSlide key={index}>
              <HSMedicine medicine={medicine} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {headingSMedicines.map((medicine, index) => (
            <SwiperSlide key={index}>
              <HSMedicine medicine={medicine} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HighestSellings;
