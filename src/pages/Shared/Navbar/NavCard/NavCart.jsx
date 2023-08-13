import { FaCartPlus } from "react-icons/fa";

const NavCart = () => {
  return (
    <div className="relative py-3">
      <FaCartPlus className="h-6 w-6 lg:h-8 lg:w-8 txt-primary" />
      <p className="absolute bottom-5 left-6 lg:left-8 lg:bottom-7 text-xl font-medium">0</p>
    </div>
  );
};

export default NavCart;
