import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
    <div className="my-8 p-8">
      <div className="mx-2 lg:mx-60">
        <h1 className="text-3xl font-bold my-4">{diseaseDetails.name} Cause,Prevention and Cure</h1>
        <h2 className="text-2xl font-semibold my-4">
          {diseaseDetails.doctorName} ({diseaseDetails.doctorDepartment})
        </h2>
        <h1 className="text-sm italic my-4">Date:{diseaseDetails.date}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 justify-center items-center space-x-2 md:space-y-6">
          <img className="h-96 w-full my-1 md:my-8" src={diseaseDetails.image} alt="" />
          <div className="space-y-6">
            {/* <h1 className="text-4xl text-center font-bold my-4 hidden md:block">{diseaseDetails.name}</h1> */}

            <p className="">
              <span className="font-semibold">Type of the disease:</span>
              {diseaseDetails.type}
            </p>
            <p className=" mb-6">
              <span className="font-semibold">Cause of the disease:</span>
              {diseaseDetails.cause}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 items-center mt-8 ">
          <div className="shadow-sm h-full p-4 bgc-white border border-gray-3">
            <h3 className="text-2xl font-semibold my-4">How To Prevent?</h3>
            <p>{diseaseDetails.prevention}</p>
          </div>
          <div className="shadow-sm h-full p-4 bgc-white border border-gray-3">
            <h3 className="text-2xl font-semibold my-4 ">What's the cure?</h3>
            <p>{diseaseDetails.cure}</p>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center m-9 p-6">Explore Tips for Similar Health Conditions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-8 md:mx-2 mx-auto items-center">
        {categories.map((healthTip) => (
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
