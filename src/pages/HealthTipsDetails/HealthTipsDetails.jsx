import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import HealthCard from "../HealthTips/HealthCard";
import HealthCardCategory from "../HealthTips/HealthCardCategory";

const HealthTipsDetails = () => {
  const diseaseDetails = useLoaderData();
  // const { image, title, content_details, published_date, topic } = healthArticles;
  const [healthTips, setHealthTips] = useState([]);
  console.log(healthTips);
  const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/allHealthTips").then((res) => {
      setHealthTips(res.data);

      // Extract unique categories from health tips data
      // const uniqueCategories = [...new Set(res.data.map((tip) => tip.category))];
      // setCategories(uniqueCategories);
    });
  }, []);
  return (
    <div className="my-8 p-8">
      <div className="container">
        <h1 className="text-4xl text-center font-bold my-4 md:hidden">{diseaseDetails.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center space-x-2 md:space-y-6">
          <img className="h-80 mx-auto my-2 md:my-8" src={diseaseDetails.image} alt="" />
          <div className="space-y-6">
            <h1 className="text-4xl text-center font-bold my-4 hidden md:block">{diseaseDetails.name}</h1>
            <p className="text-center">
              <span className="font-semibold text-center">Type of the disease:</span>
              {diseaseDetails.type}
            </p>
            <p className="text-center mb-6">
              <span className="font-semibold text-center">Cause of the disease:</span>
              {diseaseDetails.cause}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-8 ">
          <div className="shadow-xl h-full p-4 bgc-white border border-gray-3 hover:bg-[#d0f1f0] duration-500">
            <h3 className="text-2xl text-center font-semibold my-4">How To Prevent?</h3>
            <p>{diseaseDetails.prevention}</p>
          </div>
          <div className="shadow-xl h-full p-4 bgc-white border border-gray-3 hover:bg-[#d0f1f0] duration-500">
            <h3 className="text-2xl text-center font-semibold my-4 ">What's the cure?</h3>
            <p>{diseaseDetails.cure}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-8 md:mx-2 mx-auto items-center">
        {healthTips.map((healthTip) => (
          <div key={healthTip._id} className=" rounded relative bg-white shadow   h-full">
            <div className=" absolute h-20  border-l-4  bg-white border-my-accent " />
            <div className="px-8 py-4 space-y-8 ">
              <h2 className="h-10 font-bold  text-lg ">{healthTip.name}</h2>
              <img src={healthTip.image} alt="img" className="h-32  w-full object-cover" />
              <p className="text-justify md:h-32">{healthTip.prevention.slice(0, 150)}...</p>
              <Link to={`/healthtips/${healthTip._id}`} className="flex justify-center mt-auto">
                <button type="button" className="my-btn w-full" style={{ borderRadius: "50px" }}>
                  <MdOutlineTipsAndUpdates className="text-2xl" /> Get Tips
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTipsDetails;
