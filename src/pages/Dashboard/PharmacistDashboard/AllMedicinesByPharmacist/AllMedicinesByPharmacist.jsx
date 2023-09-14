/* eslint-disable no-unsafe-optional-chaining */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
      <h3 className="text-center text-2xl lg:text-3xl my-7 font-semibold tracking-wide">All Medicines</h3>
      <div className="overflow-x-auto">
        <table className="table rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-white font-normal text-base">
            <tr className="">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Av. Qty</th>
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
                <td>{medicine?.brand}</td>
                <td className="space-x-1">
                  <span className="font-medium">৳ {medicine?.discount > 0 ? (medicine?.price - (medicine?.price / 100) * medicine?.discount).toFixed(2) : medicine?.price.toFixed(2)}</span>
                  {medicine?.discount > 0 && <span className="text-gray-4 line-through">{medicine?.price}</span>}
                </td>
                <td className="font-medium">
                  <span className="text-my-pink">{medicine?.available_quantity - medicine?.sellQuantity}</span> / {medicine?.available_quantity}
                </td>

                <td className={`${medicine.status === "approved" && "text-my-accent"} ${medicine.status === "denied" && "text-red-500"} ${medicine.status === "pending" && "text-yellow-500"} capitalize font-medium`}>
                  {medicine?.status}
                </td>
                <td className="flex items-center gap-3 mt-4">
                  <Link to={`/dashboard/update-medicine/${medicine?._id}`}>
                    <TiEdit className="text-2xl p-1 text-white bg-my-primary hover:bg-my-accent transition-colors rounded-sm" />
                  </Link>
                  <button type="button" onClick={() => handleDeleteMedicine(medicine?._id)}>
                    <RiDeleteBinLine className="text-2xl bg-red-500 hover:bg-red-400 transition-colors text-white p-1 rounded-sm" />
                  </button>
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
