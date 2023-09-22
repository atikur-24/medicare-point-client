import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrder } from "../../../../Features/Orders/orderHistory";
import Loader from "../../../../components/Loader";
import OrderHistoryRow from "./OrderHistoryRow";

const OrderHistoryByAdmin = () => {
  const { allOrders, isLoading } = useSelector((state) => state.orderHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);

  return (
    <div>
      <h2>Order History by admin</h2>
      <div className="overflow-x-auto mb-20  px-5">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-lg">
            <tr className=" rounded-t-md text-center">
              <th className="rounded-tl-md">Order Id</th>
              <th>Product</th>
              <th>Quantity || Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {!isLoading && (
            <tbody>
              {allOrders?.map((order) => (
                <OrderHistoryRow key={order?._id} order={order} />
              ))}
            </tbody>
          )}
        </table>
        <div className="mt-44">{isLoading && <Loader spinner />}</div>
      </div>
    </div>
  );
};

export default OrderHistoryByAdmin;
