import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import OrderHistoryModal from "./OrderHistoryModal";

const OrderHistoryRow = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr key="" className="border-b border-slate-3 text-center">
      <td>{order?._id?.slice(-4)}</td>
      <td>
        <img className="mask rounded w-14 h-14 mx-auto" src={order?.image} alt="medicine" />
        <span>{order?.medicine_name}</span>
      </td>
      <td className="font-medium">
        {order?.quantity} || <span className="text-yellow-500">{order?.price} ৳</span>
      </td>

      <td
        className={`${order?.delivery_status === "shipping" && "text-[#209744]"} ${order?.delivery_status === "packing" && "text-yellow-500"} ${
          order?.delivery_status === "pending" && "text-red-500"
        } ${order?.delivery_status === "delivered" && "text-[#4075e9]"} capitalize font-medium`}
      >
        {order?.delivery_status}
      </td>
      <td className="space-x-2">
        <button type="button" className=" bg-red-500 rounded-full bg-opacity-30 ">
          <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
        </button>

        <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative group">
          <TbListDetails className="text-3xl p-1 rounded-full text-[white] bg-my-primary" />
          <p className="absolute hidden group-hover:block whitespace-nowrap ">Detail</p>
        </button>
      </td>
      <OrderHistoryModal isOpen={isOpen} setIsOpen={setIsOpen} id={order?._id} />
    </tr>
  );
};

export default OrderHistoryRow;
