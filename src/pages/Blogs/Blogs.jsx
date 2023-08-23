import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [interviews, setinterviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/interviews").then((res) => setinterviews(res.data));
  }, []);
  const [healthArticles, setHealthArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((res) => setHealthArticles(res.data));
  }, []);
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-4xl font-semibold my-4 text-center">Explore our blogs to discover the power of positive habits</h1>
      <div>
        <h1 className="text-3xl font-semibold my-4 text-center">Health Articles</h1>
        <section className="my-6 h-full">
          <div className="grid grid-cols-1 items-center">
            {healthArticles.map((healthArticle, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-center">
                    <img className="p-6 w-[600px] h-[350px]" src={healthArticle.image} alt="" />
                    <div className="p-6 my-auto">
                      <Link to={`/healthArticles/${healthArticle._id}`}>
                        <h2 className="text-xl font-semibold hover:text-my-primary">{healthArticle.title}</h2>
                      </Link>
                      <p>
                        <small className="italic">Published On: {healthArticle.published_date}</small>
                      </p>
                      <p className="font-semibold py-3">Topic:{healthArticle.topic}</p>

                      <ul className="list-disc mb-4 py-3">
                        <p>{healthArticle.content}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div>
        <h1 className="text-3xl font-semibold my-4 text-center">Interview with Experts</h1>
        <section className="my-6 h-full">
          <div className="grid grid-cols-1 items-center">
            {interviews.map((interview, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-center">
                    <img style={{ width: "600px", height: "350px" }} className="p-6" src={interview.image} alt="" />
                    <div className="p-6 my-auto">
                      <Link to={`/interviews/${interview._id}`}>
                        <h2 className="text-xl font-semibold hover:text-my-primary">{interview.title}</h2>
                      </Link>
                      <p>
                        <small className="italic">Published On: {interview.published_date}</small>
                      </p>
                      <p className="font-semibold py-3">Topic:{interview.topic}</p>

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
      </div>
    </div>
  );
};

export default Blogs;
