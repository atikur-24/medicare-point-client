import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCartMedicines from "../../../../hooks/useCartMedicines";

const NavCart = () => {
  const [cart] = useCartMedicines();
  return (
    <Link to="/medicineCarts" className="relative py-3">
      <FaCartPlus className="h-6 w-6 text-my-primary lg:h-8 lg:w-8" />
      <small className="absolute bottom-5 left-6 rounded-full bg-my-accent px-[6px] py-[1px] font-medium text-white lg:bottom-7 lg:left-8">
        {cart?.length || 0}
      </small>
    </Link>
  );
};

export default NavCart;
