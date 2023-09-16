/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMedicines } from "../../../Features/Medicines/AllMedicines/allMedicines";
import bannerImage from "../../../assets/images/services/01.webp";
import bannerBackground from "../../../assets/images/services/features.webp";
import Loader from "../../../components/Loader";
import SectionTitle from "../../../components/SectionTitle";
import MediCard from "../../Shared/Card/MediCard";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";

const MediCards = () => {
  const { isloading, allData } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  const PainRefilMedicins = allData.filter((item) => item?.category?.value === "Pain-Relief");

  return (
    <>
      <div className="my-container my-10">
        <SectionTitle title="Pain Relief" content="Pain Relief medicines is like a helper for when something hurts." />

        {isloading ? (
          <Loader spinner />
        ) : (
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
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {PainRefilMedicins?.map((medicine) => (
                <SwiperSlide key={medicine?._id}>
                  <MediCard medicine={medicine} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <CommonBanner
        bgImage={bannerBackground}
        button="View All"
        image={bannerImage}
        title="PAIN RELIEF"
        description="Pain management is an aspect of medicine and health care involving relief of pain in various dimensions, from acute and simple to chronic and challenging"
      />
    </>
  );
};

export default MediCards;
