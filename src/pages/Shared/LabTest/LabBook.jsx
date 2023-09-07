import { FaFileAlt, FaHome, FaShieldAlt, FaTag } from "react-icons/fa";

const LabBook = () => {
  return (
    <div className="my-16">
      <h1 className="text-xl text-center font-semibold my-8">Why book with MediCare</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-6">
        <div className="flex gap-6">
          <FaHome size={42} className="text-my-primary" />
          <div>
            <h3 className="text-lg">Home Sample Collection.</h3>
            <p>We provide doorstep diagnostic services all across Pakistan.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <FaShieldAlt size={72} className="text-my-primary" />
          <div>
            <h3 className="text-lg">Trusted Lab Partners.</h3>
            <p>Lab tests booked via Dawaai.pk are conducted by certified labs that are 100% trustworthy and verified.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <FaFileAlt size={42} className="text-my-primary" />
          <div>
            <h3 className="text-lg">Online Lab Test Reports.</h3>
            <p>Access your lab test reports anywhere, anytime online.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <FaTag size={42} className="text-my-primary" />
          <div>
            <h3 className="text-lg">Exclusive Discounts.</h3>
            <p>Avail the best discounts on all lab tests.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBook;
