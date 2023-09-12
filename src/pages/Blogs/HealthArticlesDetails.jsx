// import ReactHtmlParser from "react-html-parser";
// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFacebook, BsShare, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Blog from "./Blog";

const HealthArticlesDetails = () => {
  const [blogs, setBlogs] = useState([]);
  // const healthArticles = useLoaderData();
  // const { image, title, content_details, published_date, topic } = healthArticles;

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="space-y-8 my-container">
      <div className="md:mx-24 mx-auto">
        {blogs.map((blog) => (
          <div key={blog._id}>
            {" "}
            {/* Ensure to provide a unique key */}
            <h1 className="text-4xl font-extrabold pb-4">{blog.title}</h1>
            <div className="flex justify-between items-center py-8 pe-4">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-my-primary ring-offset-base-100 ring-offset-2">
                    <img src={blog.authorImage} alt={blog.author} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{blog.author}</h3>
                  <p className="text-sm">{blog.published_date}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="cursor-pointer ">
                  <BsFacebook className="text-gray-4" size={24} />
                </p>
                <p className="cursor-pointer ">
                  <BsTwitter className="text-gray-4" size={24} />
                </p>
                <p className="cursor-pointer ">
                  <BsShare className="text-gray-4" size={24} />
                </p>
              </div>
            </div>
            <img className="rounded-es-3xl rounded-tr-3xl w-full md:w-1/2 mx-auto h-56 md:h-72 mb-8" src={blog.image} alt="" />
            <div className="space-y-6">
              <p className="">
                {/* Render blog content here */}
                {blog.content_details}
              </p>
              {/* Add more content rendering for sub-title and lists if needed */}
            </div>
          </div>
        ))}

        <hr className="my-6 text-my-primary" />
        <hr className="my-6 text-my-primary" />
        <div className="mt-12">
          {blogs?.slice(0, 2)?.map((blog) => (
            <Blog range={200} blog={blog} key={blog._id} />
          ))}
        </div>
        <div className="w-full mx-auto">
          <Link to="/blogs" className="my-btn">
            See All &rarr; &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthArticlesDetails;
