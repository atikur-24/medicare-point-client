import { FaFileAlt, FaHome, FaShieldAlt, FaTag } from "react-icons/fa";

const LabBook = () => {
  return (
    <div className="my-container">
      <h1 className="mb-16 text-center text-xl font-bold  uppercase  text-[#111a28] lg:text-2xl">
        Why book with MediCare
      </h1>
      <div className="mx-auto grid w-10/12 grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:flex-row ">
          <FaHome className="text-3xl text-my-primary lg:text-5xl" />
          <div className="space-y-2">
            <h3 className="font-nunito text-lg font-bold uppercase">
              Home Sample Collection.
            </h3>
            <p>We provide doorstep diagnostic services all across Dhaka.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row ">
          <FaShieldAlt className="text-3xl text-my-primary lg:text-6xl" />
          <div className="space-y-2">
            <h3 className="font-nunito text-lg font-bold uppercase">
              Trusted Lab Partners.
            </h3>
            <p>
              Lab tests booked via medicate point are conducted by certified
              labs that are 100% trustworthy and verified.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row ">
          <FaFileAlt className="text-3xl text-my-primary lg:text-5xl" />
          <div className="space-y-2">
            <h3 className="font-nunito text-lg font-bold uppercase">
              Online Lab Test Reports.
            </h3>
            <p>Access your lab test reports anywhere, anytime online.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row ">
          <FaTag className="text-3xl text-my-primary lg:text-5xl" />
          <div className="space-y-2">
            <h3 className="font-nunito text-lg font-bold uppercase">
              Exclusive Discounts.
            </h3>
            <p>Avail the best discounts on all lab tests.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBook;
