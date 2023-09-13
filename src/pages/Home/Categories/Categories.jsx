/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle";
import Category from "./Category";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("categories.json").then((res) => setCategories(res?.data));
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="my-container">
      <div>
        <SectionTitle title="Shop by Category" content="Discover essential healthcare solutions through our diverse medicine categories. explore now and prioritize your health journey with us." />
      </div>
      <div className="">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={6}
          centeredSlides
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation
          modules={[Pagination, Navigation]}
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

  // return (
  //   <div className="my-container">
  //     <SectionTitle title="Shop by Category" content="Discover essential healthcare solutions through our diverse medicine categories. explore now and prioritize your health journey with us." />
  //     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  xl:grid-cols-8 gap-4">
  //       {categories.map((category, index) => (
  //         <Category key={index} category={category} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Categories;
