import report from "../../../assets/choose-icon/analytics.png";
import services from "../../../assets/choose-icon/insurance.png";
import expire from "../../../assets/choose-icon/pills.png";
import trust from "../../../assets/choose-icon/trust.png";
import SectionTitle from "../../../components/SectionTitle";

const ChooseUs = () => (
  <div className="my-container">
    <SectionTitle
      title="why choose us"
      content="Our team of experts is dedicated to providing guidance and assistance to empower you to make informed decisions about your health. We take pride in our reliable and efficient doorstep delivery."
    />
    <div className=" grid mt-24 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* one  */}
      <div className="relative ">
        <div className="choose-outside">
          <div className="w-full choose-inside   pt-8 px-8 rounded-lg">
            <div className="py-8">
              <h2 className="text-xl font-bold">Trusted</h2>
              <p className="text-gray-6">Your reliable source for quality products</p>
            </div>
          </div>
        </div>

        <div className=" w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-white  border-my-primary p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
          <img className="w-20 object-cover" src={trust} alt="" />
        </div>
      </div>
      {/* two  */}
      <div className="relative ">
        <div className="choose-outside">
          <div className="w-full choose-inside   pt-8 px-8 rounded-lg">
            <div className="py-8">
              <h2 className="text-xl font-bold">Best Service</h2>
              <p className="text-gray-6">Exceptional care, every step of the way.</p>
            </div>
          </div>
        </div>

        <div className=" w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-white  border-[#10847e] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
          <img className="w-20 object-cover" src={services} alt="" />
        </div>
      </div>
      {/* three  */}
      <div className="relative">
        <div className="choose-outside">
          <div className="w-full choose-inside pt-8 px-8 rounded-lg">
            <div className="py-8">
              <h2 className="text-xl font-bold">Analytics & Reports</h2>
              <p className="text-gray-6">Data-driven insights for smart decisions.</p>
            </div>
          </div>
        </div>

        <div className=" w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-white  border-[#10847e] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
          <img className="w-20 object-cover" src={report} alt="" />
        </div>
      </div>
      {/* four  */}
      <div className="relative">
        <div className="choose-outside">
          <div className="w-full choose-inside   pt-8 px-8 rounded-lg">
            <div className="py-8">
              <h2 className="text-xl font-bold">Expiry Management</h2>
              <p className="text-gray-6">We are Ensuring freshness Product, always.</p>
            </div>
          </div>
        </div>

        <div className=" w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-white  border-[#10847e] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
          <img className="w-20 object-cover" src={expire} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ChooseUs;
