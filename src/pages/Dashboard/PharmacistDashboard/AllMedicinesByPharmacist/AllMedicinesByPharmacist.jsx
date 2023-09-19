/* eslint-disable no-unsafe-optional-chaining */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const AllMedicinesByPharmacist = () => {
  const { user, loading } = useAuth();

  const { data: medicines = [], refetch } = useQuery({
    queryKey: ["medicines", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/phamacistMedicines?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDeleteMedicine = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Permanent deleted medicine",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16b4ac",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete It",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/medicines/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your Medicine has been deleted.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <h3 className="text-center text-2xl lg:text-3xl my-7 font-semibold tracking-wide">Manage All Medicines</h3>
      <div className="overflow-x-auto">
        <table className="table rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-white font-normal text-base">
            <tr className="">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Av. Qty</th>
              <th>Availability</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {medicines?.map((medicine, idx) => (
              <tr key={medicine?._id} className="border-b border-slate-3">
                <td>{idx + 1}</td>
                <td>
                  <img className="mask rounded w-14 h-14" src={medicine?.image} alt="medicine" />
                </td>
                <td className="font-medium">{medicine?.medicine_name}</td>
                <td className="font-medium">
                  <span className="text-my-pink">{medicine?.available_quantity - medicine?.sellQuantity}</span> / {medicine?.available_quantity}
                </td>
                <td className="font-semibold"> {medicine?.available_quantity === medicine?.sellQuantity ? <span className="text-red-500">Out of Stock</span> : <span className="text-my-primary">In Stock</span>}</td>

                <td>
                  <span className={`capitalize ${medicine?.status === "approved" ? "badge badge-success" : ""} ${medicine?.status === "pending" ? "badge-warning" : ""} ${medicine?.status === "denied" ? "badge badge-error" : ""}`}>
                    {medicine?.status}
                  </span>
                </td>
                <td className="">
                  <div className="flex gap-3">
                    <Link to={`/dashboard/medicine-details/${medicine?._id}`}>
                      <HiOutlineEye title="View Details" className="text-2xl p-1 text-white bg-slate-6 transition-colors rounded-sm" />
                    </Link>
                    <Link to={`/dashboard/update-medicine/${medicine?._id}`}>
                      <TiEdit title="Update" className="text-2xl p-1 text-white bg-my-primary hover:bg-my-accent transition-colors rounded-sm" />
                    </Link>
                    <button type="button" onClick={() => handleDeleteMedicine(medicine?._id)}>
                      <RiDeleteBinLine title="Delete" className="text-2xl bg-red-500 hover:bg-red-400 transition-colors text-white p-1 rounded-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMedicinesByPharmacist;
