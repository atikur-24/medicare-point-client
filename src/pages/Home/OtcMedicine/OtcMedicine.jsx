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
    const source = axios.CancelToken.source();

    axios
      .get("/otcMedicine.json", { cancelToken: source.token })
      .then((res) => setOtcMedicines(res.data))
      .catch((error) => {
        console.error("An error occurred while fetching medicines:", error);
      });

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`${import.meta.env.VITE_API_URL}/medicines`, {
        cancelToken: source.token,
      })
      .then((res) => setMedicines(res.data))
      .catch((error) => {
        console.error("An error occurred while fetching medicines:", error);
      });

    return () => {
      source.cancel();
    };
  }, []);

  const handleMedicineClick = (otcMedicine) => {
    const matchingMedicine = medicines.find(
      (medicine) => medicine.category.value === otcMedicine.title,
    );

    if (matchingMedicine) {
      return matchingMedicine.category.value;
    }
    return null;
  };

  return (
    <div className="bg-card">
      <div className="my-container">
        <SectionTitle
          title="Otc Medicines"
          content="Easy Access to OTC Medicines,Your Trusted Solution for Common Health Needs."
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
            {otcMedicines.map((otcMedicine, idx) => (
              <SwiperSlide key={idx} className="container mx-auto my-4 mb-4">
                <Link
                  to={`/medicines?category=${handleMedicineClick(otcMedicine)}`}
                  className="card mx-auto space-y-4 shadow-xl transition-all duration-200 md:hover:scale-105 lg:h-full"
                >
                  <div>
                    <img
                      src={otcMedicine.image}
                      alt="img"
                      className="h-32 w-full rounded-t-xl object-cover md:h-36 lg:h-40"
                    />
                  </div>
                  <div className="card-body flex h-full flex-col items-center justify-end p-4">
                    <h2 className="inline-flex items-center gap-3 text-[16px] font-medium tracking-wide">
                      {otcMedicine.title} <HiArrowNarrowRight />{" "}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden gap-4 md:gap-6 lg:block lg:grid lg:grid-cols-4 xl:grid-cols-6">
          {otcMedicines.map((otcMedicine, idx) => (
            <Link
              key={idx}
              to={`/medicines?category=${handleMedicineClick(otcMedicine)}`}
              className="card mx-auto space-y-4 shadow-xl transition-all duration-200 md:hover:scale-105 lg:h-full"
            >
              <div>
                <img
                  src={otcMedicine.image}
                  alt="img"
                  className="h-32 w-full rounded-t-xl object-cover md:h-36 lg:h-40"
                />
              </div>
              <div className="card-body flex h-full flex-col items-center justify-end p-4">
                <h2 className="inline-flex items-center gap-3 text-[16px] font-medium tracking-wide">
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
