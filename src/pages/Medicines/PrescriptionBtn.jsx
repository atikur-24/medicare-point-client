import { FaFilePrescription } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const PrescriptionBtn = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleUploadPrescription = () => {
    if (user) {
      window.my_modal_PrescriptionUpload.showModal();
    } else {
      Swal.fire({
        title: "You Are Not Login Yet",
        text: "Please login for upload prescription",
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
    <button type="button" className="my-btn-outline !rounded-md tracking-wide" title="upload prescription" onClick={handleUploadPrescription}>
      <FaFilePrescription className="text-xl" /> Upload Prescription
    </button>
  );
};

export default PrescriptionBtn;
