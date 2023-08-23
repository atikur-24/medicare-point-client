import { useLoaderData } from "react-router-dom";

const HealthArticlesDetails = () => {
  const healthArticles = useLoaderData();
  const { image, title, content_details, published_date, topic } = healthArticles;
  return (
    <div className="grid items-center mx-auto text-center p-4 space-y-3">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p>
        <small className="italic">Published Date: {published_date}</small>
      </p>
      <img className="mx-auto" style={{ width: "600px", height: "350px" }} src={image} alt="" />
      <h2 className="text-3xl font-semibold">Topic:{topic}</h2>
      <p className="flex justify-center">{content_details}</p>
    </div>
  );
};

export default HealthArticlesDetails;
