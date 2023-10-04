import { Link } from "react-router-dom";
import lab from "../../../assets/Lab/labAd.webp";

const LabAd = () => {
  return (
    <div className="flex justify-center px-4 py-2 md:py-10">
      <Link to="/lab-test">
        <img src={lab} alt="" className="rounded" />
      </Link>
    </div>
  );
};

export default LabAd;
