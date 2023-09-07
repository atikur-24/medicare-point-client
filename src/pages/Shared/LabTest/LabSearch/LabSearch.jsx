// import { AiFillThunderbolt } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchAllLabTests } from "../../../../Features/AllLabTests/allLabTest";

const districts = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Jessore", label: "Jessore" },
  { value: "Dinajpur", label: "Dinajpur" },
  { value: "Gopalganj", label: "Gopalganj" },
  { value: "Gazipur", label: "Gazipur" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Comilla", label: "Comilla" },
  { value: "Barisal", label: "Barisal" },
  { value: "Narayanganj", label: "Narayanganj" },
  { value: "Faridpur", label: "Faridpur" },
  { value: "Bogra", label: "Bogra" },
  { value: "Pabna", label: "Pabna" },
  { value: "Rangamati", label: "Rangamati" },
  { value: "Kushtia", label: "Kushtia" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Manikganj", label: "Manikganj" },
  { value: "Noakhali", label: "Noakhali" },
  { value: "Khulna", label: "Khulna" },
  { value: "Tangail", label: "Tangail" },
  { value: "Panchagarh", label: "Panchagarh" },
  { value: "Bhola", label: "Bhola" },
  { value: "Bandarban", label: "Bandarban" },
  { value: "Chandpur", label: "Chandpur" },
  { value: "Habiganj", label: "Habiganj" },
  { value: "Lakshmipur", label: "Lakshmipur" },
  { value: "Barguna", label: "Barguna" },
  { value: "Jhalokati", label: "Jhalokati" },
  { value: "Pirojpur", label: "Pirojpur" },
  { value: "Patuakhali", label: "Patuakhali" },
  { value: "Jhenaidah", label: "Jhenaidah" },
  { value: "Narail", label: "Narail" },
  { value: "Magura", label: "Magura" },
  { value: "Lalmonirhat ", label: "Lalmonirhat" },
  { value: "Kurigram", label: "Kurigram" },
  { value: "Nilphamari", label: "Nilphamari" },
  { value: "Gaibandha", label: "Gaibandha" },
  { value: "Thakurgaon", label: "Thakurgaon" },
  { value: "Satkhira", label: "Satkhira" },
  { value: "Bagerhat", label: "Bagerhat" },
  { value: "Chuadanga", label: "Chuadanga" },
  { value: "Meherpur", label: "Meherpur" },
  { value: "Sirajganj", label: "Sirajganj" },
  { value: "Joypurhat", label: "Joypurhat" },
  { value: "Natore", label: "Natore " },
  { value: "Naogaon", label: "Naogaon" },
  { value: "Nawabganj", label: "Nawabganj" },
  { value: "Khagrachhari", label: "Khagrachhari" },
  { value: "Feni", label: "Feni" },
  { value: "Brahmanbaria", label: "Brahmanbaria" },
  { value: "Sunamganj", label: "Sunamganj" },
  { value: "Moulvibazar", label: "Moulvibazar" },
  { value: "Shariatpur", label: "Shariatpur" },
  { value: "Madaripur", label: "Madaripur" },
  { value: "Rajbari", label: "Rajbari" },
  { value: "Kishoreganj", label: "Kishoreganj" },
  { value: "Jamalpur", label: "Jamalpur" },
  { value: "Sherpur", label: "Sherpur" },
  { value: "Netrakona", label: "Netrakona" },
  { value: "Munshiganj", label: "Munshiganj" },
  { value: "Narsingdi", label: "Narsingdi" },
];

const LabSearch = ({ setAllLabTests, setIsLoading }) => {
  const [selectedOption, setSelectedOption] = useState(null);
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
      <form className="flex items-center  md:w-[40%]">
        <input onChange={handleSearch} className="w-full  border h-16   rounded-l-lg   px-6 focus:input-bordered input-accent" type="search" placeholder="Search Test and Packages" />
        <button type="button" className=" bg-my-primary h-16 rounded-r-lg flex items-center justify-center px-4  ">
          <FiSearch className="text-3xl text-white" />
        </button>
      </form>

      <div className="flex items-center gap-4">
        <div>
          <HiLocationMarker className="w-10 h-10 text-my-primary" />
        </div>
        <div className="w-80 z-10">
          <h2 className="font-nunito font-bold">Our sevices Area</h2>
          <Select isClearable defaultValue={selectedOption} onChange={setSelectedOption} options={districts} placeholder="Select your district" noOptionsMessage={() => "No district found"} />
        </div>
      </div>
      {/* <div className="md:w-[40%] hidden">
        <div className="  gap-6 md:gap-0 border border-gray-3 flex md:items-center md:justify-between px-4 rounded-lg py-2 bg-white flex-col md:flex-row ">
          <p className="inline-flex  items-center gap-4 font-medium  md:text-lg">
            <AiFillThunderbolt className="w-6 h-6 text-[#f59e0b]" />
            Upto 30% Of
          </p>
          <button type="button" className="btn my-btn ">
            Book Test From Prescription
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default LabSearch;
