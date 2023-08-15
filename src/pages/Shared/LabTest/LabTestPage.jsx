import axios from "axios";
import { useEffect, useState } from "react";
import LabCard from "./LabCard";

const LabTestPage = () => {
  const [labItems, setLabItems] = useState([]);
  useEffect(() => {
    axios.get("/public/labTestItems.json").then((res) => setLabItems(res?.data));
  }, []);
  return (
    <div className="my-container">
      <div className="grid grid-cols-6">
        {labItems.map((cat, idx) => (
          <LabCard key={idx} labItem={cat} />
        ))}
      </div>
    </div>
  );
};

export default LabTestPage;
