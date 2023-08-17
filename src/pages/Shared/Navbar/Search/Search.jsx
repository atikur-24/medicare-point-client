import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div>
      <form className="flex items-center relative">
        <input
          className="w-full lg:w-[450px] h-10 rounded-xl md:rounded-full dropdown-end drop-shadow-xl px-6 focus:input-bordered input-accent"
          type="text"
          placeholder="Search Medicines"
        />
        <div className="pr-3 cursor-pointer right-0 absolute bg-my-primary h-full rounded-e-full">
          <FiSearch className="text-3xl text-white mt-[5px] ml-2" />
        </div>
      </form>
    </div>
  );
};

export default Search;
