import { AiOutlineFileProtect } from "react-icons/ai";
import { TbDeviceTabletCheck, TbTruckDelivery } from "react-icons/tb";
import { TfiCup, TfiShoppingCart } from "react-icons/tfi";
import groupImg from "../../../assets/images/AboutUs/group.webp";

const OurPromise = () => {
  return (
    <div className="my-14">
      <h2 className="text-center text-xl font-medium capitalize text-title-color md:text-3xl md:font-semibold xl:text-4xl xl:font-bold xl:tracking-wide">
        Our Promise
      </h2>
      <div className="mt-10 flex flex-col justify-between xl:flex-row">
        <div className="w-full">
          <img
            className="h-full w-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            src={groupImg}
            alt=""
          />
        </div>
        <div className="w-full space-y-10 rounded-b-lg bg-my-primary p-8 text-white md:rounded-r-lg md:rounded-bl-none">
          <div className="flex items-center gap-6">
            <TfiShoppingCart className="text-4xl" />
            <div>
              <h4 className="text-base font-semibold lg:text-lg">
                Biggest variety
              </h4>
              <p className="text-sm">
                We offer million of product at a great value for our customer.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <TfiCup className="text-4xl" />
            <div>
              <h4 className="text-base font-semibold lg:text-lg">Best Price</h4>
              <p className="text-sm">
                We provide great value by offering competitive price on all our
                product.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <TbDeviceTabletCheck className="text-4xl" />
            <div>
              <h4 className="text-base font-semibold lg:text-lg">
                Ease & Speed
              </h4>
              <p className="text-sm">
                Visit Our website for a smooth shopping experience.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <TbTruckDelivery className="text-4xl" />
            <div>
              <h4 className="text-base font-semibold lg:text-lg">
                Fast Delivery
              </h4>
              <p className="text-sm">
                We aim to please our customers with fast delivery and easy
                tracking system.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <AiOutlineFileProtect className="text-4xl" />
            <div>
              <h4 className="text-base font-semibold lg:text-lg">
                100% Protected
              </h4>
              <p className="text-sm">
                We provide 100% protection for your purchase from click to
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
