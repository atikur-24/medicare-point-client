import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import { Link } from "react-router-dom";

const OtcMedicine = () => {
  const [otcMedicines, setOtcMedicines] = useState([]);

  useEffect(() => {
    axios.get("/otcMedicine.json").then((res) => setOtcMedicines(res.data));
  }, []);

  return (
    <div>
      <div>
        <Heading title={"Otc Medicine"} center={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-8  justify-center items-center">
          {otcMedicines.map((otcMedicine) => (
            <div key={otcMedicine.id}>
              <div className="card mx-auto bg-base-100 shadow-xl lg:h-72">
                <figure className="">
                  <img src={otcMedicine.image} alt="img" className="rounded-xl w-full h-full object-cover" />
                </figure>
                <div className="card-body items-center text-center mt-5">
                  <h2 className="card-title">{otcMedicine.title}</h2>
                  <Link>
                    <button className="btn btn-primary">Buy Now</button>
                  </Link>
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
