/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";
import Loader from "../../components/Loader";
import MediCard from "../Shared/Card/MediCard";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsopen] = useState(null);
  // const { loading, setLoading } = useContext(AuthContext);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const { allData, isloading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchMedicines(category));
  //   setMedicines(allData);
  // }, [allData, category, dispatch]);

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:5000/medicinesc?category=${category}`).then((res) => setMedicines(res.data));
    } else {
      setMedicines(allData);
    }
  }, [allData, category]);

  // const handelSort = (sort) => {
  //   axios.get(`http://localhost:5000/medicines?sort=${sort}`).then((res) => setMedicines(res.data));
  // };

  const handelSort = (sort) => {
    dispatch(fetchMedicines({ sort }));
  };

  const handelCategoryFilter = (fCategory) => {
    // dispatch(fetchMedicines());
    const filterData = medicines.filter((item) => item?.category?.value === fCategory);
    setMedicines(filterData);
    setIsopen(fCategory);
    console.log(filterData);
  };

  const medicineParpage = 1;
  const startIndex = currentPage * medicineParpage;
  const endIndex = startIndex + medicineParpage;
  const PaginationMedicines = medicines.slice(startIndex, endIndex);
  const pageCount = Math.ceil(medicines.length / medicineParpage);

  const handlePageClick = (seletedPage) => {
    setCurrentPage(seletedPage.selected);
  };

  const [showFilter, setShowFilter] = useState("-ml-96");
  const filterItems = (
    <div className="py-4 px-6 space-y-4 text-sm">
      <button
        type="button"
        onClick={() => handelCategoryFilter("Pain-Relief")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Pain-Relief" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Pain-Relief" ? <FiChevronDown /> : <LiaAngleRightSolid />} Pain Relief
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Digestive-Health")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Digestive-Health" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Digestive-Health" ? <FiChevronDown /> : <LiaAngleRightSolid />} Digestive Health
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Cough-Cold")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Cough-Cold" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Cough-Cold" ? <FiChevronDown /> : <LiaAngleRightSolid />} Cough & Cold
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Diabetes-Care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Diabetes-Care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Diabetes-Care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Diabetes Care
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Heart-Health")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Heart-Health" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Heart-Health" ? <FiChevronDown /> : <LiaAngleRightSolid />} Heart Health
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Laundry-Household")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Laundry-Household" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Laundry-Household" ? <FiChevronDown /> : <LiaAngleRightSolid />} Laundry Household
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Skin-Care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Skin-Care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Skin-Care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Skin Care
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Eye-Care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Eye-Care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Eye-Care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Eye Care
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Women-Care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Women-Care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Women-Care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Women Care
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Mens-Products")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Mens-Products" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Mens-Products" ? <FiChevronDown /> : <LiaAngleRightSolid />} Men's Products
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Vitamins")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Vitamins" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Vitamins" ? <FiChevronDown /> : <LiaAngleRightSolid />} Vitamins
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Devices-Equipment")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Devices-Equipment" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Devices-Equipment" ? <FiChevronDown /> : <LiaAngleRightSolid />} Devices & Equipment
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Bone-Health-care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Bone-Health-care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Bone-Health-care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Bone Health care
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Weight")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Weight" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Weight" ? <FiChevronDown /> : <LiaAngleRightSolid />} Weight
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Dental-Care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Dental-Care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Dental-Care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Dental Care
      </button>
      <button
        type="button"
        onClick={() => handelCategoryFilter("Baby-Care")}
        className={`inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer ${isOpen === "Baby-Care" ? "text-lg font-bold underline" : ""}`}
      >
        {isOpen === "Baby-Care" ? <FiChevronDown /> : <LiaAngleRightSolid />} Baby Care
      </button>
    </div>
  );

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
          <button type="button" onClick={() => dispatch(fetchMedicines())} className="flex items-center">
            <Link className="px-6" to="/medicines">
              All Medicines
            </Link>
          </button>
          {filterItems}
        </div>
        {isloading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PaginationMedicines?.map((medicine) => (
              <MediCard key={medicine._id} medicine={medicine} />
            ))}
          </div>
        )}
      </div>
      <ReactPaginate
        className="flex text-center items-center justify-center my-auto space-x-3 font-semibold  pb-5 align-middle"
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
