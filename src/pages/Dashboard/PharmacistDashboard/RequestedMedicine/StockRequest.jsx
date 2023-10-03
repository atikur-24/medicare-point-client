import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../../../../components/Loader";
import useAuth from "../../../../hooks/useAuth";
import ReqCard from "./ReqCard";

const StockRequest = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const orderPerPage = 8;
  const startIndex = currentPage * orderPerPage;
  const endIndex = startIndex + orderPerPage;

  const {
    data: reqMedicine = [],
    isLoading,
    refetch,
  } = useQuery(["reqMedicine"], async () => {
    const res = await axios.get(`http://localhost:5000/requestToStock/${user?.email}`);
    return res.data;
  });

  const PaginationOrder = reqMedicine?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(reqMedicine.length / orderPerPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  return (
    <>
      <div className="my-8 flex items-center gap-3 lg:gap-8 xl:gap-16">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase">Request Medicine</div>
            <div className="stat-value text-my-primary">{reqMedicine?.length}</div>
          </div>
        </div>
        <h3 className="textxl lg:text-3xl font-medium lg:font-semibold tracking-wide text-my-primary uppercase">Request to stock</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
        {PaginationOrder?.map((singleMedi) => (
          <ReqCard key={singleMedi._id} singleMedi={singleMedi} refetch={refetch} />
        ))}
      </div>
      {isLoading && (
        <div className="my-20">
          <Loader spinner />
        </div>
      )}
      {reqMedicine?.length <= 0 && (
        <div className="mt-5 lg:mt-20 bg-slate-3 p-2 px-8 mx-auto text-center w-fit rounded">
          <span className="text-xl lg:text-3xl text-red-400">No Request Found</span>
        </div>
      )}
      <ReactPaginate
        className="flex text-center items-center justify-center my-auto space-x-3 font-semibold py-5 align-middle"
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

export default StockRequest;
