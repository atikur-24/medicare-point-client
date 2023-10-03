import axios from "axios";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useLabCart from "../../../../hooks/useLabCart";

const LabButton = ({ labAddCart }) => {
  const [, refetch] = useLabCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handlerLab = () => {
    if (user) {
      axios.post("http://localhost:5000/labsCart", labAddCart).then((res) => {
        if (res.data.insertedId) {
          refetch();
          toast.success("Lab Added Success", { position: "top-center", theme: "colored", autoClose: 3000, pauseOnHover: false });
        }
      });
    } else {
      Swal.fire({
        title: "Please login ",
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
    <div className="">
      <button onClick={handlerLab} type="button" className="my-btn w-full">
        Book Now
      </button>
    </div>
  );
};

export default LabButton;
