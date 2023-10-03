import axios from "axios";
import toast from "react-hot-toast";
import { BiSolidUser } from "react-icons/bi";
import { MdAccessTimeFilled, MdAddIcCall, MdLocationOn } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewReqCard = ({ newReqMedi, refetch }) => {
  const { _id, name, need_days, number, req_medi_name, district, req_medi_quantity, req_date, status } = newReqMedi || {};

  const handleRemoveReqMedi = (id) => {
    Swal.fire({
      title: "Are you Sure?",
      text: "Please add before deleting",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/requestNewMedicine/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Item Removed");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="text-gray-7 bg-white box-shadow rounded-md">
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">
            Medicine Name: <span className="text-gray-4 pl-2 tracking-wide">{req_medi_name}</span>
          </h4>
          <small className="badge-error badge">{status}</small>
        </div>
        <p className="flex items-center gap-2">
          <BiSolidUser />
          <span>{name}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAddIcCall />
          <span>{number}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdLocationOn />
          <span>{district}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAccessTimeFilled />
          Need in: <span className="text-my-accent">{need_days} days</span>
        </p>
        <p>
          Req Time: <span className="text-gray-4 pl-2">{req_date}</span>
        </p>
        <div className="flex justify-between items-center">
          <p>
            Quantity: <span className="text-my-pink">{req_medi_quantity} Box/Pcs/Bottle</span>
          </p>
          <div className="flex gap-3 lg:gap-4">
            <Link title="add" className="my-btn !btn-xs !rounded-sm" to="/dashboard/add-new-medicine">
              Add
            </Link>
            <button onClick={() => handleRemoveReqMedi(_id)} type="button">
              <RiDeleteBinLine title="Delete" className="text-2xl bg-red-500 hover:bg-red-400 transition-colors text-white p-1 rounded-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReqCard;
