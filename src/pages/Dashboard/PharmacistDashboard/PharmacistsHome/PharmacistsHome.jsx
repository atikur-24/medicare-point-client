import axios from "axios";
import { useEffect, useState } from "react";
import pendingImg from "../../../../assets/Dashboard-icons/box.png";
import medicinesImg from "../../../../assets/Dashboard-icons/medicines.png";
import reqMedImg from "../../../../assets/Dashboard-icons/online-pharmacy.png";
import orderImg from "../../../../assets/Dashboard-icons/orderMedicine.png";
import successImg from "../../../../assets/Dashboard-icons/tick.png";

const PharmacistsHome = ({ user }) => {
  const [pharmacistHomeData, setpharmacistHomeData] = useState({});
  // const [loading, setLoading] = useState(false);
  const { medicines, orders, pendingOrders, successOrder, medicineRequest } =
    pharmacistHomeData;

  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token source

    if (user?.email) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/dashboardHomeData/${user.email}`,
          {
            cancelToken: source.token, // Pass the cancel token to the request
          },
        )
        .then((res) => {
          setpharmacistHomeData(res.data);
        })
        .catch((error) => {
          console.error("An error occurred while fetching data:", error);
        });
    }

    // Cleanup function to cancel the request when the component unmounts or when user.email changes
    return () => {
      source.cancel("Data request canceled by cleanup"); // Cancel the request with a message
    };
  }, [user?.email]);

  return (
    <div>
      <div className="mx-2 mt-1 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="flex items-center justify-center">
          <h3 className="text-center text-3xl font-semibold text-my-primary">
            Welcome back, {user?.displayName}
          </h3>
        </div>
        <div className="bg-card flex items-center justify-center gap-5 rounded-md py-3 shadow-md">
          <img
            className="w-28 object-cover py-4"
            src={successImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">{successOrder} Success</h4>
            <p className="text-base">Successful Delivery</p>
          </div>
        </div>
        <div className="bg-card flex items-center justify-center gap-5 rounded-md py-3 shadow-md">
          <img
            className="w-28 object-cover py-4"
            src={pendingImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">{pendingOrders} Pending</h4>
            <p className="text-base">To be deliver soon</p>
          </div>
        </div>
        <div className="bg-card flex items-center justify-center gap-5 rounded-md py-3 shadow-md">
          <img
            className="w-28 object-cover py-4"
            src={orderImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">{orders} Orders</h4>
            <p className="text-base">Total numbers of order</p>
          </div>
        </div>
        <div className="bg-card flex items-center justify-center gap-5 rounded-md py-3 shadow-md">
          <img
            className="w-28 object-cover py-4"
            src={medicinesImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">{medicines} Medicines</h4>
            <p className="text-base">Available Medicines</p>
          </div>
        </div>

        <div className="bg-card flex items-center justify-center gap-5 rounded-md py-3 shadow-md">
          <img
            className="w-28 object-cover py-4"
            src={reqMedImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">{medicineRequest} Request</h4>
            <p className="text-base">Total Requested Medicines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistsHome;
