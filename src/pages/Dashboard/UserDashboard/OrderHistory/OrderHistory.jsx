import axios from "axios";
import { useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { TiCancel } from "react-icons/ti";
import useAuth from "../../../../hooks/useAuth";
import OrderHistoryCard from "./OrderHistoryCard";

const OrderHistory = () => {
  const { user } = useAuth();
  const [orderHistories, setOrderHistory] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/medicinesOrder?email=${user?.email}`).then((res) => setOrderHistory(res.data));
  }, [user?.email]);

  return (
    <section className="bg-lite py-6 lg:py-10 px-4 lg:px-8">
      <div className=" space-y-2 mb-5">
        <h3 className="text-xl lg:text-3xl tracking-wider font-medium">My Order</h3>
        <p className="text-gray-5 lg:leading-7">
          View and edit all your pending delivered <br /> and returned order here
        </p>
      </div>
      <div className="bg-white rounded-md">
        <div className="flex justify-between flex-col md:flex-row gap-2 p-6 ">
          <p>Order: #3213232514</p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 lg:gap-6">
            <button className="px-2 w-fit py-1 lg:gap-2 rounded-md bg-my-primary text-white flex items-center  cursor-pointer" type="button">
              <BiCurrentLocation className="text-white" /> Track Order
            </button>
            <button className="px-2 w-fit py-1 rounded-md bg-red-500 text-white flex items-center lg:gap-2 cursor-pointer " type="button">
              <TiCancel className="text-white" /> Cancel Order
            </button>
          </div>
        </div>
        <hr className="border-gray-3" />
        {orderHistories?.map((orderHistory) => (
          <OrderHistoryCard key={orderHistory._id} orderHistory={orderHistory} />
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;
