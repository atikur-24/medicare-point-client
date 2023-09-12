import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const MediContact = () => {
  return (
    <div className="my-container grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex gap-x-4 items-center md:w-10/12 mx-auto ">
        <div>
          <MdOutlineMailOutline size={56} className="text-my-accent" />
        </div>
        <div className="group space-y-2">
          <h1 className="text-lg lg:text-xl font-semibold lg:font-bold tracking-wide lg:tracking-wider uppercase">Email</h1>
          <p className="text-gray-5">medicare.support.com</p>
        </div>
      </div>
      <div className="flex gap-x-4 items-center md:w-10/12 mx-auto">
        <div>
          <LuPhoneCall size={48} className="text-my-accent" />
        </div>
        <div className="space-y-2">
          <h1 className="text-lg lg:text-xl font-semibold lg:font-bold tracking-wide lg:tracking-wider uppercase">Hotline No.</h1>
          <h1 className="text-gray-5">880-707 69</h1>
        </div>
      </div>
      <div className="md:w-10/12 mx-auto space-y-4">
        <h1 className="text-2xl font-semibold">Download the app now!</h1>
        <div className="flex gap-2">
          <img className="cursor-pointer" src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2020/10/google-play.png" alt="" />
          <img className="cursor-pointer" src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2020/10/google-play.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MediContact;
