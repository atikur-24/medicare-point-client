import { useCallback, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LabDetails from "./LabDetails";

const CheckCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="container mx-auto ">
      <div className="relative">
        <div className={`bg-white  w-full md:w-96  rounded-l-lg border-4  border-[#f59e0b] z-40  fixed  p-6 bottom-0 right-0  ${isOpen ? "block" : "hidden"}`}>
          <p className="text-lg text-my-primary font-medium">2 Items added to your cart</p>
          <div className="flex justify-between mt-6 items-center">
            <div className="space-y-2">
              <Link to="/labPayment" className="my-btn">
                Checkout
              </Link>
            </div>
            <div>
              <button onClick={toggleOpen} className=" capitalize text-my-primary font-bold inline-flex items-center " type="button">
                view Details
                <span>
                  <FaAngleUp className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <LabDetails open={isOpen} toggleOpen={toggleOpen} />
      </div>
    </div>
  );
};

export default CheckCard;
