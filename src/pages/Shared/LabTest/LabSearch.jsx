import { AiFillThunderbolt } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const LabSearch = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row gap-4 md:gap-10 ">
      <form className="flex items-center  md:w-[40%]">
        <input className="w-full  border h-16   rounded-l-lg   px-6 focus:input-bordered input-accent" type="text" placeholder="Search Test and Packages" />
        <button type="button" className=" bg-my-primary h-16 rounded-r-lg flex items-center justify-center px-4  ">
          <FiSearch className="text-3xl text-white" />
        </button>
      </form>
      <div className="md:w-[40%] border border-gray-3 flex items-center justify-between px-4 rounded-lg py-2 bg-white ">
        <p className="inline-flex items-center gap-4 font-medium  md:text-lg">
          <AiFillThunderbolt className="w-6 h-6 text-[#f59e0b]" />
          Upto 30% Of
        </p>
        <button type="button" className="btn my-btn ">
          Book Test From Prescription
        </button>
      </div>
    </div>
  );
};

export default LabSearch;
