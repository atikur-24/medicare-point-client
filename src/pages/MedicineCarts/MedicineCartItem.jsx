/* eslint-disable no-mixed-operators */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiPlus, HiMinus } from "react-icons/hi";

const MedicineCartItem = ({ item, refetch }) => {
  const { _id, image, medicine_name, category, price, discount, quantity } = item || {};
  const [count, setCount] = useState(quantity);
  const total = (quantity * (price - (price / 100) * discount)).toFixed(2);

  const handleRemoveToCart = () => {
    axios.delete(`http://localhost:5000/medicineCarts/${_id}`).then(() => toast.error("Item Removed"));
    refetch();
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-3 py-3">
      <button onClick={handleRemoveToCart} type="button" className="bg-lite rounded-full py-1 px-3">
        <span className="text-red-500">X</span>
      </button>
      <img className="w-20 h-28 object-cover" src={image} alt="medicine" />
      <div>
        <h5 className="text-xl font-medium">{medicine_name}</h5>
        <small className="text-gray-4">By {category}</small>
        <small className="text-gray-4 block">1 Box</small>
        <p className="space-x-3 lg:space-x-5">
          TK
          <span className="text-gray-4 inline-flex items-center line-through">
            <TbCurrencyTaka /> {price.toFixed(2)}
          </span>
          <span className="text-black-2 font-medium inline-flex items-center">
            <TbCurrencyTaka /> {total}
          </span>
          <span className="text-red-400 font-medium">- {discount} OFF</span>
        </p>
      </div>
      <div className="space-y-4">
        <div className="border border-gray-3 rounded-full w-fit py-3 px-5 space-x-5">
          <button type="button" disabled={count <= 1} onClick={() => setCount(count - 1)} className="cursor-pointer">
            <HiMinus />
          </button>
          <span className="text-gray-5">{count}</span>
          <button type="button" disabled={count >= 50} onClick={() => setCount(count + 1)} className="cursor-pointer">
            <HiPlus />
          </button>
        </div>
        <p className="text-black-2 font-medium">Total: {total}</p>
      </div>
    </div>
  );
};

export default MedicineCartItem;
