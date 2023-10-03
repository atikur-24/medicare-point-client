import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../../../../components/Loader";
import NewReqCard from "./NewReqCard";

const NewMedicineRequest = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const orderPerPage = 4;
  const startIndex = currentPage * orderPerPage;
  const endIndex = startIndex + orderPerPage;

  const {
    data: newReqMedicine = [],
    isLoading,
    refetch,
  } = useQuery(["reqMedicine"], async () => {
    const res = await axios.get("http://localhost:5000/requestNewMedicine");
    return res.data;
  });

  const PaginationReqMedi = newReqMedicine?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(newReqMedicine.length / orderPerPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  return (
    <div className="mb-10">
      <div className="my-8 flex items-center gap-3 lg:gap-8 xl:gap-16">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Request New Medicine</div>
            <div className="stat-value text-my-primary">{newReqMedicine?.length}</div>
          </div>
        </div>
        <h3 className="textxl lg:text-3xl font-medium lg:font-semibold tracking-wide text-my-primary uppercase">New Medicine requests</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5">
        {PaginationReqMedi?.map((newReqMedi) => (
          <NewReqCard key={newReqMedi._id} newReqMedi={newReqMedi} refetch={refetch} />
        ))}
      </div>

      {isLoading && (
        <div className="my-20">
          <Loader spinner />
        </div>
      )}
      {newReqMedicine?.length <= 0 && (
        <div className="mt-5 lg:mt-20 bg-slate-3 p-2 px-8 mx-auto text-center w-fit rounded">
          <span className="text-xl lg:text-3xl text-red-400">No Request Found</span>
        </div>
      )}
      <ReactPaginate
        className="flex text-center items-center justify-center my-auto space-x-3 font-semibold py-5 pt-6 align-middle"
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

export default NewMedicineRequest;
