import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div>
      <form className="flex items-center relative">
        <input
          className=" w-full lg:w-[450px] bg-[#ffffff] h-10 rounded-xl md:rounded-full focus:border-blue-500 focus:ring-blue-500 dropdown-end drop-shadow-xl px-6"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <div className=" pr-3 cursor-pointer right-0  absolute">
          <FiSearch className="text-3xl " />
        </div>
      </form>
    </div>
  );
};

export default Search;
