import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main";
import AllDoctors from "../pages/Dashboard/AdminDashboard/AllDoctors/AllDoctors";
import AllMedicines from "../pages/Dashboard/AdminDashboard/AllMedicines/AllMedicines";
import AllPharmacists from "../pages/Dashboard/AdminDashboard/AllPharmacists/AllPharmacists";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  // dashboard
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // user dashboard
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
      },
      {
        path: "view-cart",
      },
      {
        path: "booked-lab-tests",
      },
      {
        path: "health-records",
      },
      {
        path: "order-history",
      },
      {
        path: "suggestion-reminders",
      },
      {
        path: "chat-support",
      },
      {
        path: "reward-points",
      },

      // pharmacists dashboard
      {
        path: "medicine-orders",
      },
      {
        path: "medicine-inventory",
      },
      {
        path: "pharmacists-order-history",
      },
      {
        path: "requested-medicines",
      },

      // admin dashboard
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-pharmacies",
        element: <AllPharmacists />,
      },
      {
        path: "all-medicines",
        element: <AllMedicines />,
      },
      {
        path: "health-suggestions",
      },
      {
        path: "manage-lab-test",
      },
      {
        path: "manage-all-doctors",
        element: <AllDoctors />,
      },
      {
        path: "manage-all-pharmacy",
      },
    ],
  },
]);

export default router;
