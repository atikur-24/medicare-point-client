import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCartMedicines from "../../../../hooks/useCartMedicines";

const NavCart = () => {
  const [cart] = useCartMedicines();
  return (
    <Link to="/medicineCarts" className="relative py-3">
      <FaCartPlus className="h-6 w-6 lg:h-8 lg:w-8 text-my-primary" />
      <p className="absolute bottom-5 left-6 lg:left-8 lg:bottom-7 text-white py-[1px] px-2 rounded-full bg-my-accent font-medium">{cart?.length}</p>
    </Link>
  );
};

export default NavCart;
