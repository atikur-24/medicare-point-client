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
        <h1 className="text-4xl font-extrabold pb-4">blog title -- Lorem ipsum dolor sit amet consectetur</h1>
        <div className="flex justify-between items-center py-8 pe-4">
          <div className="flex gap-4 items-center">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-my-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=sph" alt="author" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Safayat Hossen Alif</h3>
              <p className="text-sm">sep 03, 2023</p>
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
          className="rounded-es-3xl rounded-tr-3xl w-full md:w-1/2 mx-auto h-56 md:h-72 mb-8"
          src="https://img.freepik.com/free-vector/hand-drawn-medical-center-template-design_23-2150152867.jpg?w=1380&t=st=1693722039~exp=1693722639~hmac=93fa3cecdb66dce7b232c3fdcd02240615adc5240e5f7db803fd1c9cc503e7b1"
          alt=""
        />
        <div className="space-y-6">
          <p className="">
            {/* {ReactHtmlParser("lorem aaaaaaaaa")} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam laboriosam expedita, veniam aut culpa quia beatae, distinctio cum suscipit at ab illum quae nostrum! Perferendis
            quod eaque aspernatur, labore dolores eius reiciendis voluptas facilis delectus. Praesentium, distinctio tenetur! Distinctio.
          </p>
          <p className="">
            {/* {ReactHtmlParser("lorem aaaaaaaaa")} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam laboriosam expedita, veniam aut culpa quia beatae, distinctio cum suscipit at ab illum quae nostrum! Perferendis
            quod eaque aspernatur, labore dolores eius reiciendis voluptas facilis delectus. Praesentium, distinctio tenetur! Distinctio.
          </p>
          <p className="">
            {/* {ReactHtmlParser("lorem aaaaaaaaa")} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam laboriosam expedita, veniam aut culpa quia beatae, distinctio cum suscipit at ab illum quae nostrum! Perferendis
            quod eaque aspernatur, labore dolores eius reiciendis voluptas facilis delectus. Praesentium, distinctio tenetur! Distinctio.
          </p>
        </div>
        <h1 className="text-3xl font-bold py-4"> Sub title </h1>
        <div className="space-y-6">
          <p className="">
            {/* {ReactHtmlParser("lorem aaaaaaaaa")} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam laboriosam expedita, veniam aut culpa quia beatae, distinctio cum suscipit at ab illum quae nostrum! Perferendis
            quod eaque aspernatur, labore dolores eius reiciendis voluptas facilis delectus. Praesentium, distinctio tenetur! Distinctio.
          </p>
          <div className="mx-8">
            <ul className="list-disc">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, delectus!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, delectus!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, delectus!</li>
            </ul>
          </div>
        </div>
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
