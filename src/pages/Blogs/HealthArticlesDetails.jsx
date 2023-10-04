// import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import { BsFacebook, BsShare, BsTwitter } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";
import Blog from "./Blog";

const HealthArticlesDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const healthArticle = useLoaderData();
  // const { image, title, content_details, published_date, topic } = healthArticles;

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs`, {
        cancelToken: source.token,
      })
      .then((res) => setBlogs(res.data))
      .catch((error) => {
        console.error("An error occurred while fetching blogs:", error);
      });

    // Cleanup function
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <div className="my-container space-y-8">
      <WebSiteTitle title={healthArticle.title} />
      <div className="mx-auto md:mx-1">
        <div>
          {/* Ensure to provide a unique key */}
          <h1 className="pb-4 text-4xl font-extrabold">
            {healthArticle.title}
          </h1>
          <div className="flex items-center justify-between py-8 pe-4">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-my-primary ring-offset-2 ring-offset-base-100">
                  <img
                    src={healthArticle.authorImage}
                    alt={healthArticle.author}
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">{healthArticle.author}</h3>
                <p className="text-sm">{healthArticle.published_date}</p>
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
          <img
            className="mx-auto mb-8 h-56 w-full rounded-es-3xl rounded-tr-3xl md:h-72 md:w-1/2"
            src={healthArticle.image}
            alt=""
          />
          <div className="space-y-6">
            <p className="">
              {/* Render blog content here */}
              {healthArticle.content}
            </p>
            {/* Add more content rendering for sub-title and lists if needed */}
          </div>
          <h2 className="my-4 text-2xl font-semibold">
            {healthArticle.sectionTitle}
          </h2>
          <div className="space-y-6">
            <p className="">
              {/* Render blog content here */}
              {HtmlParser(healthArticle.content_details)}
            </p>
            {/* Add more content rendering for sub-title and lists if needed */}
          </div>
        </div>

        <hr className="my-6 text-my-primary" />
        <hr className="my-6 text-my-primary" />
        <div className="mt-12">
          {blogs?.slice(0, 2)?.map((blog) => (
            <Blog range={200} blog={blog} key={blog._id} />
          ))}
        </div>
        <div className="mx-auto w-full">
          <Link to="/blogs" className="my-btn !tracking-wider">
            See All &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthArticlesDetails;
