import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ViewCart = () => {
  const [cartMedicines, setCartMedicines] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/medicines.json`)
      .then((res) => setCartMedicines(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {cartMedicines.map((cartMedicine, index) => (
        <div
          key={index}
          className="card card-compact relative rounded-md bg-white transition-shadow hover:shadow-lg"
        >
          {cartMedicine.discount && (
            <p className="absolute left-4 top-4 rounded-md bg-my-accent px-2 py-1 text-xs font-medium text-white">
              -{cartMedicine.discount}% OFF
            </p>
          )}
          <figure>
            <img
              className="h-72 w-full object-cover"
              src={cartMedicine.image}
              alt="medicine"
            />
          </figure>
          <div className="card-body space-y-2 lg:space-y-3">
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-5">
                {cartMedicine.category}, personal care
              </p>
              <h2 className="title-color inline-block text-[1.125rem] font-semibold tracking-wide hover:cursor-pointer hover:underline">
                {cartMedicine.medicine_name}
              </h2>
            </div>
            <div className="space-y-3">
              <Rating
                style={{ maxWidth: 70 }}
                value={cartMedicine.rating}
                readOnly
              />
              <p className="inline-flex gap-1">
                <span className="inline-flex items-center text-[1.125rem] font-bold text-my-pink">
                  ৳ {cartMedicine.price}
                </span>
                <span className="inline-flex items-center text-[16px] font-semibold text-gray-5 line-through">
                  ৳ 170
                </span>
              </p>
            </div>
            <div className="flex w-full space-x-4">
              <button type="button" className="btn btn-success btn-outline">
                Confirm
              </button>
              <button type="button" className="btn btn-error btn-outline">
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
