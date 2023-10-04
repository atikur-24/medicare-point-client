/* eslint-disable no-unsafe-optional-chaining */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../../components/Loader";
import useAuth from "../../../../hooks/useAuth";

const AllMedicinesByPharmacist = () => {
  const { user, loading } = useAuth();
  const [perPage, setPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/pharmacistMedicines?email=${
          user?.email
        }`,
      );
      return res.data;
    },
  });

  let filteredOrder = medicines;
  if (filterStatus !== "All Medicine") {
    filteredOrder = medicines.filter((order) =>
      order.status.toLowerCase().includes(filterStatus.toLowerCase()),
    );
  }
  const paginatedMedicine = filteredOrder?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDeleteMedicine = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Permanent deleted medicine",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete It",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/medicines/${_id}`)
          .then((res) => {
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

  const approvedMedicines = medicines.filter(
    (medicine) => medicine?.status === "approved",
  );
  const pendingMedicines = medicines.filter(
    (medicine) => medicine?.status === "pending",
  );
  const deniedMedicines = medicines.filter(
    (medicine) => medicine?.status === "denied",
  );

  return (
    <div className="pb-10">
      <div className="mb-8 flex">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              All Medicines
            </div>
            <div className="stat-value text-gray-7">{medicines?.length}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Approved Medicines
            </div>
            <div className="stat-value text-my-primary">
              {approvedMedicines?.length}
            </div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Pending Medicines
            </div>
            <div className="stat-value text-yellow-500">
              {pendingMedicines?.length}
            </div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Denied Medicines
            </div>
            <div className="stat-value text-red-500">
              {deniedMedicines?.length}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-end">
        <div className="flex items-center gap-4 ">
          <h2 className="w-[120px]">Filter by</h2>
          <select
            onChange={(e) => {
              setFilterStatus(e?.target?.value);
            }}
            className="select select-bordered w-full max-w-xs outline-none hover:outline-none focus:!outline-none"
          >
            <option selected>All Medicine</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Denied</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table !rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-base font-normal text-white">
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
                  <img
                    className="mask h-14 w-14 rounded"
                    src={medicine?.image}
                    alt="medicine"
                  />
                </td>
                <td className="font-medium">{medicine?.medicine_name}</td>
                <td className="font-medium">
                  <span className="text-my-pink">
                    {medicine?.available_quantity - medicine?.sellQuantity}
                  </span>{" "}
                  / {medicine?.available_quantity}
                </td>
                <td className="font-semibold">
                  {" "}
                  {medicine?.available_quantity === medicine?.sellQuantity ? (
                    <span className="text-red-500">Out of Stock</span>
                  ) : (
                    <span className="text-my-primary">In Stock</span>
                  )}
                </td>

                <td>
                  <span
                    className={`badge capitalize ${
                      medicine?.status === "approved" ? "text-success" : ""
                    } ${medicine?.status === "pending" ? "text-warning" : ""} ${
                      medicine?.status === "denied" ? "text-error" : ""
                    }`}
                  >
                    {medicine?.status}
                  </span>
                </td>
                <td className="">
                  <div className="flex gap-3">
                    <Link to={`/dashboard/medicine-details/${medicine?._id}`}>
                      <HiOutlineEye
                        title="View Details"
                        className="rounded-sm bg-slate-6 p-1 text-2xl text-white transition-colors"
                      />
                    </Link>
                    <Link to={`/dashboard/update-medicine/${medicine?._id}`}>
                      <TiEdit
                        title="Update"
                        className="rounded-sm bg-my-primary p-1 text-2xl text-white transition-colors hover:bg-my-accent"
                      />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteMedicine(medicine?._id)}
                    >
                      <RiDeleteBinLine
                        title="Delete"
                        className="rounded-sm bg-red-500 p-1 text-2xl text-white transition-colors hover:bg-red-400"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end gap-5 pr-8 pt-5 lg:gap-7">
          {/* Row per page view */}
          <div>
            <label className="mr-2 text-gray-6">Rows Per Page:</label>
            <select
              className="p-1"
              value={perPage}
              onChange={(e) => {
                setCurrentPage(1);
                setPerPage(parseInt(e.target.value, 10));
              }}
            >
              <option value={8}>8</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          {/* Previous and next button (pagination) */}
          <div className="space-x-3">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleLeftSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < medicines?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= medicines?.length}
              className={`${
                currentPage * perPage >= medicines?.length
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="mt-10">
          <Loader spinner />
        </div>
      )}
    </div>
  );
};

export default AllMedicinesByPharmacist;
