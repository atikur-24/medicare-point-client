import { FaFlask, FaMobile, FaPhone, FaSearch } from "react-icons/fa";

const LabWork = () => {
  return (
    <div className="my-16">
      <h1 className="text-xl text-center font-semibold">How it works</h1>
      <div className="md:flex gap-4 my-12">
        <div className="text-center space-y-4 border md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaSearch className="mx-auto text-my-primary" size={26} />
          <p>Search for lab test and book a home sample collection.</p>
        </div>
        <hr className="w-32 hidden md:block" />
        <div className="text-center space-y-4 border md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaPhone className="mx-auto text-my-primary" size={26} />
          <p>Receive call from Lab representative to book your test schedule.</p>
        </div>
        <hr className="w-32 hidden md:block" />

        <div className="text-center space-y-4 border md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaFlask className="mx-auto text-my-primary" size={26} />
          <p>We will send a certified professional to assist you with the sample collection.</p>
        </div>
        <hr className="w-32 hidden md:block" />

        <div className="text-center space-y-4 border md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaMobile className="mx-auto text-my-primary" size={26} />
          <p>You will receive an sms to download your reports on your phone.</p>
        </div>
      </div>
    </div>
  );
};

export default LabWork;
