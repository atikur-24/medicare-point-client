import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../Features/AllMedicines/allData";
import blogImage from "../../assets/Blog/blog.webp";
import Loader from "../../components/Loader";
import Blog from "./Blog";
import "./Blog.css";

const Blogs = () => {
  const api = "blogs";
  const { isLoading, allData: blogs } = useSelector((state) => state.allData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllData(api));
  }, [dispatch, api]);

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
