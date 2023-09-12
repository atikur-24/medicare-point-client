import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ViewCart = () => {
  const [cartMedicines, setCartMedicines] = useState([]);

  useEffect(() => {
    axios
      .get("/medicines.json")
      .then((res) => setCartMedicines(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {cartMedicines.map((cartMedicine, index) => (
        <div key={index} className="card card-compact bg-white rounded-md hover:shadow-lg transition-shadow relative">
          {cartMedicine.discount && <p className="bg-my-accent rounded-md py-1 px-2 text-xs font-medium text-white absolute top-4 left-4">-{cartMedicine.discount}% OFF</p>}
          <figure>
            <img className="h-72 w-full object-cover" src={cartMedicine.image} alt="medicine" />
          </figure>
          <div className="card-body space-y-2 lg:space-y-3">
            <div className="space-y-1">
              <p className="text-gray-5 text-xs font-medium">{cartMedicine.category}, personal care</p>
              <h2 className="text-[1.125rem] font-semibold title-color tracking-wide hover:underline inline-block hover:cursor-pointer">{cartMedicine.medicine_name}</h2>
            </div>
            <div className="space-y-3">
              <Rating style={{ maxWidth: 70 }} value={cartMedicine.rating} readOnly />
              <p className="inline-flex gap-1">
                <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">৳ {cartMedicine.price}</span>
                <span className="font-semibold inline-flex items-center text-[16px] text-gray-5 line-through">৳ 170</span>
              </p>
            </div>
            <div className="flex w-full space-x-4">
              <button type="button" className="btn btn-outline btn-success">
                Confirm
              </button>
              <button type="button" className="btn btn-outline btn-error">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewCart;
