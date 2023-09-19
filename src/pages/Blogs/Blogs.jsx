import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../Features/Blogs/allBlogs";
import blogImage from "../../assets/Blog/blog.webp";
import Loader from "../../components/Loader";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";
import Blog from "./Blog";
import "./Blog.css";

const Blogs = () => {
  const { isLoading, allBlogs: blogs } = useSelector((state) => state.allBlogs);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Change this to your desired number of items per page

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  // Function to handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage?.selected);
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and paginate the blogs based on the current page
  const paginatedBlogs = blogs?.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  return (
    <div className="bg-white">
      <WebSiteTitle title="Blogs" />
      <div>
        <img className="w-full" src={blogImage} alt="" />
      </div>
      <section className="my-container">
        {isLoading ? (
          <Loader spinner />
        ) : (
          <div className="">
            {paginatedBlogs?.map((blog) => (
              <Blog range={300} blog={blog} key={blog._id} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="text-center mt-4">
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
      </section>
    </div>
  );
};

export default Blogs;
