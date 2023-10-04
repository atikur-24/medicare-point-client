import { AiOutlineComment } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { TbTestPipe } from "react-icons/tb";

const Medilazar = () => {
  return (
    <div className="my-16">
      <h2 className="text-center text-xl font-medium capitalize text-title-color md:text-3xl md:font-semibold xl:text-4xl xl:font-bold xl:tracking-wide">
        About MediCare Point
      </h2>
      <p className="mt-2 text-center text-gray-5">
        BD leading digital consumer healthcare platform
      </p>
      <div className="gird-cols-1 mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4  rounded-lg ">
          <div>
            <GiMedicines className="mx-auto text-3xl transition delay-150 duration-300 ease-in-out hover:text-my-primary lg:text-5xl" />
          </div>
          <div className="space-y-2">
            <h4 className="text-center text-lg font-medium lg:text-xl lg:font-bold">
              E-Pharmacy
            </h4>
            <p className="text-center text-sm text-gray-5 lg:text-base">
              Order medicines and health products online and get it delivered at
              home from licensed pharmacies
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <AiOutlineComment className="mx-auto text-3xl transition delay-150 duration-300 ease-in-out hover:text-my-primary lg:text-5xl" />
          </div>
          <div className="space-y-2">
            <h4 className="text-center text-lg font-medium lg:text-xl lg:font-bold">
              Online Consultations
            </h4>
            <p className="text-center text-sm text-gray-5 lg:text-base">
              Consult qualified and registered doctors on chat for free
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <TbTestPipe className="mx-auto text-3xl transition delay-150 duration-300 ease-in-out hover:text-my-primary lg:text-5xl" />
          </div>
          <div className="space-y-2">
            <h4 className="text-center text-lg font-medium lg:text-xl lg:font-bold">
              Labs Tests
            </h4>
            <p className="text-center text-sm text-gray-5 lg:text-base">
              Book lab tests online for hassle-free, home sample collection
              service. Get reports online.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <FaAward className="mx-auto text-3xl transition delay-150 duration-300 ease-in-out hover:text-my-primary lg:text-5xl" />
          </div>
          <div className="space-y-2">
            <h4 className="text-center text-lg font-medium lg:text-xl lg:font-bold">
              Authentic Information
            </h4>
            <p className="text-center text-sm text-gray-5 lg:text-base">
              Read medicine and health content written by qualified doctors and
              health professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medilazar;
