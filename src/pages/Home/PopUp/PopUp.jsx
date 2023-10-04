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
    <div
      className={`fixed top-0 z-50 flex h-screen w-full items-center justify-center transition-all duration-700 ${isPopUp} bg-black/70`}
    >
      <div className="bg-card relative w-10/12 rounded-xl lg:w-11/12 xl:w-1/2">
        <button
          onClick={() => setPopUp("hidden")}
          type="button"
          className="btn btn-circle btn-sm absolute -right-3 -top-3 border-none bg-red-500 text-white transition-all duration-300 hover:bg-red-400"
        >
          x
        </button>
        <div className="grid grid-cols-1 items-center gap-5 text-my-primary lg:grid-cols-2 lg:gap-0">
          <div className="order-2 space-y-3 px-5 pb-5 text-left lg:order-1 lg:space-y-5 lg:pb-0 lg:pl-8 lg:pr-0">
            <p>Limited time only</p>
            <h2 className="text-xl font-medium lg:text-3xl lg:font-semibold">
              Get 50Taka off <br />
              on your first order
            </h2>
            <div className="flex items-center justify-center gap-3 rounded border border-my-accent py-1 text-lg font-medium lg:py-2 lg:text-xl lg:font-semibold">
              <p className="">Promo code:</p>
              <button
                type="button"
                onClick={copyPromoCode}
                className="cursor-pointer text-my-accent"
              >
                WELCOME50
              </button>
            </div>
            <Link
              onClick={() => setPopUp("hidden")}
              to="/medicines"
              className="cart-btn-outline"
              style={{ width: "50%" }}
            >
              Shop Now
            </Link>
          </div>
          <div className="order-1 mx-auto lg:order-2">
            <img
              className="h-[200px] w-full object-cover md:h-[300px] lg:h-[350px]"
              src={img}
              alt="pop-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
