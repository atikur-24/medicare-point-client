/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import moduleName from "../../../assets/images/AD/medicine.png";
import medsine from "../../../assets/images/services/features.jpg";
import SectionTitle from "../../../components/SectionTitle";
import PainProduct from "./PainProduct";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";

const PainProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/medicines").then((res) => setProducts(res.data));
  }, []);
  // console.log(products);

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
              {products.map((medicine) => (
                <SwiperSlide key={medicine?._id}>
                  <PainProduct medicine={medicine} />
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
              {products.map((medicine) => (
                <SwiperSlide key={medicine?._id}>
                  <PainProduct medicine={medicine} />
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
              {products.map((medicine) => (
                <SwiperSlide key={medicine?._id}>
                  <PainProduct medicine={medicine} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <CommonBanner bgImage={medsine} height="400px" />
    </>
  );
};

export default PainProducts;
