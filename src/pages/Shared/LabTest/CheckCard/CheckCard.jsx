import { useCallback, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLabCart from "../../../../hooks/useLabCart";
import LabDetails from "../LabDetails/LabDetails";

const CheckCard = () => {
  const [labCart] = useLabCart();
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  return (
    <div className="container mx-auto ">
      <div className="relative">
        <div
          className={`fixed  bottom-0 right-0  z-40 w-full  rounded-l-lg border-[3px]  border-[#FCB716]  bg-white p-6 md:w-96  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p className="font-nunito text-lg font-bold capitalize text-my-primary">
            <span className="rounded-full bg-my-primary  px-2 py-1 text-white">
              {labCart?.length || 0}
            </span>{" "}
            Items added to your cart
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="space-y-2">
              <Link to="/labPayment" className="my-btn">
                Checkout
              </Link>
            </div>
            <div>
              <button
                onClick={toggleOpen}
                className=" inline-flex items-center font-semibold capitalize text-my-primary "
                type="button"
              >
                view Details
                <span>
                  <FaAngleUp className="h-6 w-6" />
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
