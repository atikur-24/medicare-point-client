/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { useEffect, useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchAllMedicines } from "../../../../Features/Medicines/AllMedicines/medicines";
import Loader from "../../../../components/Loader";

const AllMedicines = () => {
  const [allMedicines, setAllMedicines] = useState([]);
  // pagination
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedMedicine = allMedicines?.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              {paginatedMedicine?.map((medicine, idx) => (
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
        <div className="flex items-center justify-end gap-5 lg:gap-7 pt-5 pr-8">
          {/* Row per page view */}
          <div>
            <label className="mr-2 text-gray-6">Rows Per Page:</label>
            <select
              className="p-1 py-[6px]"
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
          {/* Previous and next button (pagination) */}
          <div className="space-x-3">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`${currentPage === 1 ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"}`}
              type="button"
            >
              <LiaAngleLeftSolid className="text-xl lg:text-3xl font-semibold lg:font-extrabold hover:bg-gray-3" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < allMedicines?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= allMedicines?.length}
              className={`${currentPage * perPage >= allMedicines?.length ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"}`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl lg:text-3xl font-semibold lg:font-extrabold hover:bg-gray-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMedicines;
