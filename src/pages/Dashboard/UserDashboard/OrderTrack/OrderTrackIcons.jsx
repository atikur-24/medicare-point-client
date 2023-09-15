import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiPagesLine } from "react-icons/ri";

const OrderTrackIcons = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <div>
        <div className="border rounded-full p-2 lg:p-4 border-my-primary">
          <RiPagesLine className="text-xl md:text-2xl lg:text-6xl text-my-primary " />
        </div>
        <p className="text-center ">Order</p>
      </div>

      <hr className="border-2 lg:border-4 rounded-full border-gray-5 w-8 md:w-20 lg:w-36" />
      <div>
        <div className="border rounded-full p-2 lg:p-4 border-gray-5">
          <BsBoxSeam className="text-xl md:text-2xl lg:text-6xl text-gray-5 " />
        </div>
        <p className="text-center">Packaging</p>
      </div>

      <hr className=" border-2 lg:border-4 rounded-full border-gray-5 w-8 md:w-20 lg:w-36" />
      <div>
        <div className="border rounded-full p-2 lg:p-4 border-gray-5">
          <LiaShippingFastSolid className=" text-xl md:text-2xl lg:text-6xl text-gray-5 " />
        </div>
        <p className="text-center">Delivery</p>
      </div>

      <hr className="border-2 lg:border-4 rounded-full border-gray-5 w-8 md:w-20 lg:w-36" />
      <div>
        <div className="border rounded-full p-2 lg:p-4 border-gray-5">
          <HiOutlineHome className="text-xl md:text-2xl lg:text-6xl text-gray-5 " />
        </div>
        <p className="text-center">Success</p>
      </div>
    </div>
  );
};

export default OrderTrackIcons;
