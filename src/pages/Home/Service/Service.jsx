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
        content="Experience personalized wellness solutions that cater to your unique requirements.we providing you with a trustworthy and convenient source for all your health essentials."
      />
      <div className="my-container !py-8 md:py-auto grid grid-cols-1 md:grid-cols-2 text-title-color lg:grid-cols-4">
        <div className="relative flex flex-col justify-center items-center p-10  m-4 group bg-card border border-gray-3 rounded-bl-2xl rounded-tr-2xl">
          <div className=" absolute top-0 left-0 w-28  border-t-4  bg-white border-my-accent" />
          <img className="w-28 group-hover:scale-110 transition-all duration-150" src={userImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2 lg:mt-4 pb-1 text-title-color">
            <CountUp enableScrollSpy end={546} duration={3} />
          </h3>
          <p className="text-lg font-bold text-my-primary font-nunito uppercase">Registered Users</p>
        </div>

        <div className="relative flex flex-col justify-center items-center p-10  m-4 group bg-card border border-gray-3 rounded-bl-2xl rounded-tr-2xl">
          <div className=" absolute top-0 left-0 w-28  border-t-4  bg-white border-my-accent" />
          <img className="w-28 group-hover:scale-110 transition-all duration-150" src={clockImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2 lg:mt-4 pb-1 text-title-color">
            <CountUp enableScrollSpy end={45} duration={3} />
            min
          </h3>
          <p className="text-lg font-bold text-my-primary font-nunito uppercase">Avg. Delivery Time</p>
        </div>

        <div className="relative flex flex-col justify-center items-center p-10  m-4 group bg-card border border-gray-3 rounded-bl-2xl rounded-tr-2xl">
          <div className=" absolute top-0 left-0 w-28  border-t-4  bg-white border-my-accent" />
          <img className="w-28 group-hover:scale-110 transition-all duration-150" src={medicineImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2 lg:mt-4 pb-1 text-title-color">
            <CountUp enableScrollSpy end={2145} duration={3} />
          </h3>
          <p className="text-lg font-bold text-my-primary font-nunito uppercase">Enlisted Items</p>
        </div>

        <div className="relative flex flex-col justify-center items-center p-10  m-4 group bg-card border border-gray-3 rounded-bl-2xl rounded-tr-2xl">
          <div className=" absolute top-0 left-0 w-28  border-t-4  bg-white border-my-accent" />
          <img className="w-28 group-hover:scale-110 transition-all duration-150" src={deliveryImg} alt="" />
          <h3 className="text-2xl font-semibold mt-2 lg:mt-4 pb-1 text-title-color">
            <CountUp enableScrollSpy end={1240} duration={3} />
          </h3>
          <p className="text-lg font-bold text-my-primary font-nunito uppercase">Orders Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
