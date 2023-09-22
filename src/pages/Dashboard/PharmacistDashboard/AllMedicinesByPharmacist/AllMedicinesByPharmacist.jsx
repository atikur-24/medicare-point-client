/* eslint-disable no-unsafe-optional-chaining */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const AllMedicinesByPharmacist = () => {
  const { user, loading } = useAuth();
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [allMedicines, setAllMedicines] = useState([]);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const { data: medicines = [], refetch } = useQuery({
    queryKey: ["medicines", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/pharmacistMedicines?email=${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    setAllMedicines(medicines);
  }, [medicines]);

  const handelFiltering = (status) => {
    if (status) {
      const filterMedicines = medicines.filter((medicine) => medicine?.status === status);
      setAllMedicines(filterMedicines);
    } else {
      setAllMedicines(medicines);
    }
  };

  const paginatedMedicine = allMedicines.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  const approvedMedicines = medicines.filter((medicine) => medicine?.status === "approved");
  const pendingMedicines = medicines.filter((medicine) => medicine?.status === "pending");
  const deniedMedicines = medicines.filter((medicine) => medicine?.status === "denied");

  return (
    <div className="">
      <h3 className="text-center text-2xl lg:text-3xl my-7 font-semibold tracking-wide">Manage All Medicines</h3>
      <div className="flex px-6 mb-8">
        <div className="stats shadow">
          <div onClick={() => handelFiltering()} className="stat place-items-center space-y-2 cursor-pointer">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">All Medicines</div>
            <div className="stat-value text-my-primary">{medicines?.length}</div>
          </div>

          <div onClick={() => handelFiltering("approved")} className="stat place-items-center space-y-2 cursor-pointer">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Approved Medicines</div>
            <div className="stat-value text-my-accent">{approvedMedicines?.length}</div>
          </div>

          <div onClick={() => handelFiltering("pending")} className="stat place-items-center space-y-2 cursor-pointer">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pending Medicines</div>
            <div className="stat-value text-yellow-500">{pendingMedicines?.length}</div>
          </div>

          <div onClick={() => handelFiltering("denied")} className="stat place-items-center space-y-2 cursor-pointer">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Denied Medicines</div>
            <div className="stat-value text-red-500">{deniedMedicines?.length}</div>
          </div>
        </div>
      </div>
      <div>
        <label className="mr-2">Rows per page:</label>
        <select
          className="border border-gray-300 text-my-primary rounded-md px-2 py-1"
          value={perPage}
          onChange={(e) => {
            setCurrentPage(1);
            setPerPage(parseInt(e.target.value, 10));
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-white font-normal text-base">
            <tr className="">
              <th>ID</th>
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
            {paginatedMedicine?.map((medicine) => (
              <tr key={medicine?._id} className="border-b border-slate-3">
                <td>{medicine?._id?.slice(-4)}</td>
                <td>
                  <img className="mask rounded w-14 h-14" src={medicine?.image} alt="medicine" />
                </td>
                <td className="font-medium">{medicine?.medicine_name}</td>
                <td className="font-medium">
                  <span className="text-my-pink">{medicine?.available_quantity - medicine?.sellQuantity}</span> / {medicine?.available_quantity}
                </td>
                <td className="font-semibold"> {medicine?.available_quantity === medicine?.sellQuantity ? <span className="text-red-500">Out of Stock</span> : <span className="text-my-primary">In Stock</span>}</td>

                <td>
                  <span className={`capitalize badge ${medicine?.status === "approved" ? "badge-success" : ""} ${medicine?.status === "pending" ? "badge-warning" : ""} ${medicine?.status === "denied" ? "badge-error" : ""}`}>{medicine?.status}</span>
                </td>
                <td className="">
                  <div className="flex gap-3">
                    <Link to={`/dashboard/medicine-details/${medicine?._id}`}>
                      <HiOutlineEye title="View Details" className="text-2xl p-1 text-white bg-slate-6 transition-colors rounded-sm" />
                    </Link>
                    <Link to={`/</div>dashboard/medicine-inventory/${medicine?._id}`}>
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
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className={`mr-2 ${currentPage === 1 ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"} py-2 px-4 rounded-md border border-gray-300`}
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className={`${currentPage * perPage >= medicines.length ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"} py-2 px-4 rounded-md border border-gray-300`}
          onClick={() => {
            if (currentPage * perPage < medicines.length) {
              handlePageChange(currentPage + 1);
            }
          }}
          disabled={currentPage * perPage >= medicines.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllMedicinesByPharmacist;
