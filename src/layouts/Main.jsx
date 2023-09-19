import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WebSiteTitle from "../components/WebSiteTitle/WebSiteTitle";
import PopUp from "../pages/Home/PopUp/PopUp";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const [isPopUp, setPopUp] = useState("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("popup") > 0) {
      return;
    }
    setTimeout(() => {
      setPopUp("block");
      sessionStorage.setItem("popup", 1);
    }, 1000);
  }, []);
  return (
    <>
      <PopUp isPopUp={isPopUp} setPopUp={setPopUp} />
      <Navbar />
      <WebSiteTitle title="Online Medicine in bd" />
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
