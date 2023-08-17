import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main";
import AllAvailableTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AllAvailableTest";
import AddDoctor from "../pages/Dashboard/AdminDashboard/AllDoctors/AddDoctor";
import AllDoctors from "../pages/Dashboard/AdminDashboard/AllDoctors/AllDoctors";
import AllMedicines from "../pages/Dashboard/AdminDashboard/AllMedicines/AllMedicines";
import AllPharmacists from "../pages/Dashboard/AdminDashboard/AllPharmacists/AllPharmacists";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import PharmacyLists from "../pages/Dashboard/AdminDashboard/PharmacyLists/PharmacyLists";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Medicines from "../pages/Medicines/Medicines";
import LabTest from "../pages/Shared/LabTest/LabTest";
import LabTestPage from "../pages/Shared/LabTest/LabTestPage";
import LabPayment from "../pages/Shared/LabTest/labPayment";
import SignUp from "../pages/SignUp/SignUp";
import HealthTips from "../pages/HealthTips/HealthTips";
import HealthTipsDetails from "../pages/HealthTipsDetails/HealthTipsDetails";
import UserProfile from "../pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import ViewCart from "../pages/Dashboard/UserDashboard/ViewCart/ViewCart";
import BookedLabTest from "../pages/Dashboard/UserDashboard/BookedLabTest/BookedLabTest";
import OrderHistory from "../pages/Dashboard/UserDashboard/OrderHistory/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "lab-test",
        element: <LabTest />,
      },
      {
        path: "/healthtips",
        element: <HealthTips />,
      },
      {
        path: "/healthtips/:id",
        element: <HealthTipsDetails />,
      },
      {
        path: "labPage/:id",
        element: <LabTestPage />,
      },
      {
        path: "labPayment",
        element: <LabPayment />,
      },
      {
        path: "medicines",
        element: <Medicines />,
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
        element: <UserProfile />,
      },
      {
        path: "medicine-cart",
        element: <ViewCart />,
      },
      {
        path: "booked-lab-tests",
        element: <BookedLabTest />,
      },
      {
        path: "health-records",
      },
      {
        path: "order-history",
        element: <OrderHistory />,
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
        element: <AllAvailableTest />,
      },
      {
        path: "manage-all-doctors",
        element: <AllDoctors />,
      },
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "manage-all-pharmacy",
        element: <PharmacyLists />,
      },
    ],
  },
]);

export default router;
