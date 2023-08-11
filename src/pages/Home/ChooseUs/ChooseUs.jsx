import report from "../../../assets/choose-icon/analytics.png";
import services from "../../../assets/choose-icon/insurance.png";
import expire from "../../../assets/choose-icon/pills.png";
import trust from "../../../assets/choose-icon/trust.png";
import Heading from "../../Shared/Heading/Heading";

const ChooseUs = () => (
  <div className="my-container">
    <Heading title="why choose us" center />
    <div className="grid mt-24 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* one  */}
      <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
        <div className="py-8">
          <h2 className="text-2xl font-bold">Trusted</h2>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
        </div>

        <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 p-4 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
          <img className="w-20 object-cover" src={trust} alt="" />
        </div>
      </div>
      {/* two  */}
      <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
        <div className="py-8">
          <h2 className="text-2xl font-bold">Best service</h2>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
        </div>

        <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 p-4 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
          <img className="w-20 object-cover" src={services} alt="" />
        </div>
      </div>
      {/* three  */}
      <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
        <div className="py-8">
          <h2 className="text-2xl font-bold">Analytics and Reports</h2>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
        </div>

        <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 p-4 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
          <img className="w-20 object-cover" src={report} alt="" />
        </div>
      </div>
      {/* four  */}
      <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
        <div className="py-8">
          <h2 className="text-2xl font-bold">Expiry Management</h2>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
        </div>

        <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 p-4 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
          <img className="w-20 object-cover" src={expire} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ChooseUs;
