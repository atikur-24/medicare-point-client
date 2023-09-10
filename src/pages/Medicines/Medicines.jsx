/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { useEffect, useState } from "react";
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
import MediCard from "../Shared/Card/MediCard";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(null);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const { allData, isloading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:5000/medicinesc?category=${category}`).then((res) => setMedicines(res.data));
    } else {
      setMedicines(allData);
    }
  }, [allData, category]);

  const handelSort = (sort) => {
    dispatch(fetchMedicines({ sort }));
  };

  const handelCategoryFilter = (fCategory) => {
    const filterData = allData.filter((item) => item?.category?.value === fCategory);
    setMedicines(filterData);
    setIsOpen(fCategory);
  };

  const medicineParPage = 9;
  const startIndex = currentPage * medicineParPage;
  const endIndex = startIndex + medicineParPage;
  const PaginationMedicines = medicines.slice(startIndex, endIndex);
  const pageCount = Math.ceil(medicines.length / medicineParPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  const [showFilter, setShowFilter] = useState("-ml-96");
  const filterItems = (
    <div className="">
      <div className="rounded-lg border border-gray-3">
        <h3 className="text-title-color text-xl font-bold tracking-wide py-4 px-6 uppercase border-b-2 border-gray-3">Categories</h3>
        <div className="py-4 px-6 space-y-4 text-sm">
          <button type="button" onClick={() => dispatch(fetchMedicines())} className="flex items-center">
            <Link to="/medicines" className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "" ? "text-my-accent underline" : ""}`}>
              <LiaAngleRightSolid /> All Medicines
            </Link>
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Pain-Relief")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Pain-Relief" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Pain Relief
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Digestive-Health")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Digestive-Health" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Digestive Health
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Cough-Cold")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Cough-Cold" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Cough & Cold
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Diabetes-Care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Diabetes-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Diabetes Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Heart-Health")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Heart-Health" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Heart Health
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Laundry-Household")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Laundry-Household" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Laundry Household
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Skin-Care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Skin-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Skin Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Eye-Care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Eye-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Eye Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Women-Care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Women-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Women Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Mens-Products")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Mens-Products" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Men's Products
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Vitamins")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Vitamins" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Vitamins
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Devices-Equipment")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Devices-Equipment" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Devices & Equipment
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Bone-Health-care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Bone-Health-care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Bone Health care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Weight")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Weight" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Weight
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Dental-Care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Dental-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Dental Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Baby-Care")}
            className={`inline-flex items-center gap-1 w-full hover:text-my-accent hover:cursor-pointer ${isOpen === "Baby-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Baby Care
          </button>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-3">
        <h3 className="text-title-color text-xl font-bold tracking-wide py-4 px-6 uppercase border-b-2 border-gray-3">Product tags</h3>
        <div className="p-2">
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
          <button type="button" className="btn btn-sm m-1 bg-my-accent hover:bg-my-primary">
            ABC 1
          </button>
        </div>
      </div>
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

      <div className={`w-64 rounded-md bg-white lg:hidden absolute top-0 z-30 h-screen ${showFilter} transition-all duration-500`}>
        <div className="flex justify-between items-center">
          <button onClick={() => setShowFilter("-ml-96")} className="lg:hidden" type="button">
            <RxCross1 className="text-lg font-bold text-my-primary mr-2 btn btn-circle btn-sm p-1" />
          </button>
        </div>
        {filterItems}
      </div>

      <div className="container mx-auto px-4 lg:px-10 pb-10 md:flex gap-8">
        <div className="w-80 h-fit bg-white rounded-md hidden md:block">
          {/* <div onClick={() => setIsOpen(null)}>
            <button type="button" onClick={() => dispatch(fetchMedicines())} className="flex items-center">
              <Link className="px-6" to="/medicines">
                All Medicines
              </Link>
            </button>
          </div> */}
          {filterItems}
        </div>
        {isloading ? (
          <Loader spinner />
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
