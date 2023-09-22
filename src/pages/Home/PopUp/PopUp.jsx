import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import img from "../../../assets/images/popupGirl.webp";

const PopUp = ({ isPopUp, setPopUp }) => {
  const copyPromoCode = () => {
    navigator.clipboard.writeText("WELCOME50");
    toast.success("Promo code copied", {
      position: "top-center",
    });
  };

  return (
    <div className={`fixed top-0 z-50 w-full h-screen flex justify-center items-center transition-all duration-700 ${isPopUp} bg-black bg-opacity-70`}>
      <div className="w-10/12 lg:w-11/12 xl:w-1/2 bg-card rounded-xl relative">
        <button onClick={() => setPopUp("hidden")} type="button" className="btn btn-circle btn-sm bg-red-500 hover:bg-red-400 text-white transition-all duration-300 border-none absolute -right-3 -top-3">
          x
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-my-primary lg:gap-0 items-center">
          <div className="text-left px-5 lg:pl-8 lg:pr-0 pb-5 lg:pb-0 space-y-3 lg:space-y-5 order-2 lg:order-1">
            <p>Limited time only</p>
            <h2 className="text-xl lg:text-3xl font-medium lg:font-semibold">
              Get 50Taka off <br />
              on your first order
            </h2>
            <div className="flex items-center gap-3 justify-center border border-my-accent py-1 lg:py-2 rounded text-lg lg:text-xl font-medium lg:font-semibold">
              <p className="">Promo code:</p>
              <button type="button" onClick={copyPromoCode} className="cursor-pointer text-my-accent">
                WELCOME50
              </button>
            </div>
            <Link onClick={() => setPopUp("hidden")} to="/medicines" className="cart-btn-outline" style={{ width: "50%" }}>
              Shop Now
            </Link>
          </div>
          <div className="order-1 lg:order-2 mx-auto">
            <img className="h-[200px] md:h-[300px] lg:h-[350px] w-full object-cover" src={img} alt="pop-up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
