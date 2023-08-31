import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

const HealthCard = ({ healthTip }) => {
  return (
    <div className=" rounded relative bg-white shadow   h-full">
      <div className=" absolute h-20  border-l-4  bg-white border-my-accent " />
      <div className="px-8 py-4 space-y-8 ">
        <h2 className="h-10 font-bold  text-lg ">{healthTip.name}</h2>
        <img src={healthTip.image} alt="img" className="h-32  w-full object-cover" />
        <p className="text-justify md:h-32">{healthTip.prevention.slice(0, 150)}...</p>
        <Link to={`/healthtips/${healthTip._id}`} className="flex justify-center mt-auto">
          <button type="button" className="my-btn w-full" style={{ borderRadius: "50px" }}>
            <MdOutlineTipsAndUpdates className="text-2xl" /> Get Tips
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HealthCard;
