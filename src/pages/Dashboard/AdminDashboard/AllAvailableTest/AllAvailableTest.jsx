import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllLabTests } from "../../../../Features/AllLabTests/allLabTest";
import { deleteLabTestApi } from "../../../../Features/AllLabTests/deleteLabTest";
import Loader from "../../../../components/Loader";
import AddLabCard from "./AddLabCard";
import UpdateLabTest from "./UpdateLabTest";

// Todo
const AllAvailableTest = () => {
  const { isLoading, allLabTest } = useSelector((state) => state.allLabTest);
  const [currentPage, setCurrentPage] = useState(0);
  const [singleId, setSingleId] = useState("");
  const [x, setX] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLabTests());
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
        dispatch(deleteLabTestApi(id)).then(() => {
          dispatch(fetchAllLabTests());
        });
      }
    });
  };

  const LabTestPerPage = 12;
  const startIndex = currentPage * LabTestPerPage;
  const endIndex = startIndex + LabTestPerPage;
  const PaginationLabTest = allLabTest?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(allLabTest.length / LabTestPerPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] ">
        <Loader spinner />
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className=" mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Lab Test</div>
            <div className="stat-value text-my-primary">{allLabTest.length || 0}</div>
          </div>
        </div>
      </div>
      {singleId && <UpdateLabTest x={x} setX={setX} id={singleId} />}

      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-5 mb-10">
        {PaginationLabTest?.map((category) => (
          <AddLabCard key={category._id} setSingleId={setSingleId} category={category} handlerDelete={handlerDelete} />
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

export default AllAvailableTest;
