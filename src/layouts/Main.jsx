import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
};

export default Main;
