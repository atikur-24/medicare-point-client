import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ReqCard from "./ReqCard";

const StockRequest = () => {
  const { user } = useAuth();
  const [reqMedicine, setReqMedicine] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/requestToStock/${user?.email}`).then((res) => setReqMedicine(res.data));
  }, [user]);

  return (
    <>
      <div className="my-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Request Medicine</div>
            <div className="stat-value text-my-primary">{reqMedicine.length}</div>
          </div>
        </div>
      </div>

      {reqMedicine.length <= 0 && <h3 className="text-xl lg:text-3xl text-center pt-5 text-red-400 ">No Request Found</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
        {reqMedicine?.map((singleMedi) => (
          <ReqCard key={singleMedi._id} singleMedi={singleMedi} />
        ))}
      </div>
    </>
  );
};

export default StockRequest;
