/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMedicines } from "../../../Features/Medicines/AllMedicines/allMedicines";
import Loader from "../../../components/Loader";
import SectionTitle from "../../../components/SectionTitle";
import MediCard from "../../Shared/Card/MediCard";

const HighestSellings = () => {
  const { allData: headingSMedicines, isloading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  return (
    <div className=" lg:pb-10 px-4 rounded-lg bg-lite">
      <div className="my-container">
        <SectionTitle title="Height selling Medicines" content="This is the most bought and used treatment for health issues." />
        {isloading ? (
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
              {headingSMedicines.map((medicine, index) => (
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
