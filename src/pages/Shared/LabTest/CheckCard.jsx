import { Link } from "react-router-dom";

const CheckCard = () => {
  return (
    <div className="bg-white px-4  rounded-l-lg border-4 border-[#f59e0b]   fixed top-[14.5%] right-0 z-40">
      <div className="space-y-2">
        <p className="text-lg text-my-primary font-medium">2 Items added to your cart</p>
        <Link to="/labPayment" className="my-btn">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CheckCard;
