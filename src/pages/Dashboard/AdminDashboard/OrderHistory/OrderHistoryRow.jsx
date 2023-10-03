import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

const OrderHistoryRow = ({ order, handleDeleteOrder, handleModalClick }) => {
  return (
    <tr key="" className="border-b border-slate-3 text-center">
      <td>{order?._id?.slice(-4)}</td>
      <td>
        <img className="mask rounded w-14 h-14 mx-auto" src={order?.image} alt="medicine" />
        <span>{order?.medicine_name}</span>
      </td>
      <td className="font-medium">
        {order?.quantity} || <span className="text-my-pink">{order?.price} ৳</span>
      </td>
      <td className="font-medium">{order?.district}</td>
      <td>
        <div
          className={`${order?.delivery_status === "shipping" && "text-my-accent"} ${order?.delivery_status === "packing" && "text-my-pink"} ${order?.delivery_status === "pending" && "text-yellow-500"} ${
            order?.delivery_status === "delivered" && "text-my-primary"
          } ${order?.delivery_status === "canceled" && "text-red-400"} capitalize font-medium badge`}
        >
          {order?.delivery_status}
        </div>
      </td>
      <td className="space-x-2">
        <button type="button" onClick={() => handleModalClick(order)} className="relative group">
          <TbListDetails className="text-3xl p-1 rounded-full text-[white] bg-my-primary" />
          <p className="absolute hidden group-hover:block whitespace-nowrap ">Details</p>
        </button>

        <button onClick={() => handleDeleteOrder(order?._id)} type="button" className=" bg-red-500 rounded-full bg-opacity-30 " title="delete">
          <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
        </button>
      </td>
    </tr>
  );
};

export default OrderHistoryRow;
