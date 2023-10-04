import { Link } from "react-router-dom";
import logo from "../../../../assets/Logo/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center gap-2 md:flex-row">
      <img
        className="w-20"
        src={logo}
        alt="Medicare Point"
        height="100"
        width="100"
      />
      <div className=" hidden -space-y-1 text-center text-lg font-bold md:block">
        <p className="text-my-primary "> Medicare</p>{" "}
        <p className="text-my-accent ">Point</p>
      </div>
    </Link>
  );
};

export default Logo;
