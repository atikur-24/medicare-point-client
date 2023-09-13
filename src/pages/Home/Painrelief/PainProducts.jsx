/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMedicines } from "../../../Features/Medicines/AllMedicines/allMedicines";
import bannerImage from "../../../assets/images/services/01.jpg";
import bannerBackground from "../../../assets/images/services/features.jpg";
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
        <SectionTitle title="Pain Relief" content="Pain Relief medicines is like a helper for when something hurts. It's a way to make the hurt feel better." />

        {isloading ? (
          <Loader spinner />
        ) : (
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
