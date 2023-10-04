import axios from "axios";
import Swal from "sweetalert2";
import useOrderByUsers from "../../../../hooks/useOrderByUsers";
import OrderHistoryCard from "./OrderHistoryCard";

const OrderHistory = () => {
  const [orderHistories, refetch] = useOrderByUsers();

  const handelChangeStatus = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want cancel This order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`${import.meta.env.VITE_API_URL}/deliveryStatus/${id}`, {
            delivery_status: "canceled",
          })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Canceled", "Your order has been canceled", "success");
            }
          });
      }
    });
  };

  return (
    <section className="bg-lite py-6 lg:py-10">
      <div className="mb-5 space-y-2">
        <h3 className="text-xl font-medium tracking-wider lg:text-3xl">
          My Order
        </h3>
        <p className="text-sm text-gray-5 lg:leading-7">
          View and edit all your pending delivered <br /> and returned order
          here
        </p>
      </div>
      <div className="rounded-md bg-white">
        {orderHistories?.map((orderHistory) => (
          <OrderHistoryCard
            key={orderHistory._id}
            orderHistory={orderHistory}
            handelChangeStatus={handelChangeStatus}
          />
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;
