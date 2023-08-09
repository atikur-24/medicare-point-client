import { MdAddShoppingCart } from "react-icons/md";

const NavCard = () => {
  return (
    <button
      type="button"
      className="flex items-center btn btn-sm border-none w-32 h-10 hover:bg-[#8a8989] text-black bg-[#b4b4b4]"
    >
      <p>Card</p>
      <span className="flex">
        <MdAddShoppingCart className=" text-2xl" /> <span>0</span>
      </span>
    </button>
  );
};

export default NavCard;
