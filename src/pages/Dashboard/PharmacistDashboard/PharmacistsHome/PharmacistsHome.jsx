import pendingImg from "../../../../assets/Dashboard-icons/box.png";
import medicinesImg from "../../../../assets/Dashboard-icons/medicines.png";
import reqMedImg from "../../../../assets/Dashboard-icons/online-pharmacy.png";
import orderImg from "../../../../assets/Dashboard-icons/orderMedicine.png";
import successImg from "../../../../assets/Dashboard-icons/tick.png";

const PharmacistsHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 mt-1">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl font-semibold text-my-primary">
            Welcome back, AK
          </h3>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={successImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Success</h4>
            <p className="text-base">Successful Delivery</p>
          </div>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={pendingImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">50 Pending</h4>
            <p className="text-base">To be deliver soon</p>
          </div>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={orderImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Orders</h4>
            <p className="text-base">Total numbers of order</p>
          </div>
        </div>
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={medicinesImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Medicines</h4>
            <p className="text-base">Available Medicines</p>
          </div>
        </div>

        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={reqMedImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">12 Request</h4>
            <p className="text-base">Total Requested Medicines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistsHome;
