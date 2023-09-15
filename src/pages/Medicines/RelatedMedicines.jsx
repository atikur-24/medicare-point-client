/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";
import SectionTitle from "../../components/SectionTitle";
import MediCard from "../Shared/Card/MediCard";

const RelatedMedicines = ({ category }) => {
  const [relatedMedicine, setReletedMedicine] = useState([]);
  const { allData, isLoading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  useEffect(() => {
    const filter = allData.filter((medicine) => medicine?.category?.value === category);
    setReletedMedicine(filter);
  }, [allData, category]);

  return (
    <div className="my-container">
      <SectionTitle title="Related Medicines" content="This is the most bought and used treatment for health issues. Many people trust and use it to feel better." />
      <div className="">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
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
    </div>
  );
};

export default RelatedMedicines;
