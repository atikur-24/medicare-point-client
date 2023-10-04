import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllHealthTips } from "../../Features/HealthTips/allHealthTips";
import helth from "../../assets/Blog/helth.webp";
import Loader from "../../components/Loader";
import HealthCard from "./HealthCard";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";

const HealthTips = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { isLoading, allHealthTips: healthTips } = useSelector(
    (state) => state.allHealthTips,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHealthTips());
  }, [dispatch]);

  useEffect(() => {
    // Extract unique categories from health tips data
    const uniqueCategories = [
      ...new Set(healthTips.map((tip) => tip.category)),
    ];
    setCategories(uniqueCategories);
  }, [healthTips]);

  const filteredHealthTips = selectedCategory
    ? healthTips.filter((tip) => tip.category === selectedCategory)
    : healthTips;
  const handleCategoryChange = (event) => {
    setSelectedCategory(event?.target?.value);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Change this to your desired number of items per page

  // Function to handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage?.selected);
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and paginate the health tips based on the current page
  const paginatedHealthTips = filteredHealthTips?.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredHealthTips.length / itemsPerPage);

  return (
    <div className="bg-card ">
      <WebSiteTitle title="Health Tips" />
      <img src={helth} className="w-full" alt="" />
      {/* <h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold my-4 mx-2">Health Tips: Your Guide to a Balanced Lifestyle</h1> */}

      <div className="container mx-auto flex flex-col py-10 xl:flex-row">
        {/* Sidebar */}
        <div className="m-4 hidden h-full w-1/5 rounded-md border border-gray-3 bg-white object-cover  p-6 xl:block">
          <Link to="/healthtips">
            <h2 className="mb-2 text-left font-nunito font-extrabold uppercase md:text-lg lg:text-2xl">
              Categories
            </h2>
          </Link>
          <hr className="my-4 border border-my-accent" />
          <ul className="divide-y divide-my-accent ">
            {categories?.map((category, index) => (
              <li key={index} className="py-2 font-semibold text-title-color">
                <button
                  type="button"
                  className={`text-blue-600 text-left hover:text-my-primary hover:underline ${
                    selectedCategory === category
                      ? "font-bold text-my-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="block w-full p-4    xl:hidden xl:w-1/5 ">
          <h2 className="mb-2 font-nunito text-2xl font-extrabold uppercase">
            Categories
          </h2>
          <select
            className="select select-bordered z-10  mb-2 w-full overflow-hidden rounded-md border"
            value={selectedCategory || ""}
            onChange={handleCategoryChange}
          >
            <option value="" className="z-10">
              All Categories
            </option>
            {categories?.map((category, index) => (
              <option className="z-10" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <div className="w-full p-4 xl:w-4/5">
          {isLoading ? (
            <Loader spinner />
          ) : (
            <div className="mx-auto grid grid-cols-1  items-center gap-4 md:mx-2 md:grid-cols-2 lg:mx-8 lg:grid-cols-3">
              {paginatedHealthTips?.map((healthTip) => (
                <HealthCard key={healthTip._id} healthTip={healthTip} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <ReactPaginate
          className="my-auto flex items-center justify-center space-x-3 pb-5 text-center  align-middle font-semibold"
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
