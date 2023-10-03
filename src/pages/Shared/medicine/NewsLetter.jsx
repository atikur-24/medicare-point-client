import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      toast.success("Newsletter Subscribe Success ", { position: "top-center", theme: "colored", autoClose: 2000, pauseOnHover: false });
      event.target.reset();
    }
  };

  return (
    <div className="bg-title-color py-8">
      <div className="w-full md:w-10/12 mx-auto text-center space-y-4 ">
        <p className="text-lg font-semibold text-white tracking-wide">NEWS LETTER</p>
        <h1 className="text-2xl md:text-3xl font-bold text-my-accent">GET DISCOUNT 30% OFF</h1>
        <form onSubmit={handleSubmit} className="flex justify-center items-center px-4 xl:w-1/2 mx-auto gap-4">
          <input
            required
            name="email"
            className="w-full ps-4 lg:h-12 text-sm md:text-base outline-my-primary rounded-3xl border border-my-accent  placeholder-gray-4 p-1 md:p-2 font-medium focus:border-2 focus:outline-none  focus:border-accent"
            type="email"
            placeholder="xyz@gmail.com"
          />
          <button type="submit" className="my-btn-outline md:tracking-wide text-sm md:text-lg !bg-opacity-90 !hover:bg-opacity-90">
            <HiOutlineMail size={24} /> SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
