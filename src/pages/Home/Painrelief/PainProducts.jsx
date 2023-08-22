/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImage from "../../../assets/images/services/01.jpg";
import bannerBackground from "../../../assets/images/services/features.jpg";
import SectionTitle from "../../../components/SectionTitle";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import PainProduct from "./PainProduct";

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

export default PainProducts;
