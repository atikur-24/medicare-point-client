import axios from "axios";
import { useEffect, useState } from "react";
import blogImage from "../../assets/Blog/blog.png";
import Blog from "./Blog";
import "./Blog.css";

const Blogs = () => {
  // const [interviews, setinterviews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/interviews").then((res) => setinterviews(res.data));
  // }, []);

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
            <Blog blog={blog} key={blog._id} />
          ))}
          {/* {healthArticles.map((healthArticle, index) => {
              return (
                <div className="my-6 md:m-6" key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <Link className="w-full col-span-2" to={`/healthArticles/${healthArticle._id}`}>
                      <img className="rounded-es-3xl rounded-tr-3xl" src={healthArticle.image} alt="" />
                    </Link>
                    <div className="col-span-3">
                      <Link to={`/healthArticles/${healthArticle._id}`}>
                        <h2 className="text-xl font-semibold hover:text-my-primary">{healthArticle.title}</h2>
                      </Link>
                      <p>
                        <small className="italic">Published On: {healthArticle.published_date}</small>
                      </p>
                      <p className="font-semibold py-3">Topic: {healthArticle.topic}</p>

                      <ul className="list-disc mb-4 py-3">
                        <p>{healthArticle.content}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })} */}
        </div>
      </section>

      {/* <div>
        <h1 className="text-3xl font-semibold py-6 text-center">Interview with Experts</h1>
        <section className="">
          <div className="">
            {interviews.map((interview, index) => {
              return (
                <div className="my-8 md:m-6" key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <Link className="col-span-2 order-first md:order-last" to={`/interviews/${interview._id}`}>
                      <img className="rounded-tr-3xl rounded-es-3xl w-full " src={interview.image} alt="" />
                    </Link>
                    <div className="col-span-3">
                      <Link to={`/interviews/${interview._id}`}>
                        <h2 className="text-xl font-semibold hover:text-my-primary">{interview.title}</h2>
                      </Link>
                      <p>
                        <small className="italic">Published On: {interview.published_date}</small>
                      </p>
                      <p className="font-semibold py-3">Topic: {interview.topic}</p>

                      <ul className="list-disc mb-4 py-3">
                        <p>{interview.content}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Blogs;
