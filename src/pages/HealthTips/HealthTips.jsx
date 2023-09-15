import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import helth from "../../assets/Blog/helth.webp";
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

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Change this to your desired number of items per page

  // Function to handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and paginate the health tips based on the current page
  const paginatedHealthTips = filteredHealthTips.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredHealthTips.length / itemsPerPage);

  return (
    <div className="bg-card ">
      <img src={helth} alt="" />
      {/* <h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold my-4 mx-2">Health Tips: Your Guide to a Balanced Lifestyle</h1> */}
      <div className="flex flex-col xl:flex-row container mx-auto py-10">
        {/* Sidebar */}
        <div className="w-1/5 p-6 bg-white border border-gray-3 h-full object-cover hidden xl:block  m-4 rounded-md">
          <Link to="/healthtips">
            <h2 className="lg:text-2xl md:text-lg text-left uppercase font-extrabold mb-2 font-nunito">Categories</h2>
          </Link>
          <hr className="border border-my-accent my-4" />
          <ul className="divide-y divide-my-accent ">
            {categories.map((category, index) => (
              <li key={index} className="font-semibold text-title-color py-2">
                <button
                  type="button"
                  className={`text-blue-600 hover:text-my-primary text-left hover:underline ${selectedCategory === category ? "font-bold text-my-primary" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full xl:w-1/5 p-4    block xl:hidden ">
          <h2 className="text-2xl uppercase font-extrabold mb-2 font-nunito">Categories</h2>
          <select className="w-full border z-10  overflow-hidden rounded-md mb-2 select select-bordered" value={selectedCategory || ""} onChange={handleCategoryChange}>
            <option value="" className="z-10">
              All Categories
            </option>
            {categories.map((category, index) => (
              <option className="z-10" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <div className="xl:w-4/5 w-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:mx-8 md:mx-2 mx-auto items-center">
            {paginatedHealthTips.map((healthTip) => (
              <HealthCard key={healthTip._id} healthTip={healthTip} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <ReactPaginate
          className="flex text-center items-center justify-center my-auto space-x-3 font-semibold  pb-5 align-middle"
          activeClassName="bg-my-primary text-white rounded-full px-4 py-2"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
        />
      </div>
    </div>
  );
};

export default HealthTips;
