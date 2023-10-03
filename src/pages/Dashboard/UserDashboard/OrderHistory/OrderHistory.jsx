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
        axios.patch(`http://localhost:5000/deliveryStatus/${id}`, { delivery_status: "canceled" }).then((res) => {
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
      <div className="space-y-2 mb-5">
        <h3 className="text-xl lg:text-3xl tracking-wider font-medium">My Order</h3>
        <p className="text-gray-5 lg:leading-7 text-sm">
          View and edit all your pending delivered <br /> and returned order here
        </p>
      </div>
      <div className="bg-white rounded-md">
        {orderHistories?.map((orderHistory) => (
          <OrderHistoryCard key={orderHistory._id} orderHistory={orderHistory} handelChangeStatus={handelChangeStatus} />
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;
