/* eslint-disable import/no-unresolved */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/feedback").then((res) => setFeedbacks(res?.data));
  }, []);

  return (
    <div className="my-container">
      <SectionTitle title="Customer Feedback" content="Our customers have spoken of our products and the reliability of our health solutions." />
      <Swiper
        freeMode
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback?._id}>
            <div className="mb-10 px-4">
              <div className="bg-card p-6 rounded-lg shadow-xl ">
                <div className="grid justify-center items-center mb-4">
                  <h3 className="text-lg text-center text-title-color tracking-wide font-semibold -mb-20">{feedback?.name}</h3>
                  <div className="grid items-center justify-center translate-y-[90px]">
                    <figure className="ring-offset-2 ring-2  ring-[#10847e]  rounded-full ">
                      <img src={feedback?.image} alt={feedback?.name} className="rounded-full  h-20 w-20 object-cover" />
                    </figure>
                    <Rating style={{ maxWidth: 80 }} className="mt-4" value={feedback?.rating} readOnly itemStyles={customStyles} />
                  </div>
                </div>
                <div className="text-slate-7 p-4 pt-20 rounded-lg bg-white border text-justify font-nunito border-gray-3">
                  <p>
                    <BiSolidQuoteAltLeft className="w-5 h-5 inline text-[#10847e]" />
                    <span> {feedback?.quote?.slice(0, 200)}</span> <BiSolidQuoteAltRight className="w-5 h-5 inline text-[#10847e]" />
                  </p>
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
