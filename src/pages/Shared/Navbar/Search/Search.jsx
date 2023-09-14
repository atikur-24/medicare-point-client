/* eslint-disable import/no-unresolved */
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/searchMedicinesByName?name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
      });
  }, [search]);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center relative">
        <input
          onChange={handleSearch}
          className="w-full xl:w-[450px] h-10 rounded-full  dropdown-end shadow-md border-[1px] border-gray-3 px-6 focus:input-bordered input-accent"
          type="text"
          name="searchField"
          value={search}
          placeholder="Search Medicines"
        />
        <button type="submit" onClick={() => setSearch("")} className={`pr-3 cursor-pointer right-10 absolute h-full rounded-e-full ${search ? "" : "hidden"}`}>
          <RxCross1 className="text-xl text-gray-5 ml-2" />
        </button>

        <div className="pr-3 cursor-pointer right-0 absolute bg-my-primary h-full rounded-e-full">
          <FiSearch className="text-3xl text-white mt-[5px] ml-2" />
        </div>
      </form>

      <div className={`${search ? "block" : "hidden"} hide-scrollbar border border-slate-6 border-t-0 w-full lg:w-[420px] max-h-[80vh] overflow-y-scroll absolute right-[15px] bg-slate-1 p-2 z-50 rounded-b-lg`}>
        {medicines.length === 0 && <p className="text-black-2 text-center font-semibold">Sorry, we could not find what you are looking for. Please search by right name</p>}

        <p className={`text-gray-5 ${medicines.length === 0 && "hidden"}`}>(Showing {medicines.length} results)</p>

        {medicines.map((m) => (
          <div key={m._id} className="flex items-center justify-around space-x-3 text-gray-6 bg-card border border-gray-3 my-2">
            <div className="relative">
              <Link onClick={() => setSearch("")} to={`/details/${m._id}`}>
                {m.discount > 0 && (
                  <div className="bg-my-accent z-10 rounded-md p-1 text-xs font-medium text-white absolute -top-2 -left-8 flex">
                    <p>{m.discount}</p>
                    <p>% OFF</p>
                  </div>
                )}
                <img className=" h-20" src={m.image} alt="medicine" />
              </Link>
            </div>

            <div className="p-2 space-y-1 relative ">
              <div className="space-y-1">
                <p className="text-gray-5 text-xs font-medium">{m.category.label}, personal care</p>
                <Link onClick={() => setSearch("")} to={`/details/${m._id}`}>
                  <h2 className="text-[1.125rem] font-semibold text-title-color tracking-wide hover:underline inline-block hover:cursor-pointer">{m.medicine_name}</h2>
                </Link>
              </div>
              <p className="inline-flex gap-1">
                <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">৳ {m.discount > 0 ? (m.price - (m.price / 100) * m.discount).toFixed(2) : m.price.toFixed(2)}</span>
                {m.discount > 0 && <span className="font-medium inline-flex items-center text-[16px] text-gray-5 line-through">৳ {m.price}</span>}
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-3 items-center" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
