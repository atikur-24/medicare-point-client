import axios from "axios";
import toast from "react-hot-toast";
import { BiSolidUser } from "react-icons/bi";
import { MdAccessTimeFilled, MdAddIcCall, MdLocationOn } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewReqCard = ({ newReqMedi, refetch }) => {
  const {
    _id,
    name,
    need_days,
    number,
    req_medi_name,
    district,
    req_medi_quantity,
    req_date,
    status,
  } = newReqMedi || {};

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
        axios
          .delete(`${import.meta.env.VITE_API_URL}/requestNewMedicine/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("Item Removed");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="box-shadow rounded-md bg-white text-gray-7">
      <div className="space-y-1 p-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">
            Medicine Name:{" "}
            <span className="pl-2 tracking-wide text-gray-4">
              {req_medi_name}
            </span>
          </h4>
          <small className="badge badge-error">{status}</small>
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
          Req Time: <span className="pl-2 text-gray-4">{req_date}</span>
        </p>
        <div className="flex items-center justify-between">
          <p>
            Quantity:{" "}
            <span className="text-my-pink">
              {req_medi_quantity} Box/Pcs/Bottle
            </span>
          </p>
          <div className="flex gap-3 lg:gap-4">
            <Link
              title="add"
              className="my-btn !btn-xs !rounded-sm"
              to="/dashboard/add-new-medicine"
            >
              Add
            </Link>
            <button onClick={() => handleRemoveReqMedi(_id)} type="button">
              <RiDeleteBinLine
                title="Delete"
                className="rounded-sm bg-red-500 p-1 text-2xl text-white transition-colors hover:bg-red-400"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReqCard;
