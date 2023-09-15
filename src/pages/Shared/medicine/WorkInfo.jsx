import { AiFillAndroid, AiOutlineApple } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";

const WorkInfo = () => {
  return (
    <div className="my-container grid xl:grid-cols-5 md:grid-cols-2 gap-4 md:gap-0 lg:gap-0 divide-x divide-gray-3">
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className="relative flex justify-center rounded-full w-16 h-16 items-center mx-auto">
          <div className="border-2 border-my-primary flex animate-spin transition-all justify-center rounded-full w-16 h-16 items-center mx-auto border-dotted absolute" />
          <FaTruckFast className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold lg:font-bold tracking-wide">FREE SHIPPING ON ORDER OVER ৳700</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className="relative flex justify-center rounded-full w-16 h-16 items-center mx-auto">
          <div className="border-2 border-my-primary flex animate-spin transition-all justify-center rounded-full w-16 h-16 items-center mx-auto border-dotted absolute" />
          <LuPhoneCall className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold lg:font-bold tracking-wide">
          HAVE A QUESTIONS? <br /> +880 789 999
        </p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className="relative flex justify-center rounded-full w-16 h-16 items-center mx-auto">
          <div className="border-2 border-my-primary flex animate-spin transition-all justify-center rounded-full w-16 h-16 items-center mx-auto border-dotted absolute" />
          <TbCurrencyTaka className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold lg:font-bold tracking-wide">100% MONEY BACK GUARANTEE</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className="relative flex justify-center rounded-full w-16 h-16 items-center mx-auto">
          <div className="border-2 border-my-primary flex animate-spin transition-all justify-center rounded-full w-16 h-16 items-center mx-auto border-dotted absolute" />
          <BsFillBagCheckFill className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold lg:font-bold tracking-wide">SOPPING ON AUTHENTIC MEDICINES</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-x-4 space-y-4 bg-my-primary bg-opacity-90 md:col-span-2 xl:col-span-1">
        <button type="button" className="my-btn-outline tracking-wide">
          <AiOutlineApple size={24} />
          DownLoad
        </button>
        <button type="button" className="my-btn-outline tracking-wide">
          <AiFillAndroid size={24} />
          DownLoad
        </button>
      </div>
    </div>
  );
};

export default WorkInfo;
