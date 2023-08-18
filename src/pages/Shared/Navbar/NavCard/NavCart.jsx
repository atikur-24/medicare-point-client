import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCartMedicines from "../../../../hooks/useCartMedicines";

const NavCart = () => {
  const [cart, refetch] = useCartMedicines();
  refetch();
  return (
    <Link to="/medicineCarts" className="relative py-3">
      <FaCartPlus className="h-6 w-6 lg:h-8 lg:w-8 txt-primary" />
      <small className="absolute bottom-5 left-6 lg:left-8 lg:bottom-7 text-my-primary bg-lite rounded-full p-1 font-medium">{cart?.data?.length}</small>
    </Link>
  );
};

export default NavCart;
