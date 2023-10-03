import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert library
import { fetchAllBlogs } from "../../../../Features/Blogs/allBlogs";
import { deleteBlogApi } from "../../../../Features/Blogs/deleteBlog";

const EditArticles = () => {
  const { allBlogs } = useSelector((state) => state.allBlogs);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBlogs());
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
        dispatch(deleteBlogApi(id));
        dispatch(fetchAllBlogs());
      }
    });
  };

  const blogsPerPage = 12;
  const startIndex = currentPage * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const PaginationBlogs = allBlogs?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(allBlogs.length / blogsPerPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  return (
    <div>
      <div className="stats shadow">
        <div className="stat place-items-center space-y-2">
          <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Blogs</div>
          <div className="stat-value text-my-primary">{allBlogs.length || 0}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-8">
        {PaginationBlogs?.map((allBlog) => (
          <div key={allBlog._id} className="grid grid-cols-1 gap-4 justify-center items-center  shadow-sm p-2 border border-gray-3 bg-white box-shadow rounded-2xl">
            <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{allBlog.title}</h2>
            <img src={allBlog.image} alt="img" className="h-32 mx-auto" />
            <p className="text-justify md:h-32">{allBlog.content.slice(0, 100)}...</p>
            <div className="space-x-1 flex justify-center gap-4">
              <Link to={`/dashboard/update-health-articles/${allBlog._id}`}>
                <label className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                  <TiEdit className="text-lg" />
                </label>
              </Link>
              <button type="button" onClick={() => handlerDelete(allBlog._id)} className="btn btn-circle btn-sm bg-red-500 bg-opacity-30 ">
                <RiDeleteBinLine className="text-lg text-red-500" />
              </button>
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

export default EditArticles;
