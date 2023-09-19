import axios from "axios";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SectionTitle from "../../../components/SectionTitle";
// Import Swiper CSS
const OtcMedicine = () => {
  const [otcMedicines, setOtcMedicines] = useState([]);
  const [medicines, setMedicines] = useState([]);
  // console.log(medicines);

  useEffect(() => {
    axios.get("/otcMedicine.json").then((res) => setOtcMedicines(res.data));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/medicines").then((res) => setMedicines(res.data));
  }, []);

  const handleMedicineClick = (otcMedicine) => {
    const matchingMedicine = medicines.find((medicine) => medicine.category.value === otcMedicine.title);

    if (matchingMedicine) {
      return matchingMedicine.category.value;
    }
    return null;
  };

  return (
    <div className="bg-card">
      <div className="my-container">
        <SectionTitle title="Otc Medicines" content="Easy Access to OTC Medicines,Your Trusted Solution for Common Health Needs." />

        <div className="block lg:hidden my-4">
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
            {otcMedicines.map((otcMedicine, idx) => (
              <SwiperSlide key={idx} className="mx-auto container my-4 mb-4">
                <Link to={`/medicines?category=${handleMedicineClick(otcMedicine)}`} className="card mx-auto shadow-xl lg:h-full space-y-4 md:hover:scale-105 transition-all duration-200">
                  <div>
                    <img src={otcMedicine.image} alt="img" className="rounded-t-xl w-full h-32 md:h-36 lg:h-40 object-cover" />
                  </div>
                  <div className="card-body flex flex-col items-center justify-end p-4 h-full">
                    <h2 className="inline-flex items-center gap-3 font-medium text-[16px] tracking-wide">
                      {otcMedicine.title} <HiArrowNarrowRight />{" "}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:block lg:grid lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {otcMedicines.map((otcMedicine, idx) => (
            <Link key={idx} to={`/medicines?category=${handleMedicineClick(otcMedicine)}`} className="card mx-auto shadow-xl lg:h-full space-y-4 md:hover:scale-105 transition-all duration-200">
              <div>
                <img src={otcMedicine.image} alt="img" className="rounded-t-xl w-full h-32 md:h-36 lg:h-40 object-cover" />
              </div>
              <div className="card-body flex flex-col items-center justify-end p-4 h-full">
                <h2 className="inline-flex items-center gap-3 font-medium text-[16px] tracking-wide">
                  {otcMedicine.title} <HiArrowNarrowRight />{" "}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtcMedicine;
