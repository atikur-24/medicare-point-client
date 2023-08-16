import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="my-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {labItems.map((items) => (
          <LabCard key={items._id} category={items} />
        ))}
      </div>
    </div>
  );
};

export default LabTestPage;
