import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      toast.success("Newsletter Subscribe Success ", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      event.target.reset();
    }
  };

  return (
    <div className="bg-title-color py-8">
      <div className="mx-auto w-full space-y-4 text-center md:w-10/12 ">
        <p className="text-lg font-semibold tracking-wide text-white">
          NEWS LETTER
        </p>
        <h1 className="text-2xl font-bold text-my-accent md:text-3xl">
          GET DISCOUNT 30% OFF
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex items-center justify-center gap-4 px-4 xl:w-1/2"
        >
          <input
            required
            name="email"
            className="w-full rounded-3xl border border-my-accent p-1 ps-4 text-sm font-medium placeholder-gray-4  outline-my-primary focus:border-2 focus:border-accent focus:outline-none md:p-2 md:text-base  lg:h-12"
            type="email"
            placeholder="xyz@gmail.com"
          />
          <button
            type="submit"
            className="my-btn-outline !hover:bg-opacity-90 !bg-opacity-90 text-sm md:text-lg md:tracking-wide"
          >
            <HiOutlineMail size={24} /> SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
