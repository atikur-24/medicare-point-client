import axios from "axios";
import { toast } from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLabCart from "../../../../hooks/useLabCart";
import LabAddCard from "../LabAddCard/LabAddCard";

const LabDetails = ({ open, toggleOpen }) => {
  const [labCart, refetch] = useLabCart();

  const handlerLabRemove = (id) => {
    axios.delete(`http://localhost:5000/labCart/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.error("Leb Removed");
      }
    });
  };

  return (
    <div className={`${open ? "hidden" : "block"} z-20 fixed  bg-[#F2FBFF] border-[3px] border-solid border-[#FCB716] rounded-l-lg max-h-[600px]  lg:max-h-[500px] 2xl:max-h-[670px]  md:w-96 w-full overflow-auto right-0 bottom-0  `}>
      <div className="relative">
        <div className="fixed rounded-t-lg left-1 right-4 md:left-auto md:right-auto p-4 bg-card  drop-shadow-lg z-10">
          <div className="flex gap-6 justify-evenly">
            <p className="text-base text-title-color font-bold capitalize font-nunito">
              <span className="bg-my-primary text-white  rounded-full py-1 px-2">{labCart?.length || 0}</span> Item added to your cart
            </p>
            <button onClick={toggleOpen} type="button" className=" capitalize text-my-primary font-medium inline-flex items-center text-sm">
              Show Less
              <span>
                <FaAngleDown className="w-6 h-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10 mb-20">
        {labCart.map((cart) => (
          <LabAddCard cart={cart} key={cart._id} handlerLabRemove={handlerLabRemove} />
        ))}

        <div className=" w-full md:w-96 fixed  bottom-0  right-0 p-4 bg-card   z-10 border-x-[3px] border-solid  border-b-[3px] border-[#FCB716]">
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
