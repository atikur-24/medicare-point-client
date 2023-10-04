import axios from "axios";
import { useState } from "react";
import { BiHappy, BiSad } from "react-icons/bi";
import { CgSmileNone } from "react-icons/cg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [quoteError, setQuoteError] = useState("");
  const [ratingValue, setRatingValue] = useState(null);
  const { user } = useAuth();

  const handleRating = (value) => {
    setRating(value);
    if (value === "sad") {
      setRatingValue(3);
      toast.success("You are feeling Sad ! 😥", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
    if (value === "happy") {
      setRatingValue(5);
      toast.success("You are feeling Happy ! 😑", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
    if (value === "very happy") {
      setRatingValue(5);
      toast.success("You are feeling Very Happy ! 😊", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  };

  const [feedback, setFeedback] = useState({
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
    quote: "",
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
    if (feedback.quote.length < 10) {
      setQuoteError("At least 10 letters");
      return;
    }

    setQuoteError("");

    if (feedback.rating) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/feedback`, feedback)
        .then((res) => {
          e.target.reset();
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Thanks For Your Valuable Feedback",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch(() =>
          toast.error("Something Wrong Try Again", {
            autoClose: 1000,
            pauseOnHover: false,
          }),
        );
    } else {
      toast.error("Please Give Any Rating", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div>
      <div className="m-6 mx-auto mt-8 rounded bg-white p-6 shadow-lg">
        <div className="m-6 rounded-lg bg-gradient-to-tr from-gray-3 to-slate-3 p-6 shadow-lg">
          <h2 className="mb-4 text-lg  font-semibold capitalize md:text-2xl">
            How do you feel about our website or Services ?
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => handleRating("sad")}
              className={`rounded-lg p-2 transition-all hover:bg-lite hover:shadow-lg ${
                rating === "sad"
                  ? "bg-lite text-red-500 shadow-lg"
                  : "text-gray-200 text-slate-6"
              }`}
            >
              <BiSad size={60} />
            </button>
            <button
              type="button"
              onClick={() => handleRating("happy")}
              className={`rounded-lg p-2 transition-all hover:bg-lite hover:shadow-lg  ${
                rating === "happy"
                  ? "bg-lite text-my-accent shadow-lg"
                  : "text-gray-200 text-slate-6"
              }`}
            >
              <CgSmileNone size={60} />
            </button>
            <button
              type="button"
              onClick={() => handleRating("very happy")}
              className={`rounded-lg p-2 transition-all hover:bg-lite hover:shadow-lg  ${
                rating === "very happy"
                  ? "bg-lite text-my-primary shadow-lg"
                  : "text-gray-200 text-slate-6"
              }`}
            >
              <BiHappy size={60} />
            </button>
          </div>
          <div
            className={`mt-6 text-center ${
              rating === "sad" ? "text-red-500" : ""
            } ${rating === "happy" ? "text-my-accent" : ""} ${
              rating === "very happy" ? "text-my-primary" : ""
            }`}
          >
            {rating && (
              <p className="text-xl font-semibold">
                You are feeling {rating} !
              </p>
            )}
          </div>
        </div>
        <form className="m-6 p-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                className="focus:outline-happy focus:border-blue-500 w-full rounded-lg border px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
                className="focus:outline-happy focus:border-blue-500 w-full rounded-lg border px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="mb-4 mt-2">
            <label htmlFor="quote" className="mb-2 block font-medium">
              Message{" "}
              <small className="text-gray-4">(write min 10 letters)</small>
            </label>
            <textarea
              id="quote"
              name="quote"
              value={feedback.quote}
              onChange={handleChange}
              rows="4"
              className="focus:outline-happy focus:border-blue-500 w-full rounded-lg border px-3 py-2"
              required
            />
            {quoteError && <p className="text-error">{quoteError}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="my-btn">
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
