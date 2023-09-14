import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPrescriptions = () => {
  const [allData, setAllData] = useState([]);
  //   const dispatch = useDispatch();
  //   const a = useSelector((state) => state.allPrescription);
  useEffect(() => {
    axios.get("http://localhost:5000/prescriptions").then((res) => setAllData(res.data));
  }, []);

  return (
    <div>
      <h3>All Prescription</h3>
      <div className="grid grid-cols-4 gap-2">
        {allData?.map((p) => (
          <div key={p?._id}>
            <div className="border">
              <img src={p?.prescription} alt="" />
              <Link className="btn" to={`/dashboard/prescriptions/${p?.email}`} type="button">
                Upload Card
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPrescriptions;
