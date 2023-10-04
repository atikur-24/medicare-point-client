import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

const OrderHistoryRow = ({ order, handleDeleteOrder, handleModalClick }) => {
  return (
    <tr key="" className="border-b border-slate-3 text-center">
      <td>{order?._id?.slice(-4)}</td>
      <td>
        <img
          className="mask mx-auto h-14 w-14 rounded"
          src={order?.image}
          alt="medicine"
        />
        <span>{order?.medicine_name}</span>
      </td>
      <td className="font-medium">
        {order?.quantity} ||{" "}
        <span className="text-my-pink">{order?.price} ৳</span>
      </td>
      <td className="font-medium">{order?.district}</td>
      <td>
        <div
          className={`${
            order?.delivery_status === "shipping" && "text-my-accent"
          } ${order?.delivery_status === "packing" && "text-my-pink"} ${
            order?.delivery_status === "pending" && "text-yellow-500"
          } ${order?.delivery_status === "delivered" && "text-my-primary"} ${
            order?.delivery_status === "canceled" && "text-red-400"
          } badge font-medium capitalize`}
        >
          {order?.delivery_status}
        </div>
      </td>
      <td className="space-x-2">
        <button
          type="button"
          onClick={() => handleModalClick(order)}
          className="group relative"
        >
          <TbListDetails className="rounded-full bg-my-primary p-1 text-3xl text-[white]" />
          <p className="absolute hidden whitespace-nowrap group-hover:block ">
            Details
          </p>
        </button>

        <button
          onClick={() => handleDeleteOrder(order?._id)}
          type="button"
          className=" rounded-full bg-red-500/30"
          title="delete"
        >
          <RiDeleteBinLine className="p-1  text-3xl text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default OrderHistoryRow;
