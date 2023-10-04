import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import brand4 from "../../../assets/brands/Home10_brand1-1.svg";
import brand3 from "../../../assets/brands/Home10_brand2.svg";
import brand5 from "../../../assets/brands/Home10_brand3.svg";
import brand6 from "../../../assets/brands/Home10_brand4.svg";
import brand7 from "../../../assets/brands/Home10_brand5.svg";
import brand8 from "../../../assets/brands/Home10_brand6.svg";
import brand2 from "../../../assets/brands/drugstore.svg";
import brand1 from "../../../assets/brands/hospital_1.svg";
import SectionTitle from "../../../components/SectionTitle";

const Brands = () => {
  return (
    <section className="bg-lite">
      <div className="my-container">
        <SectionTitle
          title="Featured Brands"
          content="We proudly present a handpicked collection of reputable names in the health and wellness industry."
        />
        <div className="my-4 block lg:hidden">
          <Swiper
            // modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
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
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32 object-cover py-4"
                  src={brand1}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand2}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand3}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand4}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand5}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand6}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand7}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
                <img
                  className="h-16 w-32  object-cover py-4"
                  src={brand8}
                  alt="brand"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          data-testid="brands-container"
          className="hidden gap-4 md:gap-6 lg:block lg:grid lg:grid-cols-4 xl:grid-cols-4"
        >
          <div className="brandsCard flex items-center  justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand1} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand2} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand3} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand4} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand5} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand6} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand7} alt="brand" />
          </div>
          <div className="brandsCard flex items-center justify-center rounded-md bg-white py-3">
            <img className="w-32 object-cover py-4" src={brand8} alt="brand" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
