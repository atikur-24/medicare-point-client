import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helth from "../../assets/Blog/helth.png";

const HealthTips = () => {
  const [healthTips, setHealthTips] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get("/healthtips.json").then((res) => {
      setHealthTips(res.data);

      // Extract unique categories from health tips data
      const uniqueCategories = [...new Set(res.data.map((tip) => tip.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const filteredHealthTips = selectedCategory ? healthTips.filter((tip) => tip.category === selectedCategory) : healthTips;

  return (
    <div>
      <img src={helth} alt="" />
      <h1 className="text-4xl text-center font-bold my-4">Health Tips: Your Guide to a Balanced Lifestyle</h1>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 p-4 bg-gray-3 object-cover">
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`text-blue-600 hover:text-my-primary hover:underline ${selectedCategory === category ? "font-bold text-my-primary" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-8">
            {filteredHealthTips.map((healthTip, index) => (
              <div key={index} className="grid grid-cols-1 gap-4 justify-center items-center rounded-md shadow-sm p-2 border border-gray-3">
                <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
                <img src={healthTip.image} alt="img" className="h-32 mx-auto" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quaerat natus fuga tenetur quam ghfgb xfgh.</p>
                <Link to={`/healthtips/${healthTip.id}`} className="flex justify-center">
                  <button type="button" className="my-btn">
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
