import CountUp from "react-countup";
import deliveryImg from "../../../assets/images/Service/delivery-man.png";
import userImg from "../../../assets/images/Service/manager.png";
import medicineImg from "../../../assets/images/Service/medicine.png";
import clockImg from "../../../assets/images/Service/time-check.png";
import SectionTitle from "../../../components/SectionTitle";

const Service = () => {
  return (
    <div className="my-container">
      <SectionTitle
        title="Our Service"
        content="Experience personalized wellness solutions that cater to your unique requirements. Our commitment to your well-being is unwavering, providing you with a trustworthy and convenient source for all your health essentials."
      />
      <div className="my-container grid gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-card rounded-lg border border-gray-3">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 hover:scale-110 transition-all duration-150"
            src={userImg}
            alt=""
          />
          <h3 className="text-2xl font-semibold mt-2">
            <CountUp enableScrollSpy end={546} duration={3} />
          </h3>
          <p className="text-lg font-semibold txt-gray-5">Registered Users</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 hover:scale-110 transition-all duration-150"
            src={clockImg}
            alt=""
          />
          <h3 className="text-2xl font-semibold mt-2">45min</h3>
          <p className="text-lg font-semibold txt-gray-5">Avg. Delivery Time</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 hover:scale-110 transition-all duration-150"
            src={medicineImg}
            alt=""
          />
          <h3 className="text-2xl font-semibold mt-2">
            <CountUp enableScrollSpy end={2145} duration={3} />
          </h3>
          <p className="text-lg font-semibold txt-gray-5">Enlisted Items</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            className="w-28 hover:scale-110 transition-all duration-150"
            src={deliveryImg}
            alt=""
          />
          <h3 className="text-2xl font-semibold mt-2">
            <CountUp enableScrollSpy end={1240} duration={3} />
          </h3>
          <p className="text-lg font-semibold txt-gray-5">Orders Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
