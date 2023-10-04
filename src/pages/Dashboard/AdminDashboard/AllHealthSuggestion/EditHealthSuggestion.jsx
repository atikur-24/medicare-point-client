import { useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchAllHealthTips } from "../../../../Features/HealthTips/allHealthTips";
import { deleteHealthTipsApi } from "../../../../Features/HealthTips/deleteHealthTips";

const EditHealthSuggestion = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { allHealthTips } = useSelector((state) => state.allHealthTips);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllHealthTips());
  }, [dispatch]);

  const handlerDelete = (id) => {
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
        dispatch(deleteHealthTipsApi(id));
        dispatch(fetchAllHealthTips());
      }
    });
  };

  const HealthTips = 12;
  const startIndex = currentPage * HealthTips;
  const endIndex = startIndex + HealthTips;
  const PaginationHealthTips = allHealthTips?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(allHealthTips.length / HealthTips);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  return (
    <>
      <div className="my-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Total Health Tips
            </div>
            <div className="stat-value text-my-primary">
              {allHealthTips.length || 0}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10  grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {PaginationHealthTips?.map((healthTip) => (
          <div
            key={healthTip._id}
            className="box-shadow grid grid-cols-1 items-center justify-center gap-4 rounded-2xl border border-gray-3 bg-white p-4"
          >
            <h2 className="items-center gap-3 text-center text-[16px] font-medium tracking-wide">
              {healthTip.name}
            </h2>
            <img src={healthTip.image} alt="img" className="mx-auto h-32" />
            <p className="text-justify md:h-32">
              {HtmlParser(healthTip.cause.slice(0, 100))}...
            </p>
            <div className="flex justify-center gap-4 space-x-1">
              <Link to={`/dashboard/update-health-tips/${healthTip._id}`}>
                <label className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                  <TiEdit className="text-lg" />
                </label>
              </Link>
              <button
                type="button"
                onClick={() => handlerDelete(healthTip._id)}
                className="btn btn-circle btn-sm rounded-full bg-red-500/30 "
              >
                <RiDeleteBinLine className="p-1  text-3xl text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        className="my-auto flex items-center justify-center space-x-3 pb-5 text-center  align-middle font-semibold"
        activeClassName="bg-my-primary text-white rounded-full px-4 py-2"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
      />
    </>
  );
};

export default EditHealthSuggestion;
