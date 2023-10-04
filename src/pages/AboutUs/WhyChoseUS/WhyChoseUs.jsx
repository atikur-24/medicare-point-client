import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import whyUs from "../../../assets/images/AboutUs/Testimonial.webp";

const WhyChoseUs = () => {
  return (
    <div className="mt-14 flex flex-col items-center justify-between gap-6 xl:flex-row">
      <div className="w-full space-y-6">
        <p className=" font-semibold uppercase tracking-widest text-my-primary">
          Why Chose Us
        </p>
        <h2 className="text-xl font-medium capitalize text-title-color md:text-3xl md:font-semibold xl:text-4xl xl:font-bold xl:leading-snug xl:tracking-wide">
          Best services available for every single customer.
        </h2>
        <img className="w-11/12" src={whyUs} alt="why us images" />
      </div>
      <div className="w-full space-y-8">
        <div className="flex items-center gap-6 rounded-md border-[1px] border-gray-3 bg-white p-6 shadow-md">
          <div className=" text-3xl text-my-primary lg:text-5xl">
            <FaHeartbeat />
          </div>
          <div className=" space-y-3">
            <h3 className="text-xl font-semibold text-neutral-500 lg:text-2xl">
              Honesty & transparency
            </h3>
            <p className="text-sm text-gray-5 lg:text-base">
              Honesty and transparency build trust through truthful, open, and
              sincere interactions, fostering strong relationships.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-md border-[1px] border-gray-3 bg-white p-6 shadow-md">
          <div className=" text-3xl text-my-primary lg:text-5xl">
            <MdOutlineDiscount />
          </div>
          <div className=" space-y-3">
            <h3 className="text-xl font-semibold text-neutral-500 lg:text-2xl">
              Extra Discount
            </h3>
            <p className="text-sm text-gray-5 lg:text-base">
              Additional price reduction offered, enhancing value and
              incentivizing purchases, for a limited time or quantity.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-md border-[1px] border-gray-3 bg-white p-6 shadow-md">
          <div className=" text-3xl text-my-primary lg:text-5xl">
            <TbTruckDelivery />
          </div>
          <div className=" space-y-3">
            <h3 className="text-xl font-semibold text-neutral-500 lg:text-2xl">
              Super Fast delivery
            </h3>
            <p className="text-sm text-gray-5 lg:text-base">
              Swift delivery exceeding standards, ensuring products arrive
              quickly, delighting customers with efficient service..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
