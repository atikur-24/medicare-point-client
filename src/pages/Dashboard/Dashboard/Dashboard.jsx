import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import AdminHome from "../AdminDashboard/AdminHome/AdminHome";
import PharmacistsHome from "../PharmacistDashboard/PharmacistsHome/PharmacistsHome";
import UserProfile from "../UserDashboard/UserProfile/UserProfile";

const Dashboard = () => {
  const { role } = useContext(AuthContext);
  const [isUser, setUser] = useState(false);
  const [isPharmacist, setPharmacist] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (role === "user") {
      setUser(true);
    } else if (role === "Pharmacist") {
      setPharmacist(true);
    } else if (role === "admin") {
      setAdmin(true);
    }
  }, [role]);

  // if (!role) {
  //   return <Loader />;
  // }

  return (
    <div>
      {isAdmin && <AdminHome />}
      {isPharmacist && <PharmacistsHome />}
      {isUser && <UserProfile />}
    </div>
  );
};

export default Dashboard;
