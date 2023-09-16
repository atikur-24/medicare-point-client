import { AiOutlineFileProtect } from "react-icons/ai";
import { TbDeviceTabletCheck, TbTruckDelivery } from "react-icons/tb";
import { TfiCup, TfiShoppingCart } from "react-icons/tfi";
import groupImg from "../../../assets/images/AboutUs/group.webp";

const OurPromise = () => {
  return (
    <div className="my-14">
      <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide capitalize text-title-color text-center">Our Promise</h2>
      <div className="mt-10 flex flex-col xl:flex-row justify-between">
        <div className="w-full">
          <img className="w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none" src={groupImg} alt="" />
        </div>
        <div className="bg-my-primary w-full text-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-8 space-y-10">
          <div className="flex gap-6 items-center">
            <TfiShoppingCart className="text-4xl" />
            <div>
              <h4 className="text-base lg:text-lg font-semibold">Biggest variety</h4>
              <p className="text-sm">We offer million of product at a great value for our customer.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <TfiCup className="text-4xl" />
            <div>
              <h4 className="text-base lg:text-lg font-semibold">Best Price</h4>
              <p className="text-sm">We provide great value by offering competitive price on all our product.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <TbDeviceTabletCheck className="text-4xl" />
            <div>
              <h4 className="text-base lg:text-lg font-semibold">Ease & Speed</h4>
              <p className="text-sm">Visit Our website for a smooth shopping experience.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <TbTruckDelivery className="text-4xl" />
            <div>
              <h4 className="text-base lg:text-lg font-semibold">Fast Delivery</h4>
              <p className="text-sm">We aim to please our customers with fast delivery and easy tracking system.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <AiOutlineFileProtect className="text-4xl" />
            <div>
              <h4 className="text-base lg:text-lg font-semibold">100% Protected</h4>
              <p className="text-sm">We provide 100% protection for your purchase from click to delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
