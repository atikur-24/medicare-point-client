import doctorImg from "../../../../assets/Dashboard-icons/doctor.png";
import pharmacyImg from "../../../../assets/Dashboard-icons/drugstore.png";
import medicinesImg from "../../../../assets/Dashboard-icons/medicines.png";
import pharmacistImg from "../../../../assets/Dashboard-icons/pharmacist.png";
import testImg from "../../../../assets/Dashboard-icons/result.png";
import usersImg from "../../../../assets/Dashboard-icons/users.png";

const AdminHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 mt-5">
        <div className="rounded-md shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={usersImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Users</h4>
            <p className="text-base">All Registered Users</p>
          </div>
        </div>
        <div className="rounded-md hover:shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={pharmacyImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Pharmacy</h4>
            <p className="text-base">All Registered Pharmacy</p>
          </div>
        </div>
        <div className="rounded-md hover:shadow-md bg-card py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={doctorImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Doctors</h4>
            <p className="text-base">Available Doctors</p>
          </div>
        </div>
        <div className="rounded-md shadow-xl py-3 flex items-center justify-center gap-5">
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
        <div className="rounded-md shadow-xl py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={testImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Lab Tests</h4>
            <p className="text-base">Available Lab Tests</p>
          </div>
        </div>
        <div className="rounded-md shadow-xl py-3 flex items-center justify-center gap-5">
          <img
            className="w-28 py-4 object-cover"
            src={pharmacistImg}
            alt="pharmacyImg"
          />
          <div>
            <h4 className="text-2xl">125 Pharmacists</h4>
            <p className="text-base">Available Pharmacists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
