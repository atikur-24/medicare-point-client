import axios from "axios";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { TbCurrencyTaka } from "react-icons/tb";
// import { FaCheck } from "react-icons/fa";

const OrderHistory = () => {
  const [orderHistories, setOrderHistory] = useState([]);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((res) => setOrderHistory(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-2 px-4">Product</th>
            <th className="text-left py-2 px-4">Category</th>
            <th className="text-left py-2 px-4">Price</th>
            <th className="text-left py-2 px-4">Rating</th>
            <th className="text-left py-2 px-4">Delivered</th>
          </tr>
        </thead>
        <tbody>
          {orderHistories.map((orderHistory, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-4">
                <div className="flex items-center space-x-4">
                  <img src={orderHistory.image} alt="medicine" className="h-16 w-16 object-cover" />
                  <span className="text-sm">{orderHistory.medicine_name}</span>
                </div>
              </td>
              <td className="py-4 px-4">{orderHistory.category}</td>
              <td className="py-4 px-4">
                <span className="font-bold text-my-pink">
                  <TbCurrencyTaka /> {orderHistory.price}
                </span>
              </td>
              <td className="py-4 px-4">
                <Rating style={{ maxWidth: 70 }} value={orderHistory.rating} readOnly />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center space-x-2">
                  <p>
                    Order: <span className="italic">{orderHistory.order}</span>
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
