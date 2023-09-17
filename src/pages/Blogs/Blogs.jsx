import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../Features/Blogs/allBlogs";
import blogImage from "../../assets/Blog/blog.webp";
import Loader from "../../components/Loader";
import Blog from "./Blog";
import "./Blog.css";

const Blogs = () => {
  const { isLoading, allBlogs: blogs } = useSelector((state) => state.allBlogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div>
        <img className="w-full" src={blogImage} alt="" />
      </div>
      <section className="my-container">
        {isLoading ? (
          <Loader spinner />
        ) : (
          <div className="">
            {blogs?.map((blog) => (
              <Blog range={300} blog={blog} key={blog._id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
