import { AiOutlineComment } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { TbTestPipe } from "react-icons/tb";

const Medilazar = () => {
  return (
    <div className="my-16">
      <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide capitalize text-title-color text-center">About MediCare Point</h2>
      <p className="text-center text-gray-5 mt-2">BD leading digital consumer healthcare platform</p>
      <div className="mt-10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4  rounded-lg ">
          <div>
            <GiMedicines className="text-3xl lg:text-5xl hover:text-my-primary transition delay-150 duration-300 ease-in-out mx-auto" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg lg:text-xl font-medium lg:font-bold text-center">E-Pharmacy</h4>
            <p className="text-center text-gray-5 text-sm lg:text-base">Order medicines and health products online and get it delivered at home from licensed pharmacies</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <AiOutlineComment className="text-3xl lg:text-5xl hover:text-my-primary transition delay-150 duration-300 ease-in-out mx-auto" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg lg:text-xl font-medium lg:font-bold text-center">Online Consultations</h4>
            <p className="text-center text-gray-5 text-sm lg:text-base">Consult qualified and registered doctors on chat for free</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <TbTestPipe className="text-3xl lg:text-5xl hover:text-my-primary transition delay-150 duration-300 ease-in-out mx-auto" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg lg:text-xl font-medium lg:font-bold text-center">Labs Tests</h4>
            <p className="text-center text-gray-5 text-sm lg:text-base">Book lab tests online for hassle-free, home sample collection service. Get reports online.</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <FaAward className="text-3xl lg:text-5xl hover:text-my-primary transition delay-150 duration-300 ease-in-out mx-auto" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg lg:text-xl font-medium lg:font-bold text-center">Authentic Information</h4>
            <p className="text-center text-gray-5 text-sm lg:text-base">Read medicine and health content written by qualified doctors and health professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medilazar;
