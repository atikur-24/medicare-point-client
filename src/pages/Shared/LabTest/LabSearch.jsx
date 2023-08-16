import { AiFillThunderbolt } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const LabSearch = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 ">
      <form className="flex items-center relative md:w-[60%]">
        <input className="w-full  border h-20 rounded-xl md:rounded-lg  px-6 focus:input-bordered input-accent" type="text" placeholder="Search Test and Packages" />
        <div className="pr-3 cursor-pointer right-0 absolute">
          <FiSearch className="text-3xl " />
        </div>
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
