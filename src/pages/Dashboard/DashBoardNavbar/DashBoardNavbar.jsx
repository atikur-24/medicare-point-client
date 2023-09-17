import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";
import rewordIcon from "../../../assets/Dashboard-icons/reward.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const DashBoardNavbar = ({ setShowNotification, showNotification, allNotificationsData }) => {
  const { role, user } = useContext(AuthContext);
  const [unreadNotification, setUnreadNotification] = useState(0);

  const [notificationID, setNotificationID] = useState([]);
  useEffect(() => {
    let unread = 0;
    allNotificationsData.forEach((n) => {
      if (n?.read === "no") {
        unread = unread + 1;

        if (!notificationID.includes(n._id)) {
          notificationID.push(n._id);
        }
      }
    });
    setUnreadNotification(unread);
  }, [allNotificationsData, notificationID]);

  const handleNotification = () => {
    setShowNotification(!showNotification);
    axios.patch("http://localhost:5000/notifications", notificationID).then(() => {});
  };

  // if (!role) {
  //   return <p>loading........</p>;
  // }
  return (
    <div className="py-5 flex justify-between items-center bg-[#F1F6FA] ">
      <div className="">
        <div className="form-control hidden xl:block">
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
      <div className="flex items-center gap-5">
        {/* <NavLink to="/dashboard/notification"> */}

        <button className="tooltip  tooltip-left tooltip-primary relative" data-tip="Notification" type="button" onClick={handleNotification}>
          <MdOutlineNotificationsActive
            className={` ml-2 transition-all duration-300 ${showNotification ? "bg-my-primary text-white bg-opacity-70 p-2 rounded-full w-12 h-12" : "w-10 h-10"}`}
            src="https://i.ibb.co/8zxdmM6/notification.png"
            alt="upload images"
          />
          <span className="absolute -top-2 -right-2 bg-yellow-500 px-2 py-1 rounded-full">{unreadNotification}</span>
        </button>

        {role !== "user" && (
          <NavLink to="/dashboard/images">
            <img title="Upload Images" className="w-10 h-10 ml-2" src="https://i.ibb.co/sqVY4RR/gallery.png" alt="upload images" />
          </NavLink>
        )}

        {role === "user" && (
          <NavLink to="/dashboard/reward-points" className="tooltip  tooltip-bottom tooltip-primary" data-tip="Reword">
            <GiLaurelsTrophy className="w-8 h-8" src={rewordIcon} alt="reword points" />
          </NavLink>
        )}

        <NavLink to="/dashboard/profile">
          <figure>
            <img alt="User" className="w-8 h-8 object-cover rounded-full ring ring-my-primary  ring-offset-2" src={user?.photoURL} />
          </figure>
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
