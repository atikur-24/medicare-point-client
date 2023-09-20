import Lottie from "lottie-react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNotificationsApi } from "../../../../Features/Notifications/deleteNotifications";
import deleteIcon from "../../../../assets/Lottie/deleteIcon.json";
import { AuthContext } from "../../../../contexts/AuthProvider";
import "./Notification.css";

const Notification = ({ allNotifications, setLoading }) => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setLoading(true);
    dispatch(deleteNotificationsApi(id)).then((res) => {
      if (res.payload?.deletedCount > 0) {
        toast.success("Removed successfully");
      }
      setLoading(false);
    });
  };

  return (
    <div className="hide-scrollbar border border-gray-3 p-5 mt-8 w-96 absolute top-14 right-5 rounded-lg z-30 bg-card h-auto max-h-[85vh] overflow-y-scroll ">
      <h3 className="text-xl lg:text-xl  font-extrabold  uppercase font-nunito border-b pb-1 mb-4 border-my-primary">Notifications</h3>

      <div>
        {allNotifications.map((n) => (
          <div key={n._id}>
            <div
              className={`${
                n?.read === "no" ? "bg-my-accent bg-opacity-10" : ""
              } notification-card hover:scale-105 transition-all hover:bg-my-primary hover:bg-opacity-10 duration-300 flex items-center gap-4   p-2 rounded-md my-2 relative`}
            >
              <Link to={`/${n?.url}`}>
                <figure className="cursor-pointer">
                  <img className=" !h-[56px] !max-w-[56px] w-[56px]  rounded-full ring-offset-2 ring-2 ring-info" src={n?.photoURL} alt="notification icon" />
                </figure>
              </Link>
              <div className="">
                <Link to={`/${n?.url}`}>
                  <h4 className="font-semibold cursor-pointer">{n?.name}</h4>
                </Link>
                <p>{n?.deliveryTime}</p>
                <p className="text-my-primary text-sm">{n?.date}</p>
                <Lottie
                  onClick={() => {
                    handleDelete(n._id);
                  }}
                  loop
                  animationData={deleteIcon}
                  className="h-10 w-10 cursor-pointer delete-icon transition-all duration-300  bg-gray-3 text-xl rounded-full p-1 absolute bottom-4 right-3 "
                />
              </div>
            </div>
          </div>
        ))}

        <Link
          to="/medicines"
          className="notification-card hover:scale-105 transition-all hover:bg-my-primary hover:bg-opacity-10 duration-300 cursor-pointer flex items-center gap-4   p-2 rounded-md my-2 relative"
        >
          <img className="w-14 h-14 rounded-full ring-offset-2 ring-2 ring-info" src="https://i.ibb.co/rxNPcjM/business.png" alt="notification icon" />
          <div className="">
            <h4 className="font-semibold">
              Welcome, <span className="text-my-primary">{user?.displayName}</span>
            </h4>
            <p>50TK off on your first order</p>
            <p className="text-my-primary text-sm">Promo code: WELCOME50</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Notification;
