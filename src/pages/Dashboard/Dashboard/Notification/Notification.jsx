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
    <div className="hide-scrollbar bg-card absolute right-5 top-14 z-30 mt-8 h-auto max-h-[85vh] w-96 overflow-y-scroll rounded-lg border border-gray-3 p-5 ">
      <h3 className="mb-4 border-b  border-my-primary  pb-1 font-nunito text-xl font-extrabold uppercase lg:text-xl">
        Notifications
      </h3>

      <div>
        {allNotifications.map((n) => (
          <div key={n._id}>
            <div
              className={`${
                n?.read === "no" ? "bg-my-accent/10" : ""
              } notification-card relative my-2 flex  items-center gap-4 rounded-md p-2   transition-all duration-300 hover:scale-105 hover:bg-my-primary/10`}
            >
              <Link to={`/${n?.url}`}>
                <figure className="cursor-pointer">
                  <img
                    className=" !h-[56px] w-[56px] !max-w-[56px]  rounded-full ring-2 ring-info ring-offset-2"
                    src={n?.photoURL}
                    alt="notification icon"
                  />
                </figure>
              </Link>
              <div className="">
                <Link to={`/${n?.url}`}>
                  <h4 className="cursor-pointer font-semibold">{n?.name}</h4>
                </Link>
                <p>{n?.deliveryTime}</p>
                <p className="text-sm text-my-primary">{n?.date}</p>
                <Lottie
                  onClick={() => {
                    handleDelete(n._id);
                  }}
                  loop
                  animationData={deleteIcon}
                  className="delete-icon absolute bottom-4 right-3 h-10 w-10  cursor-pointer rounded-full bg-gray-3 p-1 text-xl transition-all duration-300 "
                />
              </div>
            </div>
          </div>
        ))}

        <Link
          to="/medicines"
          className="notification-card relative my-2 flex  cursor-pointer items-center gap-4 rounded-md p-2   transition-all duration-300 hover:scale-105 hover:bg-my-primary/10"
        >
          <img
            className="h-14 w-14 rounded-full ring-2 ring-info ring-offset-2"
            src="https://i.ibb.co/rxNPcjM/business.png"
            alt="notification icon"
          />
          <div className="">
            <h4 className="font-semibold">
              Welcome,{" "}
              <span className="text-my-primary">{user?.displayName}</span>
            </h4>
            <p>50TK off on your first order</p>
            <p className="text-sm text-my-primary">Promo code: WELCOME50</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Notification;
