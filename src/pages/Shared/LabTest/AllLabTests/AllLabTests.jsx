/* eslint-disable import/no-unresolved */

// Import Swiper React components
import { FaArrowCircleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../../../components/Loader";
import LabCard from "../LabCard/LabCard";
import LabTitle from "../LabTitle";

const AllLabTests = ({ isLoading, allLabTest }) => {
  if (isLoading) {
    return <Loader spinner />;
  }

  return (
    <div className="mt-10">
      <LabTitle title="All TESTS" />
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 70,
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
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        freeMode
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper relative"
      >
        {allLabTest.length === 0 && (
          <div className="flex flex-col justify-center items-center">
            <img className="w-32" src="https://i.ibb.co/4Wd3BdR/no-results.png" alt="No data found" />
            <p>Sorry, we could not find what you are looking for. Please search by right name</p>
          </div>
        )}
        {allLabTest?.map((category) => (
          <SwiperSlide className="mt-10" key={category._id}>
            <div className="">
              <LabCard category={category} />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 right-4 z-10">
          <div className=" bg-white rounded-full ">
            <FaArrowCircleRight className="w-8 h-8 text-my-primary" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default AllLabTests;
