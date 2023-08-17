import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main";
import AddLabTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AddLabTest";
import AllAvailableTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AllAvailableTest";
import AddDoctor from "../pages/Dashboard/AdminDashboard/AllDoctors/AddDoctor";
import AllDoctors from "../pages/Dashboard/AdminDashboard/AllDoctors/AllDoctors";
import AllHealthSuggestion from "../pages/Dashboard/AdminDashboard/AllHealthSuggestion/AllHealthSuggestion";
import AllMedicines from "../pages/Dashboard/AdminDashboard/AllMedicines/AllMedicines";
import AllPharmacists from "../pages/Dashboard/AdminDashboard/AllPharmacists/AllPharmacists";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddNewMedicine from "../pages/Dashboard/PharmacistDashboard/AddNewMedicine/AddNewMedicine";
import AllMedicinesByPharmacist from "../pages/Dashboard/PharmacistDashboard/AllMedicinesByPharmacist/AllMedicinesByPharmacist";
import NewOrders from "../pages/Dashboard/PharmacistDashboard/NewOrders/NewOrders";
import PharmacistOrderHistory from "../pages/Dashboard/PharmacistDashboard/PharmacistOrderHistory/PharmacistOrderHistory";
import RequestedOrder from "../pages/Dashboard/PharmacistDashboard/RequestedOrder/RequestedOrder";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Medicines from "../pages/Medicines/Medicines";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import LabPayment from "../pages/Shared/LabTest/LabPayment";
import LabTest from "../pages/Shared/LabTest/LabTest";
import LabTestPage from "../pages/Shared/LabTest/LabTestPage";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "new-orders",
        element: <NewOrders />,
      },
      {
        path: "medicine-inventory",
        element: <AllMedicinesByPharmacist />,
      },
      {
        path: "add-new-medicine",
        element: <AddNewMedicine />,
      },
      {
        path: "pharmacists-order-history",
        element: <PharmacistOrderHistory />,
      },
      {
        path: "requested-medicines",
        element: <RequestedOrder />,
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
        element: <AllHealthSuggestion />,
      },
      {
        path: "manage-lab-test",
        element: <AllAvailableTest />,
      },
      {
        path: "add-lab-test",
        element: <AddLabTest />,
      },
      {
        path: "manage-all-doctors",
        element: <AllDoctors />,
      },
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
    ],
  },
]);

export default router;
