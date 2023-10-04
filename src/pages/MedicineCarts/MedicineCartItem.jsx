/* eslint-disable no-mixed-operators */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiMinus, HiPlus } from "react-icons/hi";

const MedicineCartItem = ({ item, refetch }) => {
  const {
    _id,
    image,
    medicine_name,
    category,
    price,
    discount,
    quantity,
    order_quantity,
  } = item || {};
  const [count, setCount] = useState(quantity);
  const total = (quantity * (price - (price / 100) * discount)).toFixed(2);

  const handleRemoveToCart = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/medicineCarts/${_id}`)
      .then((result) => {
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
    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/update-quantity/${_id}`,
        newQuantity,
      )
      .then(() => {
        refetch();
      });
  };

  return (
    <div className="flex items-end justify-between border-gray-3 py-3 md:items-center">
      <div className="flex flex-col items-center gap-3 md:flex-row lg:gap-16">
        <div className="flex items-center justify-between ">
          <button
            onClick={handleRemoveToCart}
            type="button"
            className="rounded-full bg-lite px-3 py-1"
          >
            <span className="text-red-500">X</span>
          </button>
          <img
            className="h-20 w-20 object-cover lg:h-28 lg:w-28"
            src={image}
            alt="medicine"
          />
        </div>
        <div>
          <h5 className=" font-medium md:text-xl">{medicine_name}</h5>
          <small className="text-gray-4">By {category}</small>
          <small className="block text-gray-4">1 {order_quantity}</small>
          <div className="flex flex-col gap-1 md:flex-row md:gap-8 ">
            {discount !== 0 ? (
              <p className="inline-flex items-center text-gray-4 ">
                TK <strike>{price.toFixed(2)}</strike>
              </p>
            ) : (
              ""
            )}
            {discount !== 0 ? (
              <p className="font-medium text-red-400">- {discount} OFF</p>
            ) : (
              ""
            )}
            <p className="md:text-md inline-flex items-center  text-sm font-medium text-black-2">
              TK {price - discount}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex w-fit space-x-5 rounded-full border border-gray-3 px-5 py-3">
          <button
            type="button"
            disabled={count <= 1}
            onClick={() => handelQuantity(count - 1)}
            className="cursor-pointer"
          >
            <HiMinus />
          </button>
          <span className="text-gray-5">{count}</span>
          <button
            type="button"
            disabled={count >= 50}
            onClick={() => handelQuantity(count + 1)}
            className="cursor-pointer"
          >
            <HiPlus />
          </button>
        </div>
        <p className="font-medium text-black-2">Total: {total}</p>
      </div>
    </div>
  );
};

export default MedicineCartItem;
