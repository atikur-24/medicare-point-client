import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiPagesLine } from "react-icons/ri";

const OrderTrackIcons = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div>
        <div className="rounded-full border border-my-primary p-2 lg:p-4">
          <RiPagesLine className="text-xl text-my-primary md:text-2xl lg:text-6xl " />
        </div>
        <p className="text-center ">Order</p>
      </div>

      <hr className="w-8 rounded-full border-2 border-gray-5 md:w-20 lg:w-36 lg:border-4" />
      <div>
        <div className="rounded-full border border-gray-5 p-2 lg:p-4">
          <BsBoxSeam className="text-xl text-gray-5 md:text-2xl lg:text-6xl " />
        </div>
        <p className="text-center">Packaging</p>
      </div>

      <hr className=" w-8 rounded-full border-2 border-gray-5 md:w-20 lg:w-36 lg:border-4" />
      <div>
        <div className="rounded-full border border-gray-5 p-2 lg:p-4">
          <LiaShippingFastSolid className=" text-xl text-gray-5 md:text-2xl lg:text-6xl " />
        </div>
        <p className="text-center">Delivery</p>
      </div>

      <hr className="w-8 rounded-full border-2 border-gray-5 md:w-20 lg:w-36 lg:border-4" />
      <div>
        <div className="rounded-full border border-gray-5 p-2 lg:p-4">
          <HiOutlineHome className="text-xl text-gray-5 md:text-2xl lg:text-6xl " />
        </div>
        <p className="text-center">Success</p>
      </div>
    </div>
  );
};

export default OrderTrackIcons;
