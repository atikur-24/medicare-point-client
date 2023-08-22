import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helth from "../../assets/Blog/helth.png";

const HealthTips = () => {
  const [healthTips, setHealthTips] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/healthtips.json").then((res) => {
      setHealthTips(res.data);

      // Extract unique categories from health tips data
      const uniqueCategories = [...new Set(res.data.map((tip) => tip.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <div>
      <img src={helth} alt="" />
      <h1 className="text-4xl text-center font-bold my-4">Health Tips: Your Guide to a Balanced Lifestyle</h1>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-200 p-4">
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <Link to={`/category/${category}`} className="text-blue-600 hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-8">
            {healthTips.map((healthTip, index) => (
              <div key={index} className="grid grid-cols-1 gap-4 justify-center items-center rounded-md shadow-sm border border-gray-3 p-2">
                <img src={healthTip.image} alt="img" className="h-32 mx-auto" />
                <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
                <Link to={`/healthtips/${healthTip.id}`} className="text-center">
                  <button type="button" className="my-btn text-center ">
                    Get Tips
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
