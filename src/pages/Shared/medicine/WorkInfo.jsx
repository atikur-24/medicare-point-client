import { AiFillAndroid, AiOutlineApple } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";

const WorkInfo = () => {
  return (
    <div className="my-container grid md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-0 lg:gap-0">
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className=" absolute top-0 left-0 w-20  border-t-4  bg-white border-my-accent" />

        <div className="border-2 border-my-primary flex animate-bounce justify-center rounded-full w-16 h-16 items-center mx-auto border-dashed">
          <FaTruckFast className="text-my-primary" size={24} />
        </div>
        <p className="font-bold">FREE SHIPPING ON ORDER OVER $99</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className=" absolute top-0 left-0 w-20  border-t-4  bg-white border-my-accent" />

        <div className="border-2 border-my-primary flex animate-bounce justify-center rounded-full w-16 h-16 items-center mx-auto border-dashed">
          <LuPhoneCall className="text-my-primary" size={24} />
        </div>
        <p className="font-bold">HAVE A QUESTIONS? +10800 789 0000</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className=" absolute top-0 left-0 w-20  border-t-4  bg-white border-my-accent" />

        <div className="border-2 border-my-primary flex animate-bounce justify-center rounded-full w-16 h-16 items-center mx-auto border-dashed">
          <TbCurrencyTaka className="text-my-primary" size={24} />
        </div>
        <p className="font-bold">100% MONEY BACK GUARANTEE</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-y-4 bg-card">
        <div className=" absolute top-0 left-0 w-20  border-t-4  bg-white border-my-accent" />

        <div className="border-2 border-my-primary flex animate-bounce justify-center rounded-full w-16 h-16 items-center mx-auto border-dashed">
          <BsFillBagCheckFill className="text-my-primary" size={24} />
        </div>
        <p className="font-bold">30 DAYS RETURN SERVICE</p>
      </div>
      <div className="relative shadow-lg text-center py-10 px-2 space-x-4 space-y-4 bg-card ">
        <div className=" absolute top-0 left-0 w-20  border-t-4  bg-white border-my-accent" />
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
