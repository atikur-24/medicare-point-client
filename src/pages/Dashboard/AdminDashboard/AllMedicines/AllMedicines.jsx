/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import { fetchAllMedicines } from "../../../../Features/Medicines/AllMedicines/medicines";
import Loader from "../../../../components/Loader";

const AllMedicines = () => {
  const [allMedicines, setAllMedicines] = useState([]);

  const { isLoading, medicines } = useSelector((state) => state.medicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMedicines());
  }, [dispatch]);

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

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You Want Delete This Medicine",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/medicines/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            dispatch(fetchAllMedicines());
            Swal.fire("Deleted!", "This Medicine Deleted success fully", "success");
          }
        });
      }
    });
  };

  const approvedMedicines = medicines.filter((medicine) => medicine?.status === "approved");
  const pendingMedicines = medicines.filter((medicine) => medicine?.status === "pending");
  const deniedMedicines = medicines.filter((medicine) => medicine?.status === "denied");

  return (
    <div>
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

      <div className=" mb-20 px-5">
        <table className="overflow-x-auto table rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-white font-normal text-base">
            <tr className="">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Pharmacist Info</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* rows */}

          {!isLoading && (
            <tbody>
              {allMedicines?.map((medicine, idx) => (
                <tr key={medicine?._id} className="border-b border-slate-3">
                  <td>{idx + 1}</td>
                  <td>
                    <img className="mask rounded w-14 h-14" src={medicine?.image} alt="medicine" />
                  </td>
                  <td className="font-medium">{medicine?.medicine_name}</td>
                  <td className="flex flex-col">
                    <span>{medicine?.pharmacist_name}</span>
                    <span>{medicine?.pharmacist_email}</span>
                  </td>

                  <td className={`${medicine.status === "approved" && "text-my-accent"} ${medicine.status === "denied" && "text-red-500"} ${medicine.status === "pending" && "text-yellow-500"} capitalize font-medium`}>{medicine?.status}</td>
                  <td className="space-x-2">
                    <button type="button" onClick={() => handelDelete(medicine?._id)} className=" bg-red-500 rounded-full bg-opacity-30 ">
                      <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
                    </button>
                    <Link to={`/dashboard/medicine-detail/${medicine?._id}`}>
                      <button type="button" className="relative group">
                        <TbListDetails className="text-3xl p-1 rounded-full text-[white] bg-my-primary" />
                        <p className="absolute hidden group-hover:block whitespace-nowrap ">Detail</p>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {isLoading && (
          <div className="mt-44">
            <Loader spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMedicines;
