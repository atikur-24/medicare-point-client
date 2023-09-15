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
    const filter = allData.filter((medicine) => medicine?.category?.value === category);
    setRelatedMedicine(filter);
  }, [allData, category]);

  return (
    <>
      <h2 className="text-xl lg:text-2xl uppercase font-nunito font-semibold lg:font-bold lg:tracking-wide text-title-color border-l-4 border-my-primary mb-5 lg:mb-8 pl-2">Related Medicines</h2>
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
            <SwiperSlide className="border border-gray-3 rounded-md shadow-lg" key={index}>
              <MediCard medicine={medicine} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RelatedMedicines;
