import { FaCapsules } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MediRequest = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRequestMedicine = () => {
    if (user) {
      document.getElementById("my_modal_mediRequest").showModal();
    } else {
      Swal.fire({
        title: "You Are Not Login Yet",
        text: "Please login for request new medicine",
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
    <button type="button" className="my-btn-outline !rounded-md tracking-wide" title="Request Medicine" onClick={handleRequestMedicine}>
      <FaCapsules className="text-xl" /> Request Medicine
    </button>
  );
};

export default MediRequest;
