/* eslint-disable import/no-unresolved */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";
// import "./LabStyle.css";
// import required modules
import { useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FreeMode, Pagination } from "swiper/modules";
import { fetchAllLabTests } from "../../../../Features/AllLabTests/allLabTest";
import LabCard from "../LabCard/LabCard";
import LabTitle from "../LabTitle";

const AllLabTests = () => {
  const { isLoading, allLabTest } = useSelector((state) => state.allLabTest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLabTests());
  }, [dispatch]);

  if (isLoading) {
    return <p className="text-center mt-10">Loading........</p>;
  }

  return (
    <>
      <div className="mt-10 hidden md:block">
        <LabTitle title="All TESTS" />
        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper relative"
        >
          {allLabTest?.map((category) => (
            <SwiperSlide className=" mt-10" key={category._id}>
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
      <div className="mt-10 block md:hidden">
        <LabTitle title="TOP BOOKED TESTS" />
        <Swiper
          slidesPerView={2}
          spaceBetween={180}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper relative"
        >
          {allLabTest?.map((category) => (
            <SwiperSlide className="mt-10" key={category._id}>
              <div className="">
                <LabCard category={category} />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 right-4 z-10">
            <div className=" bg-white rounded-full ">
              <FaArrowCircleRight className="w-6 h-6 text-my-primary" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default AllLabTests;
