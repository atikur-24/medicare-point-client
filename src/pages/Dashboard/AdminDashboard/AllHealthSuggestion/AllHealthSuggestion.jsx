import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const AllHealthSuggestion = () => {
  return (
    <div className="px-5">
      <h3 className="text-center text-xl md:text-3xl my-7 font-semibold">
        All Helth Suggestion and Tips
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:flex shadow-lg bg-card">
          <img
            className="md:h-full md:w-[220px]"
            src="https://www.planstreetinc.com/wp-content/uploads/2021/07/what-is-mental-health-1130x675.png"
            alt=""
          />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Healthy Diet</h3>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              facere eveniet nihil pariatur.....
            </p>
            <div className="space-x-2 text-center">
              <button
                type="button"
                className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
              >
                <FaPencilAlt className="text-lg" />
              </button>
              <button
                type="button"
                className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink"
              >
                <RiDeleteBinLine className="text-lg" />
              </button>
              <button
                type="button"
                className="btn btn-circle btn-sm hover:bg-my-primary text-white bg-my-accent"
              >
                <BsBoxArrowInUpRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex shadow-lg bg-card">
          <img
            className="md:h-full md:w-[220px]"
            src="https://www.srbija.gov.rs/static/en/65781/0/img_65781.jpg"
            alt=""
          />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Title here</h3>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              facere eveniet nihil pariatur......
            </p>
            <div className="space-x-2 text-center">
              <button
                type="button"
                className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
              >
                <FaPencilAlt className="text-lg" />
              </button>
              <button
                type="button"
                className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink"
              >
                <RiDeleteBinLine className="text-lg" />
              </button>
              <button
                type="button"
                className="btn btn-circle btn-sm hover:bg-my-primary text-white bg-my-accent"
              >
                <BsBoxArrowInUpRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHealthSuggestion;
