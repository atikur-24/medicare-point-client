import report from "../../../assets/choose-icon/analytics.webp";
import services from "../../../assets/choose-icon/insurance.webp";
import expire from "../../../assets/choose-icon/pills.webp";
import trust from "../../../assets/choose-icon/trust.webp";
import SectionTitle from "../../../components/SectionTitle";

const ChooseUs = () => (
  <div className="my-container">
    <SectionTitle
      title="why choose us"
      content="We take pride in our reliable and efficient doorstep delivery."
    />
    <div
      data-testid="chooseUs-container"
      className=" mt-24 grid gap-10 md:grid-cols-2 md:gap-20 xl:grid-cols-4 xl:gap-10"
    >
      {/* one  */}
      <div className="chooseUsCard relative ">
        <div className="choose-outside">
          <div className="choose-inside w-full   rounded-lg px-8 pt-8">
            <div className="py-8">
              <h2 className="text-xl font-bold">Trusted</h2>
              <p className="text-gray-6">
                Your reliable source for quality products
              </p>
            </div>
          </div>
        </div>

        <div className=" absolute -top-5 left-5 flex h-[50px] w-[60px]  items-center justify-center rounded-br-[50%] border-2 border-my-primary bg-white p-4 md:-top-10 md:h-[80px] md:w-[90px] ">
          <img className="w-20 object-cover" src={trust} alt="" />
        </div>
      </div>
      {/* two  */}
      <div className="chooseUsCard relative ">
        <div className="choose-outside">
          <div className="choose-inside w-full   rounded-lg px-8 pt-8">
            <div className="py-8">
              <h2 className="text-xl font-bold">Best Service</h2>
              <p className="text-gray-6">
                Exceptional care, every step of the way.
              </p>
            </div>
          </div>
        </div>

        <div className=" absolute -top-5 left-5 flex h-[50px] w-[60px]  items-center justify-center rounded-br-[50%] border-2 border-[#10847e] bg-white p-4 md:-top-10 md:h-[80px] md:w-[90px] ">
          <img className="w-20 object-cover" src={services} alt="" />
        </div>
      </div>
      {/* three  */}
      <div className="chooseUsCard relative">
        <div className="choose-outside">
          <div className="choose-inside w-full rounded-lg px-8 pt-8">
            <div className="py-8">
              <h2 className="text-xl font-bold">Analytics & Reports</h2>
              <p className="text-gray-6">
                Data-driven insights for smart decisions.
              </p>
            </div>
          </div>
        </div>

        <div className=" absolute -top-5 left-5 flex h-[50px] w-[60px]  items-center justify-center rounded-br-[50%] border-2 border-[#10847e] bg-white p-4 md:-top-10 md:h-[80px] md:w-[90px] ">
          <img className="w-20 object-cover" src={report} alt="" />
        </div>
      </div>
      {/* four  */}
      <div className="chooseUsCard relative">
        <div className="choose-outside">
          <div className="choose-inside w-full   rounded-lg px-8 pt-8">
            <div className="py-8">
              <h2 className="text-xl font-bold">Expiry Management</h2>
              <p className="text-gray-6">
                We are Ensuring freshness Product, always.
              </p>
            </div>
          </div>
        </div>

        <div className=" absolute -top-5 left-5 flex h-[50px] w-[60px]  items-center justify-center rounded-br-[50%] border-2 border-[#10847e] bg-white p-4 md:-top-10 md:h-[80px] md:w-[90px] ">
          <img className="w-20 object-cover" src={expire} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ChooseUs;
