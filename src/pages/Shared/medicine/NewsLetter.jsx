import { HiOutlineMail } from "react-icons/hi";

const NewsLetter = () => {
  return (
    <div className="bg-title-color py-8">
      <div className="w-full md:w-10/12 mx-auto text-center space-y-4 ">
        <p className="text-lg font-semibold text-white">NEWS LETTER</p>
        <h1 className="text-2xl md:text-3xl font-bold text-my-accent">GET DISCOUNT 30% OFF</h1>
        <div className="flex justify-center w-10/12  md:w-1/2 mx-auto gap-4">
          <input
            className="w-full mb-4 ps-4 h-12 outline-my-primary rounded-3xl border border-my-accent  placeholder-gray-4  p-2 font-medium focus:border-2 focus:outline-none  focus:border-accent"
            type="text"
            placeholder="Enter Your email"
          />
          <button type="button" className="my-btn-outline md:tracking-wide text-sm md:text-lg">
            <HiOutlineMail size={24} /> SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
