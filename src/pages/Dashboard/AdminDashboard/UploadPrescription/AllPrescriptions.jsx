import axios from "axios";
import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../../../assets/Logo/logo.svg";

const AllPrescriptions = () => {
  const [allData, setAllData] = useState([]);
  //   const dispatch = useDispatch();
  //   const a = useSelector((state) => state.allPrescription);
  useEffect(() => {
    axios.get("http://localhost:5000/prescriptions").then((res) => setAllData(res.data));
  }, []);

  return (
    <div className="pb-10">
      <div className="mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Receive Prescription</div>
            <div className="stat-value text-my-primary">{allData.length || 0}</div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        {allData?.map((p) => (
          <div key={p?._id}>
            <div className="border border-gray-3 bg-white rounded-2xl p-4 space-y-4">
              <figure className="w-full">
                <img className="h-64  w-full object-cover" src={p?.prescription} alt="" />
              </figure>
              <div className="space-y-1">
                <h2 className="text-sm">{p.patientName}</h2>
                <h2 className="text-base inline-flex items-center gap-2">
                  <HiOutlineMail />
                  <span>{p.email}</span>
                </h2>
                <h2 className="text-base inline-flex items-center gap-2">
                  <BiTimeFive />
                  {p.date}
                </h2>
              </div>
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
