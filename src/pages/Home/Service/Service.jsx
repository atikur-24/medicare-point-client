import CountUp from "react-countup";
import deliveryImg from "../../../assets/images/Service/delivery-man.webp";
import userImg from "../../../assets/images/Service/manager.webp";
import medicineImg from "../../../assets/images/Service/medicine.webp";
import clockImg from "../../../assets/images/Service/time-check.webp";
import SectionTitle from "../../../components/SectionTitle";

const Service = () => {
  return (
    <div className="my-container">
      <SectionTitle
        title="Our Service"
        content="We providing you with a trustworthy and convenient source for all your health essentials."
      />
      <div
        data-testid="cards-container"
        className="my-container md:py-auto grid grid-cols-1 !py-8 text-title-color md:grid-cols-2 xl:grid-cols-4"
      >
        <div className="serviceCard bg-card group relative m-4 flex flex-col  items-center justify-center rounded-bl-2xl rounded-tr-2xl border border-gray-3 p-10">
          <div className=" absolute left-0 top-0 w-28  border-t-4  border-my-accent bg-white" />
          <img
            className="w-28 transition-all duration-150 group-hover:scale-110"
            src={userImg}
            alt=""
          />
          <h3 className="mt-2 pb-1 text-2xl font-semibold text-title-color lg:mt-4">
            <CountUp enableScrollSpy end={546} duration={3} />
          </h3>
          <p className="font-nunito text-lg font-bold uppercase text-my-primary">
            Registered Users
          </p>
        </div>

        <div className="serviceCard bg-card group relative m-4 flex flex-col  items-center justify-center rounded-bl-2xl rounded-tr-2xl border border-gray-3 p-10">
          <div className=" absolute left-0 top-0 w-28  border-t-4  border-my-accent bg-white" />
          <img
            className="w-28 transition-all duration-150 group-hover:scale-110"
            src={clockImg}
            alt=""
          />
          <h3 className="mt-2 pb-1 text-2xl font-semibold text-title-color lg:mt-4">
            <CountUp enableScrollSpy end={45} duration={3} />
            min
          </h3>
          <p className="font-nunito text-lg font-bold uppercase text-my-primary">
            Avg. Delivery Time
          </p>
        </div>

        <div className="serviceCard bg-card group relative m-4 flex flex-col  items-center justify-center rounded-bl-2xl rounded-tr-2xl border border-gray-3 p-10">
          <div className=" absolute left-0 top-0 w-28  border-t-4  border-my-accent bg-white" />
          <img
            className="w-28 transition-all duration-150 group-hover:scale-110"
            src={medicineImg}
            alt=""
          />
          <h3 className="mt-2 pb-1 text-2xl font-semibold text-title-color lg:mt-4">
            <CountUp enableScrollSpy end={2145} duration={3} />
          </h3>
          <p className="font-nunito text-lg font-bold uppercase text-my-primary">
            Enlisted Items
          </p>
        </div>

        <div className="serviceCard bg-card group relative m-4 flex flex-col  items-center justify-center rounded-bl-2xl rounded-tr-2xl border border-gray-3 p-10">
          <div className=" absolute left-0 top-0 w-28  border-t-4  border-my-accent bg-white" />
          <img
            className="w-28 transition-all duration-150 group-hover:scale-110"
            src={deliveryImg}
            alt=""
          />
          <h3 className="mt-2 pb-1 text-2xl font-semibold text-title-color lg:mt-4">
            <CountUp enableScrollSpy end={1240} duration={3} />
          </h3>
          <p className="font-nunito text-lg font-bold uppercase text-my-primary">
            Orders Delivered
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
