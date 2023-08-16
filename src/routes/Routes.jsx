import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import LabTest from "../pages/Shared/LabTest/LabTest";
import SignUp from "../pages/SignUp/SignUp";
import HealthTips from "../pages/HealthTips/HealthTips";
import HealthTipsDetails from "../pages/HealthTipsDetails/HealthTipsDetails";

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
]);

export default router;
