import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import OrderRow from "./OrderRow";

const PharmacistOrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/medicinesOrderByPharmacist?email=${user?.email}`).then((res) => setOrders(res?.data));
  }, [user]);

  return (
    <div className="mx-1 md:mx-5">
      {/* <h3 className="text-center text-3xl my-7 font-semibold">All Medicines</h3> */}
      <div className="my-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Order</div>
            <div className="stat-value text-my-primary">5</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mb-20  px-2">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white ">
            <tr className="text-center rounded-t-md">
              <th className="rounded-tl-md">#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Customer</th>

              <th>Price</th>
              <th>Quantity</th>
              <th>Transaction ID</th>
              <th className="rounded-tr-md">Date</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {orders?.map((order) => (
              <OrderRow key={order?._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PharmacistOrderHistory;
