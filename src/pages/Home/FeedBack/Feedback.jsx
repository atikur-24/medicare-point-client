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
    const source = axios.CancelToken.source();

    axios
      .get(`${import.meta.env.VITE_API_URL}/feedback`, {
        cancelToken: source.token,
      })
      .then((res) => setFeedbacks(res?.data))
      .catch((error) => {
        console.error("An error occurred while fetching feedback:", error);
      });

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="my-container">
      <SectionTitle
        title="Customer Feedback"
        content="Our customers have spoken of our products and the reliability of our health solutions."
      />
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
              <div className="bg-card rounded-lg p-6 shadow-xl ">
                <div className="mb-4 grid items-center justify-center">
                  <h3 className="-mb-20 text-center text-lg font-semibold tracking-wide text-title-color">
                    {feedback?.name}
                  </h3>
                  <div className="grid translate-y-[90px] items-center justify-center">
                    <figure className="rounded-full ring-2  ring-[#10847e]  ring-offset-2 ">
                      <img
                        src={feedback?.image}
                        alt={feedback?.name}
                        className="h-20  w-20 rounded-full object-cover"
                      />
                    </figure>
                    <Rating
                      style={{ maxWidth: 80 }}
                      className="mt-4"
                      value={feedback?.rating}
                      readOnly
                      itemStyles={customStyles}
                    />
                  </div>
                </div>
                <div className="rounded-lg border border-gray-3 bg-white p-4 pt-20 text-justify font-nunito text-slate-7">
                  <p>
                    <BiSolidQuoteAltLeft className="inline h-5 w-5 text-[#10847e]" />
                    <span> {feedback?.quote?.slice(0, 200)}</span>{" "}
                    <BiSolidQuoteAltRight className="inline h-5 w-5 text-[#10847e]" />
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
