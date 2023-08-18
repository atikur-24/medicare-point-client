import axios from "axios";
import { BiCartAdd } from "react-icons/bi";
import { toast } from "react-toastify";

const AddCartButton = ({ cartMedicine, cls }) => {
    const handleAddToCart = () => {
        axios.post("http://localhost:5000/medicineCarts", cartMedicine).then(() => toast.success("Item Added Success", { position: "top-center", theme: "colored", autoClose: 3000 }));
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
