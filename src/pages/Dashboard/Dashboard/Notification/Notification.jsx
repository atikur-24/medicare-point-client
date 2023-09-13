import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteNotificationsApi } from "../../../../Features/Notifications/deleteNotifications";
import { fetchNotificationsByEmail } from "../../../../Features/Notifications/fetchNotificationsByEmail";
import deleteIcon from "../../../../assets/Lottie/deleteIcon.json";
import { AuthContext } from "../../../../contexts/AuthProvider";
import "./Notification.css";

const Notification = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { allNotifications } = useSelector((state) => state.notificationsByEmail);

  useEffect(() => {
    const email = user?.email || "";
    dispatch(fetchNotificationsByEmail(email));
  }, [user?.email, dispatch, loading]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        dispatch(deleteNotificationsApi(id)).then((res) => {
          if (res.payload?.deletedCount > 0);
          setLoading(false);
        });
      }
    });
  };

  return (
    <div className="hide-scrollbar border border-gray-3 p-5 mt-10 w-96 absolute top-14 right-5 rounded-lg z-20 bg-card h-auto max-h-[85%] overflow-y-scroll ">
      <h3 className="text-xl lg:text-xl  font-extrabold  uppercase font-nunito border-b pb-1 mb-4 border-my-primary">Notifications</h3>

      <div>
        {allNotifications.map((n) => (
          <div key={n._id}>
            <Link to={`/dashboard/${n?.url}`} className="notification-card hover:scale-105 transition-all hover:bg-my-primary hover:bg-opacity-10 duration-300 cursor-pointer flex items-center gap-4   p-2 rounded-md my-2 relative">
              <img className="w-14 h-14 rounded-full ring-offset-2 ring-2 ring-info" src={n?.photoURL} alt="notification icon" />
              <div className="">
                <h4 className="font-semibold">New {n?.name} order</h4>
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
            </Link>
          </div>
        ))}

        <div className="notification-card hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-4 bg-card p-2 rounded-md my-2 relative">
          <img className="w-14 h-14" src="https://i.ibb.co/P5CVzKZ/gift.png" alt="notification icon" />
          <div className="">
            <h4 className="font-semibold">New Medicines order</h4>
            <p>message: transaction id</p>
            <p className="text-my-primary text-sm">12 Sep 2023</p>
            <MdDelete className="delete-icon transition-all duration-300 text-white text-xl bg-my-primary rounded-full p-1 absolute bottom-4 right-3 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
