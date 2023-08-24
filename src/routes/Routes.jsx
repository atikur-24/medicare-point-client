import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blogs from "../pages/Blogs/Blogs";
import HealthArticlesDetails from "../pages/Blogs/HealthArticlesDetails";
import InterviewDetails from "../pages/Blogs/InterviewDetails";
import Contract from "../pages/Contract/Contract";
import AddLabTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AddLabTest";
import AllAvailableTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AllAvailableTest";
import AddDoctor from "../pages/Dashboard/AdminDashboard/AllDoctors/AddDoctor";
import AllDoctors from "../pages/Dashboard/AdminDashboard/AllDoctors/AllDoctors";
import AddHealthSuggestion from "../pages/Dashboard/AdminDashboard/AllHealthSuggestion/AddHealthSuggestion";
import EditHealthSuggestion from "../pages/Dashboard/AdminDashboard/AllHealthSuggestion/EditHealthSuggestion";
import AllMedicines from "../pages/Dashboard/AdminDashboard/AllMedicines/AllMedicines";
import AllPharmacists from "../pages/Dashboard/AdminDashboard/AllPharmacists/AllPharmacists";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import ApplicationDetail from "../pages/Dashboard/AdminDashboard/PharmacyApplications/ApplicationDetail";
import PharmacyApplications from "../pages/Dashboard/AdminDashboard/PharmacyApplications/PharmacyApplications";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddNewMedicine from "../pages/Dashboard/PharmacistDashboard/AddNewMedicine/AddNewMedicine";
import AllMedicinesByPharmacist from "../pages/Dashboard/PharmacistDashboard/AllMedicinesByPharmacist/AllMedicinesByPharmacist";
import NewOrders from "../pages/Dashboard/PharmacistDashboard/NewOrders/NewOrders";
import PharmacistOrderHistory from "../pages/Dashboard/PharmacistDashboard/PharmacistOrderHistory/PharmacistOrderHistory";
import RequestedOrder from "../pages/Dashboard/PharmacistDashboard/RequestedOrder/RequestedOrder";
import BookedLabTest from "../pages/Dashboard/UserDashboard/BookedLabTest/BookedLabTest";
import OrderHistory from "../pages/Dashboard/UserDashboard/OrderHistory/OrderHistory";
import UserProfile from "../pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import ViewCart from "../pages/Dashboard/UserDashboard/ViewCart/ViewCart";
import HealthTips from "../pages/HealthTips/HealthTips";
import HealthTipsDetails from "../pages/HealthTipsDetails/HealthTipsDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login-&-singup/Login";
import SignUp from "../pages/Login-&-singup/SignUp";
import CheckouForm from "../pages/MedicineCarts/CheckoutForm/CheckouForm";
import MedicineCarts from "../pages/MedicineCarts/MedicineCarts";
import MedicineDetails from "../pages/Medicines/MedicineDetails";
import Medicines from "../pages/Medicines/Medicines";
import PharmacyRegistrationPage from "../pages/PharmacyRegistrationPage/PharmacyRegistrationPage";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import LabPayment from "../pages/Shared/LabTest/LabPayment";
import LabTest from "../pages/Shared/LabTest/LabTest";
import LabTestPage from "../pages/Shared/LabTest/LabTestPage";

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
        path: "/healthtips",
        element: <HealthTips />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/interviews/:id",
        element: <InterviewDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/interviews/${params?.id}`),
      },
      {
        path: "/healthArticles/:id",
        element: <HealthArticlesDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params?.id}`),
      },
      {
        path: "/healthtips/:id",
        element: <HealthTipsDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/allHealthTips/${params?.id}`),
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
      {
        path: "/details/:id",
        element: <MedicineDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/medicines/${params?.id}`),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contract",
        element: <Contract />,
      },
      {
        path: "medicineCarts",
        element: <MedicineCarts />,
      },
      {
        path: "orderCheckOut",
        element: <CheckouForm />,
      },
      {
        path: "services",
        element: <Services />,
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
        path: "pharmacyRegistration",
        element: <PharmacyRegistrationPage />,
      },
      {
        path: "PharmacyApplications",
        element: <PharmacyApplications />,
      },
      {
        path: "pharmacyRegistration/:id",
        element: <ApplicationDetail />,
        loader: ({ params }) => fetch(`http://localhost:5000/pharmacyRegistrationApl/${params?.id}`),
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
        path: "edit-health-tips",
        element: <EditHealthSuggestion />,
      },
      {
        path: "add-health-tips",
        element: <AddHealthSuggestion />,
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
