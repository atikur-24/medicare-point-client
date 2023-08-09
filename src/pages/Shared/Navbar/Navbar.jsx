import { NavLink } from "react-router-dom";
import Avater from "./Avater/Avater";
import Lang from "./Language/Lang";
import Logo from "./Logo/Logo";
import NavCard from "./NavCard/NavCard";
import Search from "./Search/Search";

const Navbar = () => {
  const MenuItems = (
    <>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Home</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 1</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 2</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 3</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 4</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 5</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 6</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 7</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 8</NavLink>
      </li>
      <li className="hover:text-neutral-900 ">
        <NavLink to="#">Route 9</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#d9d9d9]">
      <div className="nav-container ">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-10 justify-between">
            <Logo />
            <Search />
          </div>
          <div className="flex items-center gap-4">
            <Lang />
            <NavCard />
            <hr className=" border-r-2 h-12 border-[#6b6a6a] " />
            <div>
              <p className="font-semibold">
                Login/ <br />
                Register
              </p>
            </div>
            <Avater />
          </div>
        </div>
      </div>
      <hr className=" w-full shadow-md   border-[#999999]" />
      <div className="bg-[#d9d9d9] nav-container">
        <div className="py-2">
          <ul className="flex items-center justify-between text-md text-neutral-600 font-semibold">
            {MenuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
