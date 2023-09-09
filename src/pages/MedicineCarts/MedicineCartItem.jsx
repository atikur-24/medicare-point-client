/* eslint-disable no-mixed-operators */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiMinus, HiPlus } from "react-icons/hi";
import { TbCurrencyTaka } from "react-icons/tb";

const MedicineCartItem = ({ item, refetch }) => {
  const { _id, image, medicine_name, category, price, discount, quantity } = item || {};
  const [count, setCount] = useState(quantity);
  const total = (quantity * (price - (price / 100) * discount)).toFixed(2);

  const handleRemoveToCart = () => {
    axios.delete(`http://localhost:5000/medicineCarts/${_id}`).then((result) => {
      if (result.data.deletedCount > 0) {
        toast.error("Item Removed");
        refetch();
      }
    });
    refetch();
  };

  const handelQuantity = (newQuan) => {
    setCount(newQuan);
    const newQuantity = {
      quantity: newQuan,
    };
    axios.patch(`http://localhost:5000/update-quantity/${_id}`, newQuantity).then(() => {
      refetch();
    });
  };

  return (
    <div className="flex items-end md:items-center justify-between border-b border-gray-3 py-3">
      <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-16">
        <div className="flex justify-between items-center ">
          <button onClick={handleRemoveToCart} type="button" className="bg-lite rounded-full py-1 px-3">
            <span className="text-red-500">X</span>
          </button>
          <img className=" w-full h-28 object-cover" src={image} alt="medicine" />
        </div>
        <div>
          <h5 className="text-xl font-medium">{medicine_name}</h5>
          <small className="text-gray-4">By {category?.label}</small>
          <small className="text-gray-4 block">1 Box</small>
          <div className="flex flex-col md:flex-row gap-1 md:gap-8 ">
            <p className="text-gray-4 inline-flex items-center ">
              TK <TbCurrencyTaka /> <strike>{price.toFixed(2)}</strike>
            </p>
            {discount !== 0 ? <p className="text-red-400 font-medium">- {discount} OFF</p> : ""}
            <p className="text-black-2 font-medium inline-flex items-center">
              TK <TbCurrencyTaka /> {price - discount}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="border border-gray-3 rounded-full flex justify-between px-3 md:py-2  ">
          <button type="button" disabled={count <= 1} onClick={() => handelQuantity(count - 1)} className="cursor-pointer">
            <HiMinus />
          </button>
          <span className="text-gray-5">{count}</span>
          <button type="button" disabled={count >= 50} onClick={() => handelQuantity(count + 1)} className="cursor-pointer">
            <HiPlus />
          </button>
        </div>
        <p className="text-black-2 font-medium">Total: {total}</p>
      </div>
    </div>
  );
};

export default MedicineCartItem;
