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
  //   const a = useSelector((state) => state.allPrescription);
  useEffect(() => {
    axios.get("http://localhost:5000/prescriptions").then((res) => setAllData(res.data));
  }, [isDelete]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
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

  const prescriptionParpage = 9;
  const startIndex = currentPage * prescriptionParpage;
  const endIndex = startIndex + prescriptionParpage;
  const PaginationPrescription = allData?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(allData.length / prescriptionParpage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

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
            <img src={img} alt="" />
          </div>
        </div>
      </dialog>

      <div className="mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Receive Prescription</div>
            <div className="stat-value text-my-primary">{allData.length || 0}</div>
          </div>
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
                <p className="capitalize">Status: {p?.status}</p>
              </div>
              <div className="flex justify-between items-center">
                <Link disabled={p.status === "success"} className={`my-btn-outline `} to={`/dashboard/prescriptions/${p?.email}?id=${p._id}`} type="button">
                  Upload Card
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
