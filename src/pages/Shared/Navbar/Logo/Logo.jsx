import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="w-12"
        src={logo}
        alt="Medicare Point"
        height="100"
        width="100"
      />
    </Link>
  );
};

export default Logo;
