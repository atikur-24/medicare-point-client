/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../../components/Loader";
import SectionTitle from "../../../components/SectionTitle";
import MediCard from "../../Shared/Card/MediCard";

const HighestSellings = () => {
  const [highestSellMedi, setHighestSellMedi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:5000/highestSelling-medicines").then((res) => {
      setHighestSellMedi(res?.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className=" lg:pb-10 px-4 rounded-lg bg-lite">
      <div className="my-container">
        <SectionTitle title="Height selling Medicines" content="This is the most bought and used treatment for health issues." />
        {isLoading ? (
          <Loader spinner />
        ) : (
          <div className="">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1536: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {highestSellMedi?.map((medicine, index) => (
                <SwiperSlide key={index}>
                  <MediCard medicine={medicine} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighestSellings;
