import axios from "axios";
import { BiCartAdd } from "react-icons/bi";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useCartMedicines from "../hooks/useCartMedicines";

const AddCartButton = ({ cartMedicine, cls }) => {
  const [, refetch] = useCartMedicines();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user) {
      axios.post("http://localhost:5000/medicineCarts", cartMedicine).then((result) => {
        if (result.data.insertedId || result.data.modifiedCount) {
          toast.success("Item Added Success", { position: "top-center", theme: "colored", autoClose: 3000, pauseOnHover: false });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please login for cart item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#16b4ac",
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
    <div>
      <button onClick={handleAddToCart} className={cls} type="button">
        <BiCartAdd className="text-xl" /> add to cart
      </button>
    </div>
  );
};

export default AddCartButton;
