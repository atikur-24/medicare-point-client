import { Link } from "react-router-dom";
import lab from "../../../assets/Lab/labAd.webp";

const LabAd = () => {
  return (
    <div className="flex justify-center py-2 px-4 md:py-10">
      <Link to="/lab-test">
        <img src={lab} alt="" className="rounded" />
      </Link>
    </div>
  );
};

export default LabAd;
