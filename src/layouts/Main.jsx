import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PopUp from "../pages/Home/PopUp/PopUp";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const [isPopUp, setPopUp] = useState("-top-[1000px]");
  useEffect(() => {
    setTimeout(() => {
      setPopUp("top-[100px]");
    }, 3000);
  }, []);
  return (
    <>
      <PopUp isPopUp={isPopUp} setPopUp={setPopUp} />
      <Navbar />
      <div className="min-h-[calc(100vh-100px)] bg-white">
        <Outlet />
        <ScrollRestoration />
      </div>
      <ToastContainer />
      <Toaster />
      <Footer />
    </>
  );
};

export default Main;
