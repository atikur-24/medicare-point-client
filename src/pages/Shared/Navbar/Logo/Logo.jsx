import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img className="w-32" src={logo} alt="Medicare Point" height="100" width="100" />
    </Link>
  );
};

export default Logo;
