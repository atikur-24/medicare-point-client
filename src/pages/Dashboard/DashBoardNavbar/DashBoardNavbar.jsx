import { useContext } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";
import rewordIcon from "../../../assets/Dashboard-icons/reward.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const DashBoardNavbar = ({ setShowNotification, showNotification }) => {
  const { role } = useContext(AuthContext);
  // if (!role) {
  //   return <p>loading........</p>;
  // }
  return (
    <div className="py-5 pl-10 pr-2 md:px-5 flex justify-between items-center bg-[#F1F6FA] ">
      <div className="">
        <div className="form-control hidden lg:block">
          <div className="input-group rounded-2xl">
            <input type="text" placeholder="Search…" className="input input-bordered input-sm md:input-md" />
            <p className="btn btn-square hover:bg-my-primary bg-my-primary text-white  btn-sm md:btn-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* <NavLink to="/dashboard/notification"> */}
        <button type="button" onClick={() => setShowNotification(!showNotification)}>
          <MdOutlineNotificationsActive
            title="Notification"
            className={` ml-2 transition-all duration-300 ${showNotification ? "bg-my-primary text-white bg-opacity-70 p-2 rounded-full w-12 h-12" : "w-10 h-10"}`}
            src="https://i.ibb.co/8zxdmM6/notification.png"
            alt="upload images"
          />
        </button>
        {role !== "user" && (
          <NavLink to="/dashboard/images">
            <img title="Upload Images" className="w-10 h-10 ml-2" src="https://i.ibb.co/sqVY4RR/gallery.png" alt="upload images" />
          </NavLink>
        )}

        {role === "user" && (
          <NavLink to="/dashboard/reward-points">
            <img title="Reword" className="w-10 h-10" src={rewordIcon} alt="reword points" />
          </NavLink>
        )}

        <NavLink to="/dashboard/profile">
          <img className="rounded-full w-10 h-10" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
