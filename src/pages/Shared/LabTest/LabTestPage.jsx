import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CheckCard from "./CheckCard";
import LabBanner from "./LabBanner";
import LabCard from "./LabCard";

const LabTestPage = () => {
  const [labCategory, setLabCategory] = useState([]);
  const [labItems, setLabItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/labCategory/${id}`).then((res) => setLabCategory(res?.data));
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:5000/labItems/${labCategory[0]?.category_name}`).then((res) => setLabItems(res?.data));
  }, [labCategory, labCategory.category_name]);

  return (
    <div className="relative">
      <LabBanner />
      <div className="my-container relative">
        <p className="inline-flex gap-2 items-center mb-4 text-xl font-bold font-nunito">
          Lab Test <FaAngleRight /> {labCategory[0]?.category_name}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
