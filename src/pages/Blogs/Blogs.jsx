import axios from "axios";
import { useEffect, useState } from "react";
import blogImage from "../../assets/Blog/blog.png";
import Blog from "./Blog";
import "./Blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((res) => setBlogs(res.data));
  }, []);
  return (
    <div className="bg-white">
      <div>
        <img className="w-full" src={blogImage} alt="" />
      </div>
      <section className="my-container">
        <div className="">
          {blogs.map((blog) => (
            <Blog range={300} blog={blog} key={blog._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
