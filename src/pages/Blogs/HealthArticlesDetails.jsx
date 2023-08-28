import ReactHtmlParser from "react-html-parser";
import { useLoaderData } from "react-router-dom";

const HealthArticlesDetails = () => {
  const healthArticles = useLoaderData();
  const { image, title, content_details, published_date, topic } = healthArticles;
  return (
    <div className="space-y-3 my-container">
      <h1 className="text-5xl font-extrabold pb-4">{title}</h1>
      <img className="rounded-es-3xl rounded-tr-3xl w-full h-96 " src={image} alt="" />
      <p>
        <small className="italic">Published Date: {published_date}</small>
      </p>
      <h2 className="text-3xl font-semibold">Topic: {topic}</h2>
      {/* <p className="flex justify-center">{content_details}</p> */}
      <p className="flex justify-center">{ReactHtmlParser(content_details)}</p>
    </div>
  );
};

export default HealthArticlesDetails;
