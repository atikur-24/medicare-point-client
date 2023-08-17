import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import whyUs from "../../../assets/images/AboutUs/Testimonial.png";

const WhyChoseUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-14 gap-6 items-center">
      <div className="w-full space-y-6">
        <p className=" uppercase text-my-primary tracking-widest font-semibold">Why Chose Us</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">Best services available for every single customer. </h2>
        <img className="w-11/12" src={whyUs} alt="why us images" />
      </div>
      <div className="w-full space-y-8">
        <div className="bg-white rounded-md p-6 flex gap-6">
          <div className=" text-my-primary text-5xl">
            <FaHeartbeat />
          </div>
          <div className=" space-y-3">
            <h3 className="text-2xl font-semibold text-neutral-500">Honesty & transparency</h3>
            <p className="text-gray-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident at, vitae eum fuga voluptas quasi.</p>
          </div>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-6">
          <div className=" text-my-primary text-5xl">
            <MdOutlineDiscount />
          </div>
          <div className=" space-y-3">
            <h3 className="text-2xl font-semibold text-neutral-500">Extra Discount</h3>
            <p className="text-gray-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident at, vitae eum fuga voluptas quasi.</p>
          </div>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-6">
          <div className=" text-my-primary text-5xl">
            <TbTruckDelivery />
          </div>
          <div className=" space-y-3">
            <h3 className="text-2xl font-semibold text-neutral-500">Super Fast delivery</h3>
            <p className="text-gray-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident at, vitae eum fuga voluptas quasi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
