import axios from "axios";
import { useEffect, useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import Loader from "../../../../components/Loader";
import useAuth from "../../../../hooks/useAuth";
import OrderRow from "./OrderRow";

const PharmacistOrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token source

    axios
      .get(
        `${import.meta.env.VITE_API_URL}/medicinesOrderByPharmacist?email=${
          user?.email
        }`,
        {
          cancelToken: source.token, // Pass the cancel token to the request
        },
      )
      .then((res) => {
        if (res?.data) {
          setIsLoading(false);
          setOrders(res?.data);
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    // Cleanup function to cancel the request when the component unmounts
    return () => {
      source.cancel("Data request canceled by cleanup"); // Cancel the request with a message
    };
  }, [user]);

  let filteredOrder = orders;
  if (filterStatus !== "All Order") {
    filteredOrder = orders.filter((order) =>
      order.delivery_status.toLowerCase().includes(filterStatus.toLowerCase()),
    );
  }
  const paginatedMedicineOrder = filteredOrder?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPending = orders?.filter(
    (order) => order?.delivery_status === "pending",
  );
  const totalPacking = orders?.filter(
    (order) => order?.delivery_status === "packing",
  );
  const totalShipping = orders?.filter(
    (order) => order?.delivery_status === "shipping",
  );
  const totalDelivered = orders?.filter(
    (order) => order?.delivery_status === "delivered",
  );
  const totalCancel = orders?.filter(
    (order) => order?.delivery_status === "canceled",
  );

  return (
    <div>
      <div className="my-8">
        <div className="mb-8 flex">
          <div className="stats shadow">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Total Order
              </div>
              <div className="stat-value text-gray-7">
                {orders?.length || 0}
              </div>
            </div>
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Delivered
              </div>
              <div className="stat-value text-my-primary">
                {totalDelivered?.length || 0}
              </div>
            </div>
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Shipping
              </div>
              <div className="stat-value text-my-accent">
                {totalShipping?.length || 0}
              </div>
            </div>
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Packing
              </div>
              <div className="stat-value text-my-pink">
                {totalPacking?.length || 0}
              </div>
            </div>
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Pending
              </div>
              <div className="stat-value text-yellow-500">
                {totalPending?.length || 0}
              </div>
            </div>
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Canceled
              </div>
              <div className="stat-value text-red-400">
                {totalCancel?.length || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 flex justify-end">
        <div className="flex items-center gap-4 ">
          <h2 className="w-[120px]">Filter by</h2>
          <select
            onChange={(e) => {
              setFilterStatus(e?.target?.value);
            }}
            className="select select-bordered w-full max-w-xs outline-none hover:outline-none focus:!outline-none"
          >
            <option selected>All Order</option>
            <option>Delivered</option>
            <option>Shipping</option>
            <option>Packing</option>
            <option>Pending</option>
            <option>Canceled</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table  table-zebra border border-gray-3 bg-white">
          {/* head */}
          <thead className="rounded-lg rounded-t-md  bg-my-primary/90 text-white ">
            <tr className="rounded-t-md text-center">
              <th className="rounded-tl-md">ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price(৳)</th>
              <th>QTY</th>
              <th>Customer Info</th>
              <th>DLY. Status</th>
              <th className="rounded-tr-md">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMedicineOrder?.map((order) => (
              <OrderRow key={order?._id} order={order} />
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end gap-5 pr-8 pt-5 lg:gap-7">
          {/* Row per page view */}
          <div>
            <label className="mr-2 text-gray-6">Rows Per Page:</label>
            <select
              className="p-1"
              value={perPage}
              onChange={(e) => {
                setCurrentPage(1);
                setPerPage(parseInt(e.target.value, 10));
              }}
            >
              <option value={8}>8</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          {/* Previous and next button (pagination) */}
          <div className="space-x-3">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleLeftSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < orders?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= orders?.length}
              className={`${
                currentPage * perPage >= orders?.length
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">{isLoading && <Loader spinner />}</div>
    </div>
  );
};

export default PharmacistOrderHistory;
