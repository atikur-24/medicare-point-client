import { FaFlask, FaMobile, FaPhone, FaSearch } from "react-icons/fa";

const LabWork = () => {
  return (
    <div className="my-container">
      <h1 className="text-center text-xl font-bold uppercase  text-[#111a28]  lg:text-2xl">
        How it works
      </h1>
      <div className="my-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="mx-auto my-4 w-10/12 cursor-pointer space-y-4 border border-gray-3 p-4 text-center duration-300 hover:scale-105 md:my-0  md:w-full md:border-0 md:p-0">
          <FaSearch className="mx-auto text-my-primary" size={40} />
          <p>Search for lab test and book a home sample collection.</p>
        </div>

        <div className="mx-auto my-4 w-10/12 cursor-pointer   space-y-4 border border-gray-3 p-4 text-center duration-300 hover:scale-105 md:my-0  md:w-full md:border-0 md:p-0">
          <FaPhone className="mx-auto text-my-primary" size={40} />
          <p>
            Receive call from Lab representative to book your test schedule.
          </p>
        </div>

        <div className="mx-auto my-4 w-10/12 cursor-pointer  space-y-4 border border-gray-3 p-4 text-center duration-300 hover:scale-105 md:my-0  md:w-full md:border-0 md:p-0">
          <FaFlask className="mx-auto text-my-primary" size={40} />
          <p>
            We will send a certified professional to assist you with the sample
            collection.
          </p>
        </div>

        <div className="mx-auto my-4 w-10/12 cursor-pointer  space-y-4 border border-gray-3 p-4 text-center duration-300 hover:scale-105 md:my-0  md:w-full md:border-0 md:p-0">
          <FaMobile className="mx-auto text-my-primary" size={40} />
          <p>You will receive an sms to download your reports on your phone.</p>
        </div>
      </div>
    </div>
  );
};

export default LabWork;
