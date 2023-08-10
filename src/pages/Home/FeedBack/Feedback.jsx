/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Rating from "react-rating";
import { Link } from "react-router-dom";
import Heading from "../../Shared/Heading/Heading";

import "./styles.css";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback.json").then((res) => setFeedbacks(res.data));
  }, []);

  return (
    <div className=" my-container">
      <Heading title="Feedback" center />
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
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 h-full mb-10 px-4">
              <div className="bg-gray-300 h-full p-6 rounded-lg shadow-xl ">
                <div className="grid justify-center items-center mb-4">
                  <h3 className="text-lg font-semibold -mb-20">
                    {feedback.name}
                  </h3>
                  <div className="grid items-center justify-center translate-y-20">
                    {/* Adjust the width and height of the image */}
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      style={{ height: "80px", width: "80px" }}
                      className="rounded-full w-16"
                    />
                    <Rating
                      readonly
                      initialRating={feedback.rating}
                      emptySymbol={
                        <span className="text-gray-300">&#9734;</span>
                      }
                      fullSymbol={
                        <span className="text-yellow-400">&#9733;</span>
                      }
                    />
                  </div>
                  SwiperSlide{" "}
                </div>
                <p className="text-white p-4 pt-20 rounded bg-slate-700">
                  {feedback.quote}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mx-auto text-center">
        <Link to="/">
          <button type="button" className="btn btn-wide mt-6">
            Feedback Junction
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
