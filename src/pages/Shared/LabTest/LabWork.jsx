import { FaFlask, FaMobile, FaPhone, FaSearch } from "react-icons/fa";

const LabWork = () => {
  return (
    <div className="my-container">
      <h1 className="text-xl text-center uppercase lg:text-2xl  font-bold  text-[#111a28]">How it works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-14">
        <div className="text-center space-y-4 border border-gray-3 md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaSearch className="mx-auto text-my-primary" size={40} />
          <p>Search for lab test and book a home sample collection.</p>
        </div>

        <div className="text-center space-y-4 border border-gray-3   md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaPhone className="mx-auto text-my-primary" size={40} />
          <p>Receive call from Lab representative to book your test schedule.</p>
        </div>

        <div className="text-center space-y-4 border border-gray-3  md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaFlask className="mx-auto text-my-primary" size={40} />
          <p>We will send a certified professional to assist you with the sample collection.</p>
        </div>

        <div className="text-center space-y-4 border border-gray-3  md:border-0 my-4 md:my-0 w-10/12 md:w-full mx-auto p-4 md:p-0  hover:scale-105 duration-300 cursor-pointer">
          <FaMobile className="mx-auto text-my-primary" size={40} />
          <p>You will receive an sms to download your reports on your phone.</p>
        </div>
      </div>
    </div>
  );
};

export default LabWork;
