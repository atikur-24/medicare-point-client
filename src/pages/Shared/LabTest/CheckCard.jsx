import { Link } from "react-router-dom";

const CheckCard = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white  w-full md:w-96  rounded-l-lg border-4  border-[#f59e0b] z-40 fixed  p-6 bottom-0 ">
        <div className="space-y-2">
          <p className="text-lg text-my-primary font-medium">2 Items added to your cart</p>
          <Link to="/labPayment" className="my-btn">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckCard;
