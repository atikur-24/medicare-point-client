import { AiFillAndroid, AiOutlineApple } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";

const WorkInfo = () => {
  return (
    <div className="my-container grid gap-4 divide-x divide-gray-3 md:grid-cols-2 md:gap-0 lg:gap-0 xl:grid-cols-5">
      <div className="bg-card relative space-y-4 px-2 py-10 text-center shadow-lg">
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full">
          <div className="absolute mx-auto flex h-16 w-16 animate-spin items-center justify-center rounded-full border-2 border-dotted border-my-primary transition-all" />
          <FaTruckFast className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold tracking-wide lg:font-bold">
          FREE SHIPPING ON ORDER OVER ৳700
        </p>
      </div>
      <div className="bg-card relative space-y-4 px-2 py-10 text-center shadow-lg">
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full">
          <div className="absolute mx-auto flex h-16 w-16 animate-spin items-center justify-center rounded-full border-2 border-dotted border-my-primary transition-all" />
          <LuPhoneCall className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold tracking-wide lg:font-bold">
          HAVE A QUESTIONS? <br /> +880 789 999
        </p>
      </div>
      <div className="bg-card relative space-y-4 px-2 py-10 text-center shadow-lg">
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full">
          <div className="absolute mx-auto flex h-16 w-16 animate-spin items-center justify-center rounded-full border-2 border-dotted border-my-primary transition-all" />
          <TbCurrencyTaka className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold tracking-wide lg:font-bold">
          100% MONEY BACK GUARANTEE
        </p>
      </div>
      <div className="bg-card relative space-y-4 px-2 py-10 text-center shadow-lg">
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full">
          <div className="absolute mx-auto flex h-16 w-16 animate-spin items-center justify-center rounded-full border-2 border-dotted border-my-primary transition-all" />
          <BsFillBagCheckFill className="text-my-primary" size={24} />
        </div>
        <p className="font-semibold tracking-wide lg:font-bold">
          SOPPING ON AUTHENTIC MEDICINES
        </p>
      </div>
      <div className="relative space-x-4 space-y-4 bg-my-primary/90 px-2 py-10 text-center shadow-lg  md:col-span-2 xl:col-span-1">
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
