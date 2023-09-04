import axios from "axios";
import { useEffect, useState } from "react";
import helth from "../../assets/Blog/helth.png";
import HealthCard from "./HealthCard";

const HealthTips = () => {
  const [healthTips, setHealthTips] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/allHealthTips").then((res) => {
      setHealthTips(res.data);

      // Extract unique categories from health tips data
      const uniqueCategories = [...new Set(res.data.map((tip) => tip.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const filteredHealthTips = selectedCategory ? healthTips.filter((tip) => tip.category === selectedCategory) : healthTips;
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="bg-card ">
      <img src={helth} alt="" />
      {/* <h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold my-4 mx-2">Health Tips: Your Guide to a Balanced Lifestyle</h1> */}
      <div className="flex flex-col sm:flex-row container mx-auto py-10">
        {/* Sidebar */}
        <div className="w-1/5 p-6 bg-white border border-gray-3 h-full object-cover hidden md:block  m-4 rounded-md">
          <h2 className="text-2xl uppercase font-extrabold mb-2 font-nunito">Categories</h2>
          <hr className="border border-my-accent my-4" />
          <ul className="divide-y divide-my-accent ">
            {categories.map((category, index) => (
              <li key={index} className="font-semibold text-title-color py-2">
                <button
                  type="button"
                  className={`text-blue-600 hover:text-my-primary hover:underline ${selectedCategory === category ? "font-bold text-my-primary" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/5 p-4    block md:hidden ">
          <h2 className="text-2xl uppercase font-extrabold mb-2 font-nunito">Categories</h2>
          <select className="w-full border z-10  overflow-hidden rounded-md mb-2 select select-bordered" value={selectedCategory || ""} onChange={handleCategoryChange}>
            <option value="" className="z-10">All Categories</option>
            {categories.map((category, index) => (
              <option className="z-10" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <div className="md:w-4/5 w-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-8 md:mx-2 mx-auto items-center">
            {filteredHealthTips.map((healthTip) => (
              <HealthCard key={healthTip._id} healthTip={healthTip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
