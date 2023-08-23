import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import LabAddCard from "./LabAddCard";

const LabDetails = ({ open, toggleOpen }) => {
  return (
    <div className={`${open ? "hidden" : "block"} z-10 fixed  bg-[#F2FBFF] border-[3px] border-solid border-[#FCB716] rounded-l-lg max-h-[600px]  lg:max-h-[500px] 2xl:max-h-[670px]  md:w-96 w-full overflow-auto right-0 bottom-0  `}>
      <div className="relative">
        <div className="fixed rounded-t-lg left-1 right-4 md:left-auto md:right-auto p-4 bg-card  drop-shadow-lg z-10">
          <div className="flex gap-6 justify-evenly">
            <p className="text-lg text-title-color font-medium">1 Item added to your cart</p>
            <button onClick={toggleOpen} type="button" className=" capitalize text-my-primary font-medium inline-flex items-center">
              Show Less
              <span>
                <FaAngleDown className="w-6 h-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10 mb-20">
        <LabAddCard />
        <LabAddCard />
        <LabAddCard />
        <LabAddCard />
        <LabAddCard />

        <div className=" w-full md:w-96 fixed  bottom-0  right-0 p-4 bg-card   z-10 border-x-[3px] border-solid  border-b-[3px] border-[#FCB716]">
          <Link to="/labPayment">
            <button type="button" className="my-btn w-full">
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;
