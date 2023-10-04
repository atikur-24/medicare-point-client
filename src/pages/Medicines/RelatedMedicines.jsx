/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";
import SectionTitle from "../../components/SectionTitle";
import MediCard from "../Shared/Card/MediCard";

const RelatedMedicines = ({ category }) => {
  const [relatedMedicine, setRelatedMedicine] = useState([]);
  const { allData, isLoading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  useEffect(() => {
    const filter = allData.filter(
      (medicine) => medicine?.category?.value === category,
    );
    setRelatedMedicine(filter);
  }, [allData, category]);

  return (
    <>
      <h2 className="mb-5 border-l-4 border-my-primary pl-2 font-nunito text-xl font-semibold uppercase text-title-color lg:mb-8 lg:text-2xl lg:font-bold lg:tracking-wide">
        Related Medicines
      </h2>
      <div>
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {relatedMedicine.map((medicine, index) => (
            <SwiperSlide
              className="rounded-md border border-gray-3 shadow-lg"
              key={index}
            >
              <MediCard medicine={medicine} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RelatedMedicines;
