import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blogs from "../pages/Blogs/Blogs";
import HealthArticlesDetails from "../pages/Blogs/HealthArticlesDetails";
import Contract from "../pages/Contract/Contract";
import AddNewArticles from "../pages/Dashboard/AdminDashboard/AdminBlogs/AddNewArticles";
import AddLabTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AddLabTest";
import AllAvailableTest from "../pages/Dashboard/AdminDashboard/AllAvailableTest/AllAvailableTest";
import AddBlog from "../pages/Dashboard/AdminDashboard/AllBlogs/AddBlog";
import AddDoctor from "../pages/Dashboard/AdminDashboard/AllDoctors/AddDoctor";
import AllDoctors from "../pages/Dashboard/AdminDashboard/AllDoctors/AllDoctors";
import AddHealthSuggestion from "../pages/Dashboard/AdminDashboard/AllHealthSuggestion/AddHealthSuggestion";
import EditHealthSuggestion from "../pages/Dashboard/AdminDashboard/AllHealthSuggestion/EditHealthSuggestion";
import UpdateHealthTips from "../pages/Dashboard/AdminDashboard/AllHealthSuggestion/UpdateHealthTips";
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
import PaymentFailed from "../pages/PaymentPage/PaymentFailed";
import PaymentSuccess from "../pages/PaymentPage/PaymentSuccess";
import PharmacyRegistrationPage from "../pages/PharmacyRegistrationPage/PharmacyRegistrationPage";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

import EditArticles from "../pages/Dashboard/AdminDashboard/AdminBlogs/EditArticles";
import UpdateHealthArticles from "../pages/Dashboard/AdminDashboard/AdminBlogs/UpdateHealthArticles";
import ConfirmLab from "../pages/Dashboard/AdminDashboard/AllAvailableTest/ConfirmLab";
import DashboardMedicineDetail from "../pages/Dashboard/AdminDashboard/AllMedicines/DashboardMedicineDetail";
import DiscountCodes from "../pages/Dashboard/AdminDashboard/DiscountCodes/DiscountCodes";
import MedicineReturnByAdmin from "../pages/Dashboard/AdminDashboard/MedicineReturnByAdmin/MedicineReturnByAdmin";
import OrderHistoryByAdmin from "../pages/Dashboard/AdminDashboard/OrderHistory/OrderHistoryByAdmin";
import AllPrescriptions from "../pages/Dashboard/AdminDashboard/UploadPrescription/AllPrescriptions";
import UploadPrescription from "../pages/Dashboard/AdminDashboard/UploadPrescription/UploadPrescription";
import UploadImages from "../pages/Dashboard/Dashboard/UploadImages/UploadImages";
import UpdateMedicine from "../pages/Dashboard/PharmacistDashboard/AllMedicinesByPharmacist/UpdateMedicine";
import ViewDetailsMedicine from "../pages/Dashboard/PharmacistDashboard/AllMedicinesByPharmacist/ViewDetailsMedicine";
import NewMedicineRequest from "../pages/Dashboard/PharmacistDashboard/RequestedMedicine/NewMedicineRequest";
import StockRequest from "../pages/Dashboard/PharmacistDashboard/RequestedMedicine/StockRequest";
import MedicineReturnByPharmacist from "../pages/Dashboard/PharmacistDashboard/Retrun/MedicineReturnByPharmacist";
import Feedback from "../pages/Dashboard/UserDashboard/Feedback/Feedback";
import CompletedOrders from "../pages/Dashboard/UserDashboard/OrderHistory/CompletedOrders/CompletedOrders";
import OrderTracking from "../pages/Dashboard/UserDashboard/OrderTrack/OrderTracking";
import RewardPoints from "../pages/Dashboard/UserDashboard/RewardPoints/RewardPoints";
import EditProfile from "../pages/Dashboard/UserDashboard/UserProfile/EditProfile";
import Faqs from "../pages/Faqs/Faqs";
import LabBook from "../pages/Shared/LabTest/LabBook/LabBook";
import LabPayment from "../pages/Shared/LabTest/LabPayment/LabPayment";
import LabTest from "../pages/Shared/LabTest/LabTest";
import LabTestPage from "../pages/Shared/LabTest/LabTestPage";
import FeesandPaymentsPolicy from "../pages/TermsAndConditions/Fees&PaymentsPolicy";
import Privacy from "../pages/TermsAndConditions/Privacy";
import ReturnRefundCancellationPolicy from "../pages/TermsAndConditions/ReturnRefundCancellationPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute";

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
        path: "terms&conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "paymentpolicy",
        element: <FeesandPaymentsPolicy />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "refund",
        element: <ReturnRefundCancellationPolicy />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/healthArticles/:id",
        element: <HealthArticlesDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params?.id}`),
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
        element: (
          <PrivateRoute>
            <LabPayment />
          </PrivateRoute>
        ),
      },
      {
        path: "/labBook/:id",
        element: <LabBook />,
      },
      {
        path: "medicines",
        element: <Medicines />,
      },
      {
        path: "/details/:id",
        element: <MedicineDetails />,
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
        element: (
          <PrivateRoute>
            {" "}
            <CheckouForm />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  // payment status page
  {
    path: "paymentSuccess/:id",
    element: <PaymentSuccess />,
  },
  {
    path: "paymentFailed/:id",
    element: <PaymentFailed />,
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
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "images",
        element: <UploadImages />,
      },
      // user dashboard
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/edit-profile/:email",
        element: <EditProfile />,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params?.email}`),
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
        path: "completed-orders",
        element: <CompletedOrders />,
      },
      {
        path: "track-order",
        element: <OrderTracking />,
      },
      {
        path: "suggestion-reminders",
      },
      {
        path: "chat-support",
      },
      {
        path: "reward-points",
        element: <RewardPoints />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "manage-confirm-lab",
        element: <ConfirmLab />,
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
        path: "update-medicine/:id",
        element: <UpdateMedicine />,
        loader: ({ params }) => fetch(`http://localhost:5000/medicines/details/${params.id}`),
      },
      {
        path: "medicine-details/:id",
        element: <ViewDetailsMedicine />,
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
        path: "requested-stock",
        element: <StockRequest />,
      },
      {
        path: "requested-new-medicine",
        element: <NewMedicineRequest />,
      },
      {
        path: "medicine-return",
        element: <MedicineReturnByPharmacist />,
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
        path: "medicine-order-history",
        element: <OrderHistoryByAdmin />,
      },
      {
        path: "delivery-medicine-return",
        element: <MedicineReturnByAdmin />,
      },
      {
        path: "medicine-detail/:id",
        element: <DashboardMedicineDetail />,
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
        path: "update-health-tips/:id",
        element: <UpdateHealthTips />,
        loader: ({ params }) => fetch(`http://localhost:5000/allHealthTips/${params?.id}`),
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
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "add-health-articles",
        element: <AddNewArticles />,
      },
      {
        path: "manage-health-articles",
        element: <EditArticles />,
      },
      {
        path: "update-health-articles/:id",
        element: <UpdateHealthArticles />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params?.id}`),
      },
      {
        path: "prescriptions",
        element: <AllPrescriptions />,
      },
      {
        path: "prescriptions/:email",
        element: <UploadPrescription />,
      },
      {
        path: "discountCodes",
        element: <DiscountCodes />,
      },
    ],
  },
]);

export default router;
