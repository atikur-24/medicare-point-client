/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../../components/SectionTitle";
import "./styles.css";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback.json").then((res) => setFeedbacks(res.data));
  }, []);

  return (
    <div className="my-container">
      <SectionTitle
        title="Customer Feedback"
        content="Our customers have spoken, highlighting the authenticity of our products, the exceptional level of service they receive, and the reliability of our health solutions. Your feedback fuels our drive to continuously improve and serve you better."
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {feedbacks.map((feedback, idx) => (
          <SwiperSlide key={idx}>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4  mb-10 px-4">
                <div className="bg-card p-6 rounded-lg shadow-xl ">
                  <div className="grid justify-center items-center mb-4">
                    <h3 className="text-lg font-semibold -mb-20">{feedback.name}</h3>
                    <div className="grid items-center justify-center translate-y-20">
                      {/* Adjust the width and height of the image */}
                      <img src={feedback.image} alt={feedback.name} style={{ height: "80px", width: "80px" }} className="rounded-full w-16" />
                      <Rating readonly initialRating={feedback.rating} emptySymbol={<span className="text-gray-300">&#9734;</span>} fullSymbol={<span className="text-yellow-400">&#9733;</span>} />
                    </div>
                  </div>
                  <p className="text-gray-200 h-44 p-4 pt-20 rounded bgc-salt-6 text-justify">{feedback.quote.slice(0, 100)}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
