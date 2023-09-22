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
  const { medicines, orders, pendingOrders, successOrder, medicineRequest } = pharmacistHomeData;

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:5000/dashboardHomeData/${user.email}`).then((res) => {
        setpharmacistHomeData(res.data);
      });
    }
  }, [user?.email]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 mt-1">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl font-semibold text-my-primary text-center">Welcome back, {user?.displayName}</h3>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={successImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">{successOrder} Success</h4>
            <p className="text-base">Successful Delivery</p>
          </div>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={pendingImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">{pendingOrders} Pending</h4>
            <p className="text-base">To be deliver soon</p>
          </div>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={orderImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">{orders} Orders</h4>
            <p className="text-base">Total numbers of order</p>
          </div>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={medicinesImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">{medicines} Medicines</h4>
            <p className="text-base">Available Medicines</p>
          </div>
        </div>

        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={reqMedImg} alt="pharmacyImg" />
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
