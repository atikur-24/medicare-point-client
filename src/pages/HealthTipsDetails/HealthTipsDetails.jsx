import axios from "axios";
import { useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDetailData } from "../../Features/AllMedicines/detailData";

const HealthTipsDetails = () => {
  const params = useParams();
  const api = `allHealthTips/${params?.id}`;
  const { data } = useSelector((state) => state.detailData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailData(api));
  }, [dispatch, api]);

  const diseaseDetails = data;

  const [healthTips, setHealthTips] = useState([]);
  // console.log(diseaseDetails);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allHealthTips").then((res) => {
      setHealthTips(res.data);
    });
  }, []);
  useEffect(() => {
    // Extract the category from the diseaseDetails object
    const diseaseCategory = diseaseDetails.category;

    // Filter healthTips based on the diseaseCategory
    const filteredTips = healthTips.filter((tip) => tip.category === diseaseCategory);

    // Set the categories state with the filtered tips
    setCategories(filteredTips);
  }, [diseaseDetails, healthTips]);

  return (
    <div className="my-container">
      <div className="mx-2">
        <h1 className="text-3xl font-bold my-4">{diseaseDetails.name} Cause,Prevention and Cure</h1>
        <h2 className="text-2xl font-semibold my-4">
          {diseaseDetails.doctorName} ({diseaseDetails.doctorDepartment})
        </h2>
        <h1 className="text-sm italic my-4">Date:{diseaseDetails.date}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 justify-center items-center md:space-y-6">
          <img className="h-[70%] max-w-4xl mx-auto my-1 md:my-8" src={diseaseDetails.image} alt="" />
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 items-center mt-5">
            <div className="h-full p-1">
              <h3 className="text-2xl font-semibold my-2">Type of the disease</h3>
              <p>{diseaseDetails.type}</p>
            </div>
            <div className=" h-full p-1">
              <h3 className="text-2xl font-semibold my-2">Cause of the disease</h3>
              <p>{diseaseDetails.cause}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 items-center mt-5">
          <div className=" h-full p-1">
            <h3 className="text-2xl font-semibold my-2">How To Prevent?</h3>
            <p>{HtmlParser(diseaseDetails.prevention)}</p>
          </div>
          <div className="h-full p-1">
            <h3 className="text-2xl font-semibold my-2">What is the cure?</h3>
            <p>{HtmlParser(diseaseDetails.cure)}</p>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-left m-2 mt-4 p-2 lg:mt-6 lg:py-2">Explore Tips for Similar Health Conditions</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20, // Increase the spacing between slides on tablets
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on larger tablets and laptops
            spaceBetween: 30, // Increase the spacing between slides on laptops
          },
          1280: {
            slidesPerView: 4, // Show 4 slides on larger screens
            spaceBetween: 40, // Increase the spacing between slides on larger screens
          },
        }}
        className="mySwiper"
      >
        {categories.map((healthTip) => (
          <div key={healthTip._id} className="mx-auto container">
            <SwiperSlide className=" container">
              <div>
                <div key={healthTip._id} className="card card-compact h-80 w-full bg-base-100 shadow-xl my-4">
                  <figure className="w-full object-cover">
                    <img className="w-full" src={healthTip.image} alt="Shoes" />
                  </figure>
                  <div className="card-body mt-1">
                    <h2 className="text-base font-bold">{healthTip.name}</h2>
                    <p className="mt-2">{healthTip.cause.slice(0, 45)}...</p>
                    <Link to={`/healthtips/${healthTip._id}`} className="flex justify-center mt-4">
                      <button type="button" className="my-btn w-full" style={{ borderRadius: "50px" }}>
                        <MdOutlineTipsAndUpdates className="text-2xl" /> Get Tips
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HealthTipsDetails;
