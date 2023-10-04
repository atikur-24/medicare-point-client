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
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/requestNewMedicine`,
    );
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
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Request New Medicine
            </div>
            <div className="stat-value text-my-primary">
              {newReqMedicine?.length}
            </div>
          </div>
        </div>
        <h3 className="textxl font-medium uppercase tracking-wide text-my-primary lg:text-3xl lg:font-semibold">
          New Medicine requests
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-3 md:gap-5 lg:grid-cols-2">
        {PaginationReqMedi?.map((newReqMedi) => (
          <NewReqCard
            key={newReqMedi._id}
            newReqMedi={newReqMedi}
            refetch={refetch}
          />
        ))}
      </div>

      {isLoading && (
        <div className="my-20">
          <Loader spinner />
        </div>
      )}
      {newReqMedicine?.length <= 0 && (
        <div className="mx-auto mt-5 w-fit rounded bg-slate-3 p-2 px-8 text-center lg:mt-20">
          <span className="text-xl text-red-400 lg:text-3xl">
            No Request Found
          </span>
        </div>
      )}
      <ReactPaginate
        className="my-auto flex items-center justify-center space-x-3 py-5 pt-6 text-center align-middle font-semibold"
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
