import axios from "axios";
import { useEffect, useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllData } from "../../../../Features/AllMedicines/allData";
import Loader from "../../../../components/Loader";
import AllPharmacistRow from "./AllPharmacistRow";

const AllPharmacists = () => {
  const api = "all-pharmacist/Pharmacist";
  const { allData: allPharmacist, isLoading } = useSelector((state) => state.allData);

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData(api));
  }, [dispatch]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you Want delete This user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/delete-user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            dispatch(fetchAllData(api));
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const paginatedUsers = allPharmacist?.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pharmacists</div>
            <div className="stat-value text-my-primary">{allPharmacist?.length || 0}</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-sm">
            <tr className=" rounded-t-md">
              <th className="rounded-tl-md">#</th>
              <th>Photo</th>
              <th>Pharmacist</th>
              <th>Mobile</th>
              <th>Pharmacy</th>
              <th className="rounded-tr-md">Actions</th>
            </tr>
          </thead>

          {!isLoading && (
            <tbody>
              {paginatedUsers?.map((user, index) => (
                <AllPharmacistRow handelDelete={handelDelete} key={user?._id} index={index} user={user} />
              ))}
            </tbody>
          )}
        </table>
        <div className="flex items-center justify-end gap-5 lg:gap-7 pt-5">
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
              <option value={5}>5</option>
              <option value={8}>8</option>
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
              <LiaAngleLeftSolid className="text-xl lg:text-2xl font-semibold lg:font-extrabold" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < allPharmacist?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= allPharmacist?.length}
              className={`${currentPage * perPage >= allPharmacist?.length ? "cursor-not-allowed bg-gray-300" : "hover:bg-gray-200 bg-white"}`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl lg:text-2xl font-semibold lg:font-extrabold" />
            </button>
          </div>
        </div>
        <div className="mt-44">{isLoading && <Loader spinner />}</div>
      </div>
    </div>
  );
};

export default AllPharmacists;
