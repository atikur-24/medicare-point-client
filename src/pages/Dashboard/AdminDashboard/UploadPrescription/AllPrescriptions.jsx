import axios from "axios";
import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deletePrescriptionApi } from "../../../../Features/UploadPrescription/deletePrescription";

const AllPrescriptions = () => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [isDelete, setDelete] = useState(0);
  const [img, setImg] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  let filteredPrescription = allData;

  if (filterStatus !== "All Prescription") {
    filteredPrescription = allData.filter((data) => data?.status?.toLowerCase().includes(filterStatus?.toLowerCase()));
  }

  useEffect(() => {
    axios.get("http://localhost:5000/prescriptions").then((res) => setAllData(res.data));
  }, [isDelete]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePrescriptionApi(id)).then((res) => {
          if (res.payload?.deletedCount > 0) {
            setDelete(isDelete + 1);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const prescriptionParpage = 12;
  const startIndex = currentPage * prescriptionParpage;
  const endIndex = startIndex + prescriptionParpage;
  const PaginationPrescription = filteredPrescription?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(allData.length / prescriptionParpage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  const totalSuccess = allData.filter((admin) => admin?.status === "success");
  const PendingSuccess = allData.filter((admin) => admin?.status === "pending");

  return (
    <div className="pb-10">
      {/* prescription modal  */}
      <dialog id="my_modal_show_prescription" className="modal">
        <div className="modal-box w-auto max-w-5xl">
          <form method="dialog" className="space-y-2">
            <button type="submit" className="btn btn-sm btn-circle btn-ghost bg-red-500 hover:bg-red-400 text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <img src={img} alt="prescription" />
          </div>
        </div>
      </dialog>

      <div className="mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Received Prescription</div>
            <div className="stat-value">{allData?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Complete Prescription</div>
            <div className="stat-value text-my-primary">{totalSuccess?.length || 0}</div>
          </div>

          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pending Prescription</div>
            <div className="stat-value text-yellow-500">{PendingSuccess?.length || 0}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-4 ">
          <h2 className="w-[120px]">Filter by</h2>
          <select
            onChange={(e) => {
              setFilterStatus(e?.target?.value);
            }}
            className="select outline-none hover:outline-none focus:!outline-none select-bordered w-full max-w-xs"
          >
            <option selected>All Prescription</option>
            <option>Success</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 mb-10">
        {PaginationPrescription?.map((p) => (
          <div key={p?._id}>
            <div className="border border-gray-3 bg-white rounded-2xl p-4 space-y-4">
              <button
                className="w-full"
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_show_prescription").showModal();
                  setImg(p.prescription);
                }}
              >
                <figure className="w-full">
                  <img className="h-64  w-full object-cover" src={p?.prescription} alt="" />
                </figure>
              </button>
              <div className="space-y-1">
                <h2 className="text-sm">{p.patientName}</h2>
                <h2 className="text-base inline-flex items-center gap-2">
                  <HiOutlineMail />
                  <span>{p.email}</span>
                </h2>
                <h2 className="text-base inline-flex items-center gap-2">
                  <BiTimeFive />
                  {p.date}
                </h2>
                <p className="capitalize">
                  Status: <span className={`${p?.status === "success" ? "text-my-primary" : "text-my-pink"} badge`}>{p?.status}</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link disabled={p.status === "success"} className={`my-btn-outline `} to={`/dashboard/prescriptions/${p?.email}?id=${p._id}`} type="button">
                  Add Medicine
                </Link>

                <button onClick={() => handleDelete(p._id)} type="button" className=" bg-red-500 rounded-full bg-opacity-30 ">
                  <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        className="flex text-center items-center justify-center my-auto space-x-3 font-semibold  pb-5 align-middle"
        activeClassName="bg-my-primary text-white rounded-full px-4 py-2"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
      />
    </div>
  );
};

export default AllPrescriptions;
