import axios from "axios";
import toast from "react-hot-toast";
import { BiSolidUser } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReqCard = ({ singleMedi, refetch }) => {
  const { _id, reqByMedicine_Id, medicine_name, image, request_count, date } =
    singleMedi || {};

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
        axios
          .delete(`${import.meta.env.VITE_API_URL}/requestToStock/${id}`)
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
    <div className=" box-shadow rounded-xl bg-white text-gray-7">
      <figure className="rounded-2xl bg-white">
        <img
          className="fit mx-auto h-48 object-cover md:h-[100px] xl:h-[120px]"
          src={image}
          alt="Medicine"
        />
      </figure>
      <div className="space-y-1 p-3 lg:space-y-2">
        <h4 className="text-center text-lg font-medium">{medicine_name}</h4>
        <p>
          <span className="font-medium text-gray-7">Medi Code: </span>
          <span>{reqByMedicine_Id?.slice(-4)}</span>
        </p>
        <p className="flex items-center gap-2">
          <BiSolidUser />
          <span className="font-medium text-my-accent">{request_count}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAccessTimeFilled />
          <span>{date}</span>
        </p>
        <div className="flex items-center justify-between pt-3">
          <Link
            className="circle-btn !btn-sm !text-xs !font-normal"
            to="/dashboard/medicine-inventory"
          >
            Store
          </Link>
          <button
            onClick={() => handleRemoveReqMedi(_id)}
            className="btn btn-error btn-outline btn-sm rounded-full"
            type="button"
          >
            DEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReqCard;
