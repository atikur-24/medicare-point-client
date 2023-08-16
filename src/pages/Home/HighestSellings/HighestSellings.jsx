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
    <div className="my-container py-10">
      <Heading title="Highest selling Medicine " center />

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
  );
};

export default HighestSellings;
