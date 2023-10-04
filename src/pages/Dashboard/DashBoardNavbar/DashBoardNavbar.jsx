import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";
import rewordIcon from "../../../assets/Dashboard-icons/reward.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import SendNotification from "../AdminDashboard/SendNotification/SendNotification";

const DashBoardNavbar = ({
  setShowNotification,
  showNotification,
  allNotificationsData,
}) => {
  const { role, user } = useContext(AuthContext);
  const [unreadNotification, setUnreadNotification] = useState(0);

  const [notificationID, setNotificationID] = useState([]);
  useEffect(() => {
    let unread = 0;
    allNotificationsData?.forEach((n) => {
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
    axios
      .patch(`${import.meta.env.VITE_API_URL}/notifications`, notificationID)
      .then(() => {});
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-[#F1F6FA] py-5 ">
        <div className="">
          <div className="stats hidden shadow xl:block">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                {role} Dashboard
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {/* <NavLink to="/dashboard/notification"> */}

          <button
            className="tooltip-primary tooltip tooltip-left"
            data-tip="Notification"
            type="button"
            onClick={handleNotification}
          >
            <MdOutlineNotificationsActive
              className={`relative  ml-2  h-12  w-12 rounded-full bg-my-primary object-cover p-2 text-primary transition-all  duration-300 ${
                showNotification
                  ? "bg-my-primary/70 text-white"
                  : "bg-opacity-20"
              }`}
              src="https://i.ibb.co/8zxdmM6/notification.png"
              alt="upload images"
            />
            <div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white ">
              {unreadNotification}
            </div>
            {/* <div className="absolute -top-3 -right-2 bg-yellow-500  rounded-full">
            <span className="px-1.5 py-2">{unreadNotification}</span>
          </div> */}
          </button>

          {role === "admin" && (
            <button
              onClick={() => window.my_modal_sendNotification.showModal()}
              type="button"
            >
              <img
                title="Announcement"
                className="ml-2 h-10 w-10"
                src="https://i.ibb.co/9h555j1/offer.png"
                alt=""
              />
            </button>
          )}
          {role !== "user" && (
            <NavLink to="/dashboard/images">
              <img
                title="Upload Images"
                className="ml-2 h-10 w-10"
                src="https://i.ibb.co/sqVY4RR/gallery.png"
                alt="upload images"
              />
            </NavLink>
          )}

          {role === "user" && (
            <NavLink
              to="/dashboard/reward-points"
              className="tooltip-primary  tooltip tooltip-bottom !font-normal !capitalize"
              data-tip="Reword"
            >
              <GiLaurelsTrophy className="h-8 w-8" />
            </NavLink>
          )}

          <NavLink to="/dashboard/profile">
            <figure>
              <img
                alt="User"
                className="h-8 w-8 rounded-full object-cover ring ring-my-primary  ring-offset-2"
                src={user?.photoURL}
              />
            </figure>
          </NavLink>
        </div>
      </div>
      <dialog id="my_modal_sendNotification" className="modal">
        <SendNotification email={user?.email} />
      </dialog>
    </div>
  );
};

export default DashBoardNavbar;
