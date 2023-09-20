import { useState } from "react";
import { BiHappy, BiSad } from "react-icons/bi";
import { CgSmileNone } from "react-icons/cg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [ratingValue, setRatingValue] = useState(null);
  const { user } = useAuth();

  const handleRating = (value) => {
    setRating(value);
    if (value === "sad") {
      setRatingValue(3);
      toast.success("You are feeling Sad ! 😥", { autoClose: 1000, pauseOnHover: false });
    }
    if (value === "none") {
      setRatingValue(5);
      toast.success("You are feeling None ! 😑", { autoClose: 1000, pauseOnHover: false });
    }
    if (value === "happy") {
      setRatingValue(5);
      toast.success("You are feeling Happy ! 😊", { autoClose: 1000, pauseOnHover: false });
    }
  };

  const [feedback, setFeedback] = useState({
    name: user?.displayName,
    email: user?.email,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    feedback.rating = ratingValue;
    if (feedback.rating) {
      console.log(feedback);
      Swal.fire({
        icon: "success",
        title: "Thanks For Your Valuable Feedback",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      toast.error("Please Give Any Rating", { autoClose: 1000, pauseOnHover: false });
    }
  };

  return (
    <div>
      <div className="mx-auto mt-8 m-6 p-6 bg-white rounded shadow-lg">
        <div className="rounded-lg bg-gradient-to-tr from-gray-3 to-slate-3 shadow-lg m-6 p-6">
          <h2 className="text-lg md:text-2xl  font-semibold mb-4">How do you feel about our website ?</h2>
          <div className="flex justify-center space-x-4">
            <button type="button" onClick={() => handleRating("sad")} className={`p-2 rounded-lg hover:shadow-lg ${rating === "sad" ? "text-red-500 shadow-lg" : "text-gray-200 text-slate-6"}`}>
              <BiSad size={60} />
            </button>
            <button type="button" onClick={() => handleRating("none")} className={`p-2 rounded-lg hover:shadow-lg  ${rating === "none" ? "text-my-accent shadow-lg" : "text-gray-200 text-slate-6"}`}>
              <CgSmileNone size={60} />
            </button>
            <button type="button" onClick={() => handleRating("happy")} className={`p-2 rounded-lg hover:shadow-lg  ${rating === "happy" ? "text-my-primary shadow-lg" : "text-gray-200 text-slate-6"}`}>
              <BiHappy size={60} />
            </button>
          </div>
          <div className={`text-center mt-6 ${rating === "sad" ? "text-red-500" : ""} ${rating === "none" ? "text-my-accent" : ""} ${rating === "happy" ? "text-my-primary" : ""}`}>
            {rating && <p className="text-xl font-semibold">You are feeling {rating} !</p>}
          </div>
        </div>
        <form className="p-6 m-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input type="text" id="name" name="name" value={feedback.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input type="email" id="email" name="email" value={feedback.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea id="message" name="message" value={feedback.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="text-center">
            <button type="submit" className="my-btn">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
