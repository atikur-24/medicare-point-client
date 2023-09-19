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

  return (
    <div className="py-5 flex justify-between items-center bg-[#F1F6FA] ">
      <div>{user?.email}</div>
      <div className="flex items-center gap-5">
        <button className="tooltip tooltip-primary tooltip-left" data-tip="Notification" type="button" onClick={handleNotification}>
          <MdOutlineNotificationsActive
            className={`bg-my-primary  text-primary  p-2  w-12 h-12 object-cover ml-2 transition-all relative rounded-full  duration-300 ${showNotification ? "bg-my-primary text-white bg-opacity-70 " : "bg-opacity-20"}`}
            src="https://i.ibb.co/8zxdmM6/notification.png"
            alt="upload images"
          />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -right-2 ">{unreadNotification}</div>
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
