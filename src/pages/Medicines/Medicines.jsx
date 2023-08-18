import axios from "axios";
import { useEffect, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import MedicineCard from "./MedicineCard";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/medicines").then((res) => setMedicines(res?.data));
  }, []);
  return (
    <section className="bg-lite">
      <div className="my-container md:flex gap-8">
        <div className="w-72 h-fit bg-white rounded-md hidden md:block">
          <h3 className="text-title-color text-xl font-bold tracking-wide py-4 px-6">Categories</h3>
          <hr />
          <div className="py-4 px-6 space-y-4 text-sm">
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Ayush</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Fitness</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Otc Deals</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Mom & Baby</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Fitness</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Otc Deals</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Mom & Baby</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Ayush</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Ayush</p>
            <p className="inline-flex items-center gap-1 w-full hover:txt-primary hover:cursor-pointer"><LiaAngleRightSolid /> Ayush</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            medicines?.map((medicine, idx) => <MedicineCard key={idx} medicine={medicine} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Medicines;
