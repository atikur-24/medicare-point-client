import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const interview_details = () => {
  const [interviewDetails, setinterviewDetails] = useState([]);

  useEffect(() => {
    axios.get("/blogs_interview.json").then((res) => setinterviewDetails(res.data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 items-center">
        {interviewDetails.map((interviewDetail, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center">
                <img style={{ width: "600px" }} className="p-6" src={interviewDetail.image} alt="" />
                <div className="p-6 my-auto">
                  <Link to="/interview_details">
                    <h2 className="text-xl font-semibold hover:text-my-primary">{interviewDetail.title}</h2>
                  </Link>
                  <p>
                    <small className="italic">Published On: {interviewDetail.published_date}</small>
                  </p>
                  <p className="font-semibold py-3">Topic:{interviewDetail.topic}</p>

                  <ul className="list-disc mb-4 py-3">
                    <p>{interviewDetail.content}</p>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default interview_details;
