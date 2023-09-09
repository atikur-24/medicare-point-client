/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMedicines } from "../../../Features/Medicines/AllMedicines/allMedicines";
import bannerImage from "../../../assets/images/services/01.jpg";
import bannerBackground from "../../../assets/images/services/features.jpg";
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

  if (isloading) {
    return <div className="my-container text-center">Loging .............</div>;
  }

  return (
    <>
      <div className="my-container my-10">
        <SectionTitle title="Pain Relief" content="Pain Relief medicines is like a helper for when something hurts. It's a way to make the hurt feel better." />

        <div>
          <div className="hidden lg:block">
            <Swiper
              slidesPerView={4}
              spaceBetween={50}
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

          <div className="hidden md:block lg:hidden">
            <Swiper
              slidesPerView={2}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {PainRefilMedicins.map((medicine) => (
                <SwiperSlide key={medicine?._id}>
                  <MediCard medicine={medicine} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {PainRefilMedicins.map((medicine) => (
                <SwiperSlide key={medicine?._id}>
                  <MediCard medicine={medicine} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <CommonBanner
        bgImage={bannerBackground}
        button="View All"
        image={bannerImage}
        title="PAIN RELIEF"
        description="been significantly de-risked. At vero eos et accusam justo duo dolores etea rebuitet clita kasd gubergren nosea takimata sanctus est lorem ipsum dolor consetetur sadipscing elitr sed
        diam nonumy eirmod tempor invidunt ut labore magna aliquyam sedam voluptua at vero eos et accusam et justo duo dolores"
      />
    </>
  );
};

export default MediCards;
