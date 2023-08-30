import axios from "axios";
import { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";
import MediCard from "../Shared/Card/MediCard";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);

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
  return (
    <section className="bg-lite relative">
      <div className="container flex items-center mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-10">
        <button onClick={() => setShowFilter("")} className="lg:hidden" type="button">
          <BsFilterLeft className="text-lg font-bold text-my-primary mr-2" />
        </button>
        <p className="inline-flex items-center gap-1 font-medium md:font-semibold tracking-wider text-black-2 lg:text-lg">
          <Link to="/" className="hover:text-my-accent cursor-pointer transition-colors">
            Home
          </Link>
          <HiOutlineChevronRight />
          <span>Medicines</span>
        </p>
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
            </Link> <div className="my-btn">button</div>
          </div>
          {filterItems}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines?.map((medicine) => (
            <MediCard key={medicine._id} medicine={medicine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Medicines;
