import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Heading from "../../Shared/Heading/Heading";

const OtcMedicine = () => {
  const [otcMedicines, setOtcMedicines] = useState([]);

  useEffect(() => {
    axios.get("/otcMedicine.json").then((res) => setOtcMedicines(res.data));
  }, []);

  return (
    <div>
      <div className="my-container">
        <Heading title="Otc Medicine" center />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4   justify-center items-center">
          {otcMedicines.map((otcMedicine, idx) => (
            <div key={idx}>
              <div className="card mx-auto bg-base-100 shadow-xl lg:h-full space-y-4">
                <div className="relative ">
                  <img src={otcMedicine.image} alt="img" className="rounded-xl w-full h-32 lg:h-36 object-cover" />
                </div>
                <div className="card-body flex flex-col items-center justify-end p-4 h-full">
                  <h2 className="card-title mb-0">{otcMedicine.title} <FaArrowRight /> </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtcMedicine;
