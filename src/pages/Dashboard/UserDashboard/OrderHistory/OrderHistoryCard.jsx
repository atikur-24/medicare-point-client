import { BiCurrentLocation } from "react-icons/bi";
import { TiCancel } from "react-icons/ti";
import { Link } from "react-router-dom";

const OrderHistoryCard = ({ orderHistory, handelChangeStatus }) => {
  const { medicine_name, image, category, quantity, price, delivery_status, district, location, expectedDate, _id } = orderHistory || {};

  return (
    <>
      <div className="flex justify-between flex-col md:flex-row gap-2 p-6 ">
        <p>Order: #{_id}</p>
        <div className="flex flex-col md:flex-row md:items-center gap-2 lg:gap-6">
          <Link to="/dashboard/track-order">
            <button disabled={delivery_status === "canceled"} className="px-2 w-fit py-1 lg:gap-2 rounded-md bg-my-primary text-white flex items-center  cursor-pointer" type="button">
              <BiCurrentLocation className="text-white" /> Track Order
            </button>
          </Link>
          <button disabled={delivery_status === "canceled"} onClick={() => handelChangeStatus(_id)} className="px-2 w-fit py-1 rounded-md bg-red-500 text-white flex items-center lg:gap-2 cursor-pointer " type="button">
            <TiCancel className="text-white" /> Cancel Order
          </button>
        </div>
      </div>
      <div className="flex border-b flex-col md:flex-row gap-5 border-gray-3 md:items-center md:justify-between p-5">
        <div className="flex gap-3">
          <img className="w-20 h-24" src={image} alt="medicine" />
          <div className="flex flex-col  justify-between">
            <div>
              <h3 className="text-base lg:text-lg font-medium text-gray-7">{medicine_name}</h3>
              <p className="text-gray-4">By {category}</p>
            </div>
            <div className="space-x-4 lg:space-x-6">
              <span className="text-gray-4">QTY: {quantity}</span>
              <span className="text-black font-medium lg:font-semibold tracking-wide">TK: {price}</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-7">Delivery Status</p>
          <div
            className={`${delivery_status === "shipping" && "text-my-accent"} ${delivery_status === "packing" && "text-my-pink"} ${delivery_status === "pending" && "text-yellow-500"} ${delivery_status === "delivered" && "text-my-primary"} ${
              delivery_status === "canceled" && "text-red-400"
            } capitalize font-medium text-center`}
          >
            {delivery_status}
          </div>
        </div>
        <div className="space-y-1 lg:space-y-3">
          <p className="text-gray-4">Delivery Expected By</p>
          {expectedDate && (
            <p className="text-black  font-medium lg:font-semibold tracking-wide">
              {expectedDate[0]} - {expectedDate[1]}
            </p>
          )}
          <div>
            <small className="text-gray-8">
              {district} ,{location}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryCard;
