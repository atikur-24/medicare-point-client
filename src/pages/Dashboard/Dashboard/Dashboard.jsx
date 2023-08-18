import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AdminHome from "../AdminDashboard/AdminHome/AdminHome";

import PharmacistsHome from "../PharmacistDashboard/PharmacistsHome/PharmacistsHome";

const Dashboard = () => {
  const { role } = useAuth();
  const [isUser, setUser] = useState(false);
  const [isPharmacist, setPharmacist] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (role === "User") {
      setUser(true);
    } else if (role === "Pharmacist") {
      setPharmacist(true);
    } else if (role === "Admin") {
      setAdmin(true);
    }
  }, []);
  return (
    <div>
      {isAdmin && <AdminHome />}
      {isPharmacist && <PharmacistsHome />}
    </div>
  );
};

export default Dashboard;
