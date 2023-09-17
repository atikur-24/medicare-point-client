import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import whyUs from "../../../assets/images/AboutUs/Testimonial.webp";

const WhyChoseUs = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between mt-14 gap-6 items-center">
      <div className="w-full space-y-6">
        <p className=" uppercase text-my-primary tracking-widest font-semibold">Why Chose Us</p>
        <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-title-color">Best services available for every single customer.</h2>
        <img className="w-11/12" src={whyUs} alt="why us images" />
      </div>
      <div className="w-full space-y-8">
        <div className="bg-white rounded-md p-6 flex items-center gap-6 border-[1px] border-gray-3 shadow-md">
          <div className=" text-my-primary text-3xl lg:text-5xl">
            <FaHeartbeat />
          </div>
          <div className=" space-y-3">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-500">Honesty & transparency</h3>
            <p className="text-gray-5 text-sm lg:text-base">Honesty and transparency build trust through truthful, open, and sincere interactions, fostering strong relationships.</p>
          </div>
        </div>
        <div className="bg-white rounded-md p-6 flex items-center gap-6 border-[1px] border-gray-3 shadow-md">
          <div className=" text-my-primary text-3xl lg:text-5xl">
            <MdOutlineDiscount />
          </div>
          <div className=" space-y-3">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-500">Extra Discount</h3>
            <p className="text-gray-5 text-sm lg:text-base">Additional price reduction offered, enhancing value and incentivizing purchases, for a limited time or quantity.</p>
          </div>
        </div>
        <div className="bg-white rounded-md p-6 flex items-center gap-6 border-[1px] border-gray-3 shadow-md">
          <div className=" text-my-primary text-3xl lg:text-5xl">
            <TbTruckDelivery />
          </div>
          <div className=" space-y-3">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-500">Super Fast delivery</h3>
            <p className="text-gray-5 text-sm lg:text-base">Swift delivery exceeding standards, ensuring products arrive quickly, delighting customers with efficient service..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
