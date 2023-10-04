import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../../../../components/Loader";
import useOrderByPharmacist from "../../../../hooks/useOrderByPharmacist";
import NewOrderCard from "./NewOrderCard";

const NewOrders = () => {
  const [orders, isLoading, refetch] = useOrderByPharmacist();
  const [currentPage, setCurrentPage] = useState(0);
  const orderPerPage = 3;
  const startIndex = currentPage * orderPerPage;
  const endIndex = startIndex + orderPerPage;
  const PaginationOrder = orders?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(orders.length / orderPerPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  return (
    <div className="pb-10">
      <div className="my-8 flex items-start gap-3 lg:gap-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              New orders
            </div>
            <div className="stat-value text-my-primary">
              {orders.length || 0}
            </div>
          </div>
        </div>
        <h3 className="w-7/12 text-start text-sm text-my-primary lg:w-8/12 lg:text-justify lg:text-base">
          To ensure timely delivery and customer satisfaction, we kindly request
          your prompt attention to this matter. Please response{" "}
          <span className="bg-my-primary px-1 text-white">confirm</span> and
          prepare the orders for packing as soon as possible.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-5">
        {isLoading && <Loader spinner />}
        {PaginationOrder?.map((order) => (
          <NewOrderCard key={order._id} order={order} refetch={refetch} />
        ))}
      </div>
      {orders?.length <= 0 && (
        <div className="mx-auto mt-5 w-fit rounded bg-slate-3 p-2 px-8 text-center lg:mt-20">
          <span className="text-xl text-red-400 lg:text-3xl">
            No New Order Found
          </span>
        </div>
      )}
      <ReactPaginate
        className="my-auto flex items-center justify-center space-x-3 py-5 text-center align-middle font-semibold"
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

export default NewOrders;
