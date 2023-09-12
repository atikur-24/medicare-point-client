import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdCall } from "react-icons/md";
import { TbWorldPin } from "react-icons/tb";

const MediContact = () => {
  return (
    <div className="my-container grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex gap-x-4 items-center md:w-10/12 mx-auto ">
        <div>
          <TbWorldPin size={56} className="text-my-accent" />
        </div>
        <div className="group space-y-2">
          <h1 className="text-lg font-semibold group-hover:text-my-accent">Address</h1>
          <p className="text-gray-4">
            road #17/a, block-e, banani, <br /> 1213, Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 items-center md:w-10/12 mx-auto">
        <div>
          <LuPhoneCall size={48} className="text-my-accent" />
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">WHATSAPP US</h1>
          <h1 className="text-2xl font-bold text-my-accent">(1800)-22-66-990</h1>
          <p className="text-gray-4">medicare@gmail.com</p>
        </div>
      </div>
      <div className="md:w-10/12 mx-auto space-y-4">
        <h1 className="text-2xl font-semibold">Download the app now!</h1>
        <div className="flex gap-2">
          <img className="cursor-pointer" src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2020/10/google-play.png" alt="" />
          <img className="cursor-pointer" src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2020/10/google-play.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MediContact;
