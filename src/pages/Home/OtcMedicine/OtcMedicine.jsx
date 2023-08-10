import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
=======
import Heading from "../../Shared/Heading/Heading";
>>>>>>> 12ac57b79c7ab660a6c6c7c659afb4dc8de7f38e

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
<<<<<<< HEAD
                <div className="relative ">
                  <img src={otcMedicine.image} alt="img" className=" rounded-xl w-full h-full object-cover" />
                </div>
                <div className="card-body flex flex-col items-center justify-end p-4 h-full">
                  <h2 className="card-title mb-0">{otcMedicine.title}</h2>
                  <Link></Link>
=======
                <figure className="">
                  <img src={otcMedicine.image} alt="img" className="rounded-xl w-full h-full object-cover" />
                </figure>
                <div className="card-body items-center text-center mt-5">
                  <h2 className="card-title">{otcMedicine.title}</h2>
                  <Link to="/">
                    <button type="button" className="btn btn-primary">
                      Buy Now
                    </button>
                  </Link>
>>>>>>> 12ac57b79c7ab660a6c6c7c659afb4dc8de7f38e
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
