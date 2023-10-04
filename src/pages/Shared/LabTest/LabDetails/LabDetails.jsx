import axios from "axios";
import { toast } from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLabCart from "../../../../hooks/useLabCart";
import LabAddCard from "../LabAddCard/LabAddCard";

const LabDetails = ({ open, toggleOpen }) => {
  const [labCart, refetch] = useLabCart();

  const handlerLabRemove = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/labCart/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          toast.error("Leb Removed");
        }
      });
  };

  return (
    <div
      className={`${
        open ? "hidden" : "block"
      } fixed bottom-0  right-0 z-20 max-h-[600px] w-full overflow-auto rounded-l-lg  border-[3px] border-solid  border-[#FCB716] bg-[#F2FBFF] md:w-96 lg:max-h-[500px] 2xl:max-h-[670px]  `}
    >
      <div className="relative">
        <div className="bg-card fixed left-1 right-4 z-10 rounded-t-lg p-4 drop-shadow-lg  md:left-auto md:right-auto">
          <div className="flex justify-evenly gap-6">
            <p className="font-nunito text-base font-bold capitalize text-title-color">
              <span className="rounded-full bg-my-primary  px-2 py-1 text-white">
                {labCart?.length || 0}
              </span>{" "}
              Item added to your cart
            </p>
            <button
              onClick={toggleOpen}
              type="button"
              className=" inline-flex items-center text-sm font-medium capitalize text-my-primary"
            >
              Show Less
              <span>
                <FaAngleDown className="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-20 mt-10 p-4">
        {labCart.map((cart) => (
          <LabAddCard
            cart={cart}
            key={cart._id}
            handlerLabRemove={handlerLabRemove}
          />
        ))}

        <div className=" bg-card fixed bottom-0  right-0  z-10 w-full border-x-[3px]   border-b-[3px] border-solid border-[#FCB716]  p-4 md:w-96">
          <Link to="/labPayment">
            <button type="button" className="my-btn w-full">
              Proceed checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;
