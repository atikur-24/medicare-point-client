import axios from "axios";
import { useEffect, useState } from "react";
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
      <div className="lg:flex items-center gap-3 lg:gap-6">
        <h3 className="text-xl lg:text-3xl tracking-wider font-medium">My Order</h3>
        <p className="text-gray-5 lg:leading-7">
          View and edit all your pending delivered <br /> and returned order here
        </p>
      </div>
      <div className="bg-white rounded-md">
        <div className="flex justify-between">
          <p>Order: #3213232514</p>
          <button className="cart-btn tracking-wide" type="button">
            Track Order
          </button>
        </div>
        {orderHistories?.map((orderHistory) => (
          <OrderHistoryCard key={orderHistory._id} orderHistory={orderHistory} />
        ))}
        <button className="btn my-btn" type="button">
          Cancel Order
        </button>
      </div>
    </section>
  );
};

export default OrderHistory;
