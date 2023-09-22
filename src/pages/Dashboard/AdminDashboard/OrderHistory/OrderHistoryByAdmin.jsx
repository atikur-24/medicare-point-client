import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrder } from "../../../../Features/Orders/orderHistory";
import Loader from "../../../../components/Loader";
import OrderHistoryRow from "./OrderHistoryRow";

const OrderHistoryByAdmin = () => {
  const [isClick, setIsClick] = useState(0);
  const { allOrders, isLoading } = useSelector((state) => state.orderHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch, isClick]);

  return (
    <div>
      <div className="flex px-6 mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Order History</div>
            <div className="stat-value text-my-primary">{allOrders?.length || 0}</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-20  px-5">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-sm">
            <tr className=" rounded-t-md text-center">
              <th className="rounded-tl-md"> Id</th>
              <th>Product</th>
              <th>Quantity || Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {!isLoading && (
            <tbody>
              {allOrders?.map((order) => (
                <OrderHistoryRow key={order?._id} order={order} setIsClick={setIsClick} isClick={isClick} />
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
