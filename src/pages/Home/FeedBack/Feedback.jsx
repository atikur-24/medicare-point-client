import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import Heading from "../../Shared/Heading/Heading";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback.json").then((res) => setFeedbacks(res.data));
  }, []);

  return (
    <div className=" py-10 mt-8">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-2xl md:text-6xl font-bold font-serif text-center mb-8">feedbacks</h2> */}
        <Heading title={"Feedback"} center={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-lg font-semibold">{feedback.name}</h3>
                  <Rating
                    readonly
                    initialRating={feedback.rating}
                    emptySymbol={<span className="text-gray-300">&#9734;</span>}
                    fullSymbol={
                      <span className="text-yellow-400">&#9733;</span>
                    }
                  />
                </div>
              </div>
              <p className="text-gray-700">{feedback.quote}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto text-center">
        <Link>
          <button className="btn btn-wide mt-6">Feedback Junction</button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
