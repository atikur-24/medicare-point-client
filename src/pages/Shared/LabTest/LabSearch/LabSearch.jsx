// import { AiFillThunderbolt } from "react-icons/ai";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
// import { AiFillThunderbolt } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
// import { HiLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";
import { fetchAllLabTests } from "../../../../Features/AllLabTests/allLabTest";

// const districts = [
//   { value: "Badda", label: "Badda" },
//   { value: "Demra", label: "Demra" },
//   { value: "Dhanmondi", label: "Dhanmondi" },
//   { value: "Gulshan", label: "Gulshan" },
//   { value: "Mirpur", label: "Mirpur" },
//   { value: "Savar", label: "Savar" },
//   { value: "Uttara", label: "Uttara" },
//   { value: "Mohammadpur", label: "Mohammadpur" },
//   { value: "shyamoli", label: "shyamoli" },
//   { value: "kallyanpur", label: "kallyanpur" },
// ];

const LabSearch = ({ setAllLabTests, setIsLoading }) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  const [searchData, setSearchData] = useState("");

  const { isLoading, allLabTest } = useSelector((state) => state.allLabTest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLabTests(searchData));
  }, [dispatch, searchData]);

  useEffect(() => {
    setAllLabTests(allLabTest);
    setIsLoading(isLoading);
  }, [allLabTest, isLoading, setAllLabTests, setIsLoading]);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearchData(searchItem);
  };

  return (
    <div className="flex flex-col md:items-center justify-between md:flex-row gap-4 md:gap-10 ">
      <div className="md:w-[40%]">
        <form className="flex items-center  ">
          <input onChange={handleSearch} className="w-full  border h-16   rounded-l-lg   px-6 focus:input-bordered input-accent" type="search" placeholder="Search Test and Packages" />
          <button type="button" className=" bg-my-primary h-16 rounded-r-lg flex items-center justify-center px-4  ">
            <FiSearch className="text-3xl text-white" />
          </button>
        </form>
        {!isLoading && allLabTest.length === 0 && (
          <div className="flex gap-2 mt-2 bg-my-pink bg-opacity-5 rounded-xl  text-primary p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>No results found. Please search by right name</span>
          </div>
        )}
      </div>

      {/* <div className="flex items-center gap-4">
        <div>
          <HiLocationMarker className="w-10 h-10 text-my-primary" />
        </div>
        <div className="w-80 z-10">
          <h2 className="font-nunito font-bold">Our sevices Area</h2>
          <Select isClearable defaultValue={selectedOption} onChange={setSelectedOption} options={districts} placeholder="Select your district" noOptionsMessage={() => "No district found"} />
        </div>
      </div> */}
      <div className="md:w-[50%] lg:w-[40%] ">
        <div className=" border border-gray-3 flex md:items-center  px-4 rounded-lg py-2 bg-white  ">
          <p className="bg-my-primary text-white w-80 font-nunito uppercase font-bold rounded  py-4 flex items-center justify-center text-sm lg:text-base">Our Services Area</p>
          {/* <p className="inline-flex  items-center gap-4 font-medium  md:text-lg">
            <AiFillThunderbolt className="w-6 h-6 text-[#f59e0b]" />
            Upto 30% Of
          </p> */}
          <Marquee className="font-medium capitalize text-title-color" pauseOnClick speed={30}>
            Badda,Demra,Dhanmondi,Gulshan,Mirpur,Savar,Uttara,Mohammadpur,shyamoli ,kallyanpur,
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LabSearch;
