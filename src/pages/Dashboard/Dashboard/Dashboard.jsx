import { useContext, useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import { AuthContext } from "../../../contexts/AuthProvider";
import AdminHome from "../AdminDashboard/AdminHome/AdminHome";
import PharmacistsHome from "../PharmacistDashboard/PharmacistsHome/PharmacistsHome";
import UserProfile from "../UserDashboard/UserProfile/UserProfile";

const Dashboard = () => {
  const { role, user } = useContext(AuthContext);
  const [isUser, setUser] = useState(false);
  const [isPharmacist, setPharmacist] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  // const [adminHomeData, setAdminHomeData] = useState({});

  useEffect(() => {
    if (role === "user") {
      setUser(true);
    } else if (role === "Pharmacist") {
      setPharmacist(true);
    } else if (role === "admin") {
      setAdmin(true);
    }
  }, [role]);

  if (!role) {
    return <Loader spinner />;
  }

  return (
    <div>
      {isAdmin && <AdminHome user={user} />}
      {isPharmacist && <PharmacistsHome user={user} />}
      {isUser && <UserProfile />}
    </div>
  );
};

export default Dashboard;
