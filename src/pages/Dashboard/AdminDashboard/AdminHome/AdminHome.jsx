import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
import pharmacyImg from "../../../../assets/Dashboard-icons/industry.png";
import medicinesImg from "../../../../assets/Dashboard-icons/medicines.png";
import pharmacistImg from "../../../../assets/Dashboard-icons/pharmacist.png";
import testImg from "../../../../assets/Dashboard-icons/result.png";
import usersImg from "../../../../assets/Dashboard-icons/users.png";

const AdminHome = ({ user }) => {
  const [adminHomeData, setAdminHomeData] = useState({});
  const [loading, setLoading] = useState(false);
  const { users, medicines, labTests, brands, labs, pharmacist } = adminHomeData;

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios.get(`http://localhost:5000/dashboardHomeData/${user.email}`).then((res) => {
        setAdminHomeData(res.data);
        setLoading(false);
      });
    }
  }, [loading, user?.email]);

  // console.log("a+");

  // if (loading) {
  //   return <p>Loading......</p>;
  // }

  const data = [
    { name: "January", Orders: 100 },
    { name: "February", Orders: 250 },
    { name: "March", Orders: 400 },
    { name: "April", Orders: 189 },
    { name: "May", Orders: 560 },
    { name: "June", Orders: 476 },
    { name: "July", Orders: 400 },
    { name: "August", Orders: 246 },
    { name: "September", Orders: 10 },
    { name: "October", Orders: 0 },
    { name: "November", Orders: 0 },
    { name: "December", Orders: 0 },
  ];

  const data2 = [
    { name: "January", Users: 50 },
    { name: "February", Users: 68 },
    { name: "April", Users: 97 },
    { name: "May", Users: 140 },
    { name: "June", Users: 250 },
    { name: "July", Users: 400 },
    { name: "August", Users: 410 },
    { name: "September", Users: 465 },
    { name: "October", Users: 465 },
    { name: "November", Users: 465 },
    { name: "December", Users: 465 },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 mt-1">
        <div className="rounded-2xl box-shadow bg-white py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={usersImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">
              <CountUp enableScrollSpy end={users || 10} duration={3} /> Users
            </h4>
            <p className="text-base">All Registered Users</p>
          </div>
        </div>
        <div className="rounded-2xl box-shadow bg-white py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={pharmacyImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">
              <CountUp enableScrollSpy end={brands || 10} duration={3} /> Brands
            </h4>
            <p className="text-base">All collaborated Brands</p>
          </div>
        </div>
        <div className="rounded-2xl box-shadow bg-white py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src="https://i.ibb.co/VxWbs9S/laboratory.png" alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">
              <CountUp enableScrollSpy end={labs || 10} duration={3} /> Laboratory
            </h4>
            <p className="text-base">Available Laboratory</p>
          </div>
        </div>
        <div className="rounded-2xl box-shadow bg-white py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={medicinesImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">
              <CountUp enableScrollSpy end={medicines || 10} duration={3} />+ Medicines
            </h4>
            <p className="text-base">Available Medicines</p>
          </div>
        </div>
        <div className="rounded-2xl box-shadow bg-white py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={testImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">
              <CountUp enableScrollSpy end={labTests || 10} duration={3} />+ Lab Tests
            </h4>
            <p className="text-base">Available Lab Tests</p>
          </div>
        </div>
        <div className="rounded-2xl box-shadow bg-white py-3 flex items-center justify-center gap-5">
          <img className="w-28 py-4 object-cover" src={pharmacistImg} alt="pharmacyImg" />
          <div>
            <h4 className="text-2xl">
              <CountUp enableScrollSpy end={pharmacist || 10} duration={3} /> Pharmacists
            </h4>
            <p className="text-base">Available Pharmacists</p>
          </div>
        </div>
      </div>

      {/* recharts  */}
      <div className="my-14 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center text-center">
        <div>
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" stroke="#10B6A8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 120, backgroundColor: "#ccc" }} />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: "#f5f5f5", border: "1px solid #d5d5d5", borderRadius: 3, lineHeight: "40px" }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="Orders" fill="#10B6A8" barSize={30} />
          </BarChart>
          <h3 className="relative -top-8 text-xl font-semibold text-my-primary">All Sells of the year 2023</h3>
        </div>

        <div>
          <ComposedChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Users" barSize={20} fill="#10B6A8" />
            <Line type="monotone" dataKey="Users" stroke="#ff7300" />
          </ComposedChart>
          <h3 className="relative -top-4 text-xl font-semibold text-my-primary">All users of the year 2023</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
