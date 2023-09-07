import { FaFileAlt, FaHome, FaShieldAlt, FaTag } from "react-icons/fa";

const LabBook = () => {
  return (
    <div className="my-container">
      <h1 className="text-xl text-center uppercase lg:text-2xl  font-bold  text-[#111a28] mb-16">Why book with MediCare</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-6">
        <div className="flex flex-col md:flex-row gap-6 ">
          <FaHome className="text-my-primary text-3xl lg:text-5xl" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-nunito uppercase">Home Sample Collection.</h3>
            <p>We provide doorstep diagnostic services all across Dhaka.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 ">
          <FaShieldAlt className="text-my-primary text-3xl lg:text-6xl" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-nunito uppercase">Trusted Lab Partners.</h3>
            <p>Lab tests booked via medicate point are conducted by certified labs that are 100% trustworthy and verified.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 ">
          <FaFileAlt className="text-my-primary text-3xl lg:text-5xl" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-nunito uppercase">Online Lab Test Reports.</h3>
            <p>Access your lab test reports anywhere, anytime online.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 ">
          <FaTag className="text-my-primary text-3xl lg:text-5xl" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-nunito uppercase">Exclusive Discounts.</h3>
            <p>Avail the best discounts on all lab tests.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBook;
