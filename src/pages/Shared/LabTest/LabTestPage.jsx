import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import WebSiteTitle from "../../../components/WebSiteTitle/WebSiteTitle";
import CheckCard from "./CheckCard/CheckCard";
import LabBanner from "./LabBanner/LabBanner";
import LabCard from "./LabCard/LabCard";

const LabTestPage = () => {
  const [labCategory, setLabCategory] = useState([]);
  const [labItems, setLabItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`${import.meta.env.VITE_API_URL}/labCategory/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => setLabCategory(res?.data));

    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const categoryName = labCategory[0]?.category_name;
    if (categoryName) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/labItems/${categoryName}`, {
          cancelToken: cancelToken.token,
        })
        .then((res) => {
          setLabItems(res?.data);
        })
        .catch((error) => {
          console.error("Error fetching labItems:", error);
        });
    }

    return () => {
      cancelToken.cancel();
    };
  }, [labCategory]);

  return (
    <div className="relative">
      <LabBanner />
      <WebSiteTitle title={labCategory[0]?.category_name} />
      <div className="my-container relative">
        <p className="inline-flex gap-2 items-center mb-4 text-xl font-bold font-nunito">
          <Link className="hover:text-my-primary" to="/lab-test">
            Lab Test
          </Link>{" "}
          <FaAngleRight /> {labCategory[0]?.category_name}
        </p>
        <div className="grid md:grid-cols-5 gap-4 justify-center">
          {labItems.map((category) => (
            <LabCard key={category._id} category={category} />
          ))}
        </div>
        <CheckCard />
      </div>
    </div>
  );
};

export default LabTestPage;
