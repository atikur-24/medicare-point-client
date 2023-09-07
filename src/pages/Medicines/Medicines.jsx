/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import MediCard from "../Shared/Card/MediCard";
import PaginationButton from "./PaginationButton";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { loading, setLoading } = useContext(AuthContext);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const { allData, isloading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:5000/medicines/${category}`).then((res) => setMedicines(res.data));
    } else {
      setMedicines(allData);
    }
  }, [allData, category]);

  const handelSort = (sort) => {
    axios.get(`http://localhost:5000/medicines?sort=${sort}`).then((res) => setMedicines(res.data));
  };

  const [showFilter, setShowFilter] = useState("-ml-96");
  const filterItems = (
    <div className="py-4 px-6 space-y-4 text-sm">
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Ayush
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Fitness
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Otc Deals
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Mom & Baby
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Fitness
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Otc Deals
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Mom & Baby
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Ayush
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Ayush
      </p>
      <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer">
        <LiaAngleRightSolid /> Ayush
      </p>
    </div>
  );

  const medicineParpage = 9;
  const startIndex = currentPage * medicineParpage;
  const endIndex = startIndex + medicineParpage;
  const PaginationMedicines = medicines.slice(startIndex, endIndex);
  const pageCount = Math.ceil(medicines.length / medicineParpage);

  const handlePageClick = (seletedPage) => {
    setCurrentPage(seletedPage.selected);
  };

  return (
    <section className="bg-lite relative">
      <div className="container flex items-center mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-10">
        <button onClick={() => setShowFilter("")} className="lg:hidden" type="button">
          <BsFilterLeft className="text-lg font-bold text-my-primary mr-2" />
        </button>
        <div className="flex items-center justify-between w-full">
          <p className="inline-flex items-center gap-1 font-medium md:font-semibold tracking-wider text-black-2 lg:text-lg">
            <Link to="/" className="hover:text-my-accent cursor-pointer transition-colors">
              Home
            </Link>
            <HiOutlineChevronRight />
            <span>Medicines</span>
          </p>
          <div>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-2 bg-white font-semibold p-2 rounded-md  ease-in duration-150">
                  Filter Medicines <AiOutlineDown />
                </MenuButton>
              }
              transition
            >
              <MenuItem onClick={() => handelSort("phtl")} className="font-medium text-gray-5">
                From Low Price
              </MenuItem>
              <MenuItem onClick={() => handelSort("plth")} className="font-medium text-gray-5">
                From Heigh Price
              </MenuItem>
              <MenuItem onClick={() => handelSort("byRating")} className="font-medium text-gray-5">
                From Height selling
              </MenuItem>
              <MenuItem onClick={() => handelSort("fNew")} className="font-medium text-gray-5">
                From New Product
              </MenuItem>
              <MenuItem onClick={() => handelSort("fOld")} className="font-medium text-gray-5">
                From Old product
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      <div className={`w-72 bg-white rounded-md lg:hidden absolute top-0 z-30 h-screen ${showFilter} transition-all duration-500`}>
        <div className="flex justify-between items-center">
          <h3 className="text-title-color text-xl font-bold tracking-wide py-4 px-6">Categories</h3>
          <button onClick={() => setShowFilter("-ml-96")} className="lg:hidden" type="button">
            <RxCross1 className="text-lg font-bold text-my-primary mr-2 btn btn-circle btn-sm p-1" />
          </button>
        </div>
        <hr />
        {filterItems}
      </div>

      <div className="container mx-auto px-4 lg:px-10 pb-10 md:flex gap-8">
        <div className="w-72 h-fit bg-white rounded-md hidden md:block">
          <h3 className="text-title-color text-xl font-bold tracking-wide py-4 px-6">Categories</h3>
          <hr />
          <div className="flex items-center">
            <Link className="px-6" to="/medicines">
              All Medicines
            </Link>
          </div>
          {filterItems}
        </div>
        {isloading || loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PaginationMedicines?.map((medicine) => (
              <MediCard key={medicine._id} medicine={medicine} />
            ))}
          </div>
        )}
      </div>
      {/* <PaginationButton /> */}
      <ReactPaginate
        className="flex text-center items-center justify-center my-auto space-x-3 font-semibold  mb-5 align-middle"
        activeClassName="bg-my-primary text-white rounded-full px-4 py-2"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
      />
    </section>
  );
};

export default Medicines;
