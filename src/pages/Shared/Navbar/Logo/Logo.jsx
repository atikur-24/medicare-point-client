import { Link } from "react-router-dom";
import logo from "../../../../assets/Logo/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col md:flex-row gap-2 items-center">
      <img className="w-20" src={logo} alt="Medicare Point" height="100" width="100" />
      <div className=" hidden md:block text-center font-bold -space-y-1 text-lg">
        <p className="text-my-primary "> Medicare</p> <p className="text-my-accent ">Point</p>
      </div>
    </Link>
  );
};

export default Logo;
