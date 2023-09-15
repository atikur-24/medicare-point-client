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
    <div className="pb-10">
      <h3>All Prescription</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2">
        {allData?.map((p) => (
          <div key={p?._id}>
            <div className="border border-gray-3 bg-white rounded-2xl p-4 space-y-4">
              <figure className="w-full">
                <img className="h-64  w-full object-cover" src={p?.prescription} alt="" />
              </figure>
              <div>
                <Link className="my-btn-outline" to={`/dashboard/prescriptions/${p?.email}`} type="button">
                  Upload Card
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPrescriptions;
