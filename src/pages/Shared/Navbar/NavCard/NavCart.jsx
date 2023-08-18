import { FaCartPlus } from "react-icons/fa";

const NavCart = () => {
  return (
    <div className="relative py-3">
      <FaCartPlus className="h-6 w-6 lg:h-8 lg:w-8 text-my-primary" />
      <p className="absolute bottom-5 left-6 lg:left-8 lg:bottom-7 text-white py-[1px] px-2 rounded-full bg-my-accent font-medium">0</p>
    </div>
  );
};

export default NavCart;
