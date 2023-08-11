import CountUp from "react-countup";
import Heading from "../../Shared/Heading/Heading";

import deliveryImg from "../../../assets/images/Service/delivery-man.png";
import userImg from "../../../assets/images/Service/manager.png";
import medicineImg from "../../../assets/images/Service/medicine.png";
import clockImg from "../../../assets/images/Service/time-check.png";

const Service = () => {
  return (
    <div className="mt-20">
      <Heading title="Our  Service" center />
      <div className="my-container grid gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#e9f6f9] rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <img className="w-28 hover:scale-110" src={userImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2">
            <CountUp enableScrollSpy end={546} duration={3} />
          </h3>
          <p className="text-lg font-semibold text-[#989693]">Registered Users</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="w-28 hover:scale-110" src={clockImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2">45min</h3>
          <p className="text-lg font-semibold text-[#989693]">Avg. Delivery Time</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="w-28 hover:scale-110" src={medicineImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2">
            <CountUp enableScrollSpy end={2145} duration={3} />
          </h3>
          <p className="text-lg font-semibold text-[#989693]">Enlisted Items</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="w-28 hover:scale-110" src={deliveryImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2">
            <CountUp enableScrollSpy end={1240} duration={3} />
          </h3>
          <p className="text-lg font-semibold text-[#989693]">Orders Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
