import axios from "axios";
import toast from "react-hot-toast";
import { BiSolidUser } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReqCard = ({ singleMedi, refetch }) => {
  const { _id, reqByMedicine_Id, medicine_name, image, request_count, date } = singleMedi || {};

  const handleRemoveReqMedi = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/requestToStock/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Item Removed");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className=" text-gray-7 bg-white box-shadow rounded-xl">
      <figure className="bg-white rounded-2xl">
        <img className="h-48 md:h-[100px] xl:h-[120px] fit object-cover mx-auto" src={image} alt="Medicine" />
      </figure>
      <div className="p-3 space-y-1 lg:space-y-2">
        <h4 className="text-lg font-medium text-center">{medicine_name}</h4>
        <p>
          <span className="text-gray-7 font-medium">Medi Code: </span>
          <span>{reqByMedicine_Id?.slice(-4)}</span>
        </p>
        <p className="flex items-center gap-2">
          <BiSolidUser />
          <span className="text-my-accent font-medium">{request_count}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAccessTimeFilled />
          <span>{date}</span>
        </p>
        <div className="flex items-center justify-between pt-3">
          <Link className="circle-btn !font-normal !text-xs !btn-sm" to="/dashboard/medicine-inventory">
            Store
          </Link>
          <button onClick={() => handleRemoveReqMedi(_id)} className="btn-sm btn-outline btn rounded-full btn-error" type="button">
            DEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReqCard;
