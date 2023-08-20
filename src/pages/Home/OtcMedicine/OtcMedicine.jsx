import axios from "axios";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import SectionTitle from "../../../components/SectionTitle";

const OtcMedicine = () => {
  const [otcMedicines, setOtcMedicines] = useState([]);

  useEffect(() => {
    axios.get("/otcMedicine.json").then((res) => setOtcMedicines(res.data));
  }, []);

  return (
    <div className="bg-card">
      <div className="my-container">
        <SectionTitle title="Otc Medicines" content="Easy Access to OTC Medicines, Your Trusted Solution for Common Health Needs. Shop Now for Affordable and Effective Relief." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {otcMedicines.map((otcMedicine, idx) => (
            <div key={idx} className="card mx-auto shadow-xl lg:h-full space-y-4 md:hover:scale-105 transition-all duration-200">
              <div>
                <img src={otcMedicine.image} alt="img" className="rounded-t-xl w-full h-32 md:h-36 lg:h-40 object-cover" />
              </div>
              <div className="card-body flex flex-col items-center justify-end p-4 h-full">
                <h2 className="inline-flex items-center gap-3 font-medium text-[16px] tracking-wide">{otcMedicine.title} <HiArrowNarrowRight /> </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtcMedicine;
