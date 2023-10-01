/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle";
import Category from "./Category";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get("categories.json", { cancelToken: cancelToken.token })
      .then((res) => setCategories(res?.data))
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <div className="my-container">
      <div>
        <SectionTitle title="Shop by Category" content="Discover essential healthcare solutions through our diverse medicine categories." />
      </div>
      <div className="shopby-category">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Category category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
