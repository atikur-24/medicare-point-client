import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../Shared/Heading/Heading";

const OtcMedicine = () => {
  const [otcMedicines, setOtcMedicines] = useState([]);

  useEffect(() => {
    axios.get("/otcMedicine.json").then((res) => setOtcMedicines(res.data));
  }, []);

  return (
    <div>
      <div className="my-container ">
        <Heading title="Otc Medicine" center />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4   justify-center items-center">
          {otcMedicines.map((otcMedicine) => (
            <div key={otcMedicine.id}>
              <div className="card mx-auto bg-base-100 shadow-xl lg:h-72">
                <div className="relative ">
                  <img src={otcMedicine.image} alt="img" className=" rounded-xl w-full h-full object-cover" />
                </div>
                <div className="card-body flex flex-col items-center justify-end p-4 h-full">
                  <h2 className="card-title mb-0">{otcMedicine.title}</h2>
                  <Link></Link>
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
