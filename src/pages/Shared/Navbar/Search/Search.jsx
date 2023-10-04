/* eslint-disable import/no-unresolved */
import "@smastrom/react-rating/style.css";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    if (search) {
      fetch(
        `${import.meta.env.VITE_API_URL}/searchMedicinesByName?name=${search}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setMedicines(data);
        });
    }
  }, [search]);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  useEffect(() => {
    const handelOutsideClose = (e) => {
      if (!searchRef?.current?.contains(e?.target)) {
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handelOutsideClose);

    return () => {
      document.removeEventListener("mousedown", handelOutsideClose);
    };
  }, []);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          ref={searchRef}
          onChange={handleSearch}
          className="dropdown-end input-accent h-10 w-full  rounded-full border-[1px] border-gray-3 px-6 shadow-sm focus:input-bordered xl:w-[450px]"
          type="text"
          name="searchField"
          value={search}
          placeholder="Search Medicines"
        />
        <button
          type="submit"
          onClick={() => setSearch("")}
          className={`absolute right-10 h-full cursor-pointer rounded-e-full pr-3 ${
            search ? "" : "hidden"
          }`}
        >
          <RxCross1 className="ml-2 text-xl text-gray-5" />
        </button>

        <div className="absolute right-0 my-4 h-full cursor-pointer rounded-e-full bg-my-primary pr-2">
          <FiSearch className="ml-2 mt-[5px] text-3xl text-white" />
        </div>
      </form>

      <div
        className={`${
          search ? "block" : "hidden"
        } hide-scrollbar bg-card absolute z-50 max-h-[80vh] w-full overflow-y-scroll rounded-b-lg border border-t-0 border-gray-3 p-2 lg:w-[420px] xl:right-[15px]`}
      >
        {medicines.length === 0 && (
          <div className="mt-2 flex gap-2 rounded-xl  bg-my-pink/5  p-2 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>No results found. Please search by right name</span>
          </div>
        )}

        <p className={`text-gray-5 ${medicines?.length === 0 && "hidden"}`}>
          (Showing {medicines?.length} results)
        </p>

        {medicines.map((m) => (
          <div
            key={m?._id}
            className="my-2 flex items-center space-x-3 rounded-2xl border  border-gray-3 bg-white px-4 py-2 text-gray-6 md:gap-20 md:px-5"
          >
            <div className="relative">
              <Link onClick={() => setSearch("")} to={`/details/${m?._id}`}>
                {m?.discount > 0 && (
                  <div className="absolute -left-2 -top-2 z-10 flex rounded-md bg-my-accent p-1 text-xs font-medium text-white">
                    <p>{m?.discount}</p>
                    <p>% OFF</p>
                  </div>
                )}
                <img className="h-20 w-20" src={m?.image} alt="medicine" />
              </Link>
            </div>

            <div className="relative space-y-1 p-2 ">
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-5">
                  {m?.category?.label}, personal care
                </p>
                <Link onClick={() => setSearch("")} to={`/details/${m?._id}`}>
                  <h2 className="inline-block text-[1.125rem] font-semibold tracking-wide text-title-color hover:cursor-pointer hover:underline">
                    {m?.medicine_name}
                  </h2>
                </Link>
              </div>
              <p className="inline-flex gap-1">
                <span className="inline-flex items-center text-[1.125rem] font-bold text-my-pink">
                  ৳{" "}
                  {m?.discount > 0
                    ? (m?.price - (m?.price / 100) * m?.discount)?.toFixed(2)
                    : m?.price?.toFixed(2)}
                </span>
                {m?.discount > 0 && (
                  <span className="inline-flex items-center text-[16px] font-medium text-gray-5 line-through">
                    ৳ {m?.price}
                  </span>
                )}
              </p>

              <div className="flex flex-col items-center justify-center gap-3 md:flex-row" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
