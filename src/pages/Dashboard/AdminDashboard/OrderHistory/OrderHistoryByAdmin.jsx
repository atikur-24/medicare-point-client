import axios from "axios";
import { useEffect, useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllOrder } from "../../../../Features/Orders/orderHistory";
import Loader from "../../../../components/Loader";
import OrderHistoryModal from "./OrderHistoryModal";
import OrderHistoryRow from "./OrderHistoryRow";

const OrderHistoryByAdmin = () => {
  const [isClick, setIsClick] = useState(0);
  const { allOrders, isLoading } = useSelector((state) => state.orderHistory);
  const [perPage, setPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [singleOrder, setSingleOrder] = useState({});

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch, isClick]);

  let filteredOrder = allOrders;
  if (filterStatus !== "All Order") {
    filteredOrder = allOrders.filter((order) => order.delivery_status.toLowerCase().includes(filterStatus.toLowerCase()));
  }
  const paginatedMedicineOrder = filteredOrder?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPending = allOrders.filter((order) => order?.delivery_status === "pending");
  const totalPacking = allOrders.filter((order) => order?.delivery_status === "packing");
  const totalShipping = allOrders.filter((order) => order?.delivery_status === "shipping");
  const totalDelivered = allOrders.filter((order) => order?.delivery_status === "delivered");
  const totalCancel = allOrders.filter((order) => order?.delivery_status === "canceled");

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You delete order to history",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/medicinesOrderByAdmin/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setIsClick(isClick + 1);
            Swal.fire("Deleted!", "This Order Deleted", "success");
          }
        });
      }
    });
  };

  const handleModalClick = (a) => {
    setSingleOrder(a);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Order</div>
            <div className="stat-value text-gray-7">{allOrders?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Delivered</div>
            <div className="stat-value text-my-primary">{totalDelivered?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Shipping</div>
            <div className="stat-value text-my-accent">{totalShipping?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Packing</div>
            <div className="stat-value text-my-pink">{totalPacking?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pending</div>
            <div className="stat-value text-yellow-500">{totalPending?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Canceled</div>
            <div className="stat-value text-red-400">{totalCancel?.length || 0}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-4 ">
          <h2 className="w-[120px]">Filter by</h2>
          <select
            onChange={(e) => {
              setFilterStatus(e?.target?.value);
            }}
            className="select outline-none hover:outline-none focus:!outline-none select-bordered w-full max-w-xs"
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
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-sm">
            <tr className=" rounded-t-md text-center">
              <th className="rounded-tl-md">ID</th>
              <th>Product</th>
              <th>Quantity || Price</th>
              <th>District</th>
              <th>Delivery Status</th>
              <th>View</th>
            </tr>
          </thead>

          {!isLoading && (
            <tbody>
              {paginatedMedicineOrder?.map((order) => (
                <OrderHistoryRow key={order?._id} order={order} handleModalClick={handleModalClick} handleDeleteOrder={handleDeleteOrder} />
              ))}
            </tbody>
          )}
        </table>
        <OrderHistoryModal setIsClick={setIsClick} isOpen={isOpen} setIsOpen={setIsOpen} order={singleOrder} isClick={isClick} />
        <div className="flex items-center justify-end gap-5 lg:gap-7 pt-5 pr-8">
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
              className={`${currentPage === 1 ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"}`}
              type="button"
            >
              <LiaAngleLeftSolid className="text-xl lg:text-2xl font-semibold lg:font-extrabold" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < allOrders?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= allOrders?.length}
              className={`${currentPage * perPage >= allOrders?.length ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"}`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl lg:text-2xl font-semibold lg:font-extrabold" />
            </button>
          </div>
        </div>
        <div className="mt-44">{isLoading && <Loader spinner />}</div>
      </div>
    </div>
  );
};

export default OrderHistoryByAdmin;
