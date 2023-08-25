import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helth from "../../assets/Blog/helth.png";

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
    <div className="bg-gray-3">
      <img src={helth} alt="" />
      <h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold my-4 mx-2">Health Tips: Your Guide to a Balanced Lifestyle</h1>
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-1/5 p-4 bg-white object-cover hidden md:block text-center m-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          <hr />
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
        <div className="w-full md:w-1/5 p-4 bg-gray-3 object-cover block md:hidden text-center">
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          <select className="w-full border p-1 rounded-md mb-2" value={selectedCategory || ""} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <div className="md:w-4/5 w-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-8 md:mx-2 mx-auto items-center">
            {filteredHealthTips.map((healthTip, index) => (
              <div key={index} className="grid grid-cols-1 gap-4 justify-center items-center rounded-md shadow-sm p-2 border bg-white border-gray-3 h-full">
                <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
                <img src={healthTip.image} alt="img" className="h-32 mx-auto" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quaerat natus fuga tenetur quam ghfgb xfgh.</p>
                <Link to={`/healthtips/${healthTip._id}`} className="flex justify-center">
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
