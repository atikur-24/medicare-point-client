import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HealthTips = () => {
  const [healthTips, setHealthTips] = useState([]);

  useEffect(() => {
    axios.get("/healthtips.json").then((res) => setHealthTips(res.data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-4">Health Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8 ">
        {healthTips.map((healthTip, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 w-full h-full justify-center items-center shadow-xl bgc-white border p-3">
            <img src={healthTip.image} alt="img" className="h-32" />
            <h2 className="inline-flex items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
            <Link to={`/healthtips/${healthTip.id}`} className="flex justify-end">
              <button type="button" className="my-btn">
                Get Tips
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
