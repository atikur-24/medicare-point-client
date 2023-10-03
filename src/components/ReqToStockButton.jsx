import axios from "axios";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const ReqToStockButton = ({ reqToStock, cls }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const date = moment().format("L");
  const handleReqToStock = () => {
    if (user) {
      axios.post("http://localhost:5000/requestToStock", { ...reqToStock, date }).then((result) => {
        if (result.data.insertedId || result.data.modifiedCount) {
          toast.success("Request Sent Successfully", { position: "top-center", autoClose: 3000, pauseOnHover: false });
        }
      });
    } else {
      Swal.fire({
        title: "Please login for cart item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#006F70",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <button onClick={handleReqToStock} className={cls} type="button">
      Request to stock
    </button>
  );
};

export default ReqToStockButton;
