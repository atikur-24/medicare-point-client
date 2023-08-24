import { HiOutlineChevronRight } from "react-icons/hi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import useMedicines from "../../hooks/useMedicines";
import MedicineCard from "./MedicineCard";

const Medicines = () => {
  const [medicines] = useMedicines();
  return (
    <section className="bg-lite">
      <div className="container mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-10">
        <p className="inline-flex items-center gap-1 font-medium md:font-semibold tracking-wider text-black-2 lg:text-lg">
          <Link to="/" className="hover:text-my-accent cursor-pointer transition-colors">
            Home
          </Link>
          <HiOutlineChevronRight />
          <span>Medicines</span>
        </p>
      </div>
      <div className="container mx-auto px-4 lg:px-10 pb-10 md:flex gap-8">
        <div className="w-72 h-fit bg-white rounded-md hidden md:block">
          <h3 className="text-title-color text-xl font-bold tracking-wide py-4 px-6">Categories</h3>
          <hr />
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines?.map((medicine) => (
            <MedicineCard key={medicine._id} medicine={medicine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Medicines;
