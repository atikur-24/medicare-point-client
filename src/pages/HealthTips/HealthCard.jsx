import HtmlParser from "react-html-parser";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

const HealthCard = ({ healthTip }) => {
  return (
    <div className=" relative h-full rounded bg-white   shadow">
      <div className=" absolute h-20  border-l-4  border-my-accent bg-white " />
      <div className="space-y-8 px-8 py-4 ">
        <h2 className="h-10 text-lg  font-bold ">{healthTip.name}</h2>
        <img
          src={healthTip.image}
          alt="img"
          className="h-32  w-full object-cover"
        />
        <div className="text-justify md:h-32">
          {HtmlParser(healthTip?.cause?.slice(0, 100))}...
        </div>
        <Link
          to={`/healthtips/${healthTip._id}`}
          className="mt-auto flex justify-center"
        >
          <button
            type="button"
            className="my-btn w-full"
            style={{ borderRadius: "50px" }}
          >
            <MdOutlineTipsAndUpdates className="text-2xl" /> Get Tips
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HealthCard;
