import { BiCurrentLocation } from "react-icons/bi";
import { TiCancel } from "react-icons/ti";
import { Link } from "react-router-dom";

const OrderHistoryCard = ({ orderHistory, handelChangeStatus }) => {
  const {
    medicine_name,
    image,
    category,
    quantity,
    price,
    delivery_status,
    district,
    location,
    expectedDate,
    _id,
  } = orderHistory || {};

  return (
    <>
      <div className="flex flex-col justify-between gap-2 p-6 md:flex-row ">
        <p>Order: #{_id}</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-center lg:gap-6">
          <Link to="/dashboard/track-order">
            <button
              disabled={delivery_status === "canceled"}
              className="flex w-fit cursor-pointer items-center rounded-md bg-my-primary px-2 py-1 text-white  lg:gap-2"
              type="button"
            >
              <BiCurrentLocation className="text-white" /> Track Order
            </button>
          </Link>
          <button
            disabled={delivery_status === "canceled"}
            onClick={() => handelChangeStatus(_id)}
            className="flex w-fit cursor-pointer items-center rounded-md bg-red-500 px-2 py-1 text-white lg:gap-2 "
            type="button"
          >
            <TiCancel className="text-white" /> Cancel Order
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-b border-gray-3 p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <img className="h-24 w-20" src={image} alt="medicine" />
          <div className="flex flex-col  justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-7 lg:text-lg">
                {medicine_name}
              </h3>
              <p className="text-gray-4">By {category}</p>
            </div>
            <div className="space-x-4 lg:space-x-6">
              <span className="text-gray-4">QTY: {quantity}</span>
              <span className="font-medium tracking-wide text-black lg:font-semibold">
                TK: {price}
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-7">Delivery Status</p>
          <div
            className={`${delivery_status === "shipping" && "text-my-accent"} ${
              delivery_status === "packing" && "text-my-pink"
            } ${delivery_status === "pending" && "text-yellow-500"} ${
              delivery_status === "delivered" && "text-my-primary"
            } ${
              delivery_status === "canceled" && "text-red-400"
            } text-center font-medium capitalize`}
          >
            {delivery_status}
          </div>
        </div>
        <div className="space-y-1 lg:space-y-3">
          <p className="text-gray-4">Delivery Expected By</p>
          {expectedDate && (
            <p className="font-medium  tracking-wide text-black lg:font-semibold">
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
