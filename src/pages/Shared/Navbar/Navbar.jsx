/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link, NavLink } from "react-router-dom";
import Lang from "./Language/Lang";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import NavCart from "./NavCard/NavCart";
import Avatar from "./Avatar/Avatar";
import ResponsiveNavbar from "./ResponsiveNavbar/ResponsiveNavbar";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="#">Home</NavLink>
      </li>
      <li>
        <NavLink to="#">Medicine</NavLink>
      </li>
      <li>
        <NavLink to="/lab-test">Lab Test</NavLink>
      </li>
      <li>
        <NavLink to="#">Health Tips </NavLink>
      </li>
      <li>
        <NavLink to="#">Services</NavLink>
      </li>
      <li>
        <NavLink to="#">About Us</NavLink>
      </li>
      <li>
        <NavLink to="#">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="#">More</NavLink>
      </li>
    </>
  );
  return (
    // TODO: bg color
    <div className="">
      <div className="nav-container ">
        <div className=" hidden md:block">
          <div className="flex items-center justify-between py-2 ">
            <div className="flex items-center gap-10 justify-between">
              <Logo />
              <Search />
            </div>
            <div className="flex items-center gap-4 lg:gap-10">
              <Lang />
              <NavCart />
              <div>
                <Menu
                  menuButton={
                    <MenuButton>
                      <Avatar />
                    </MenuButton>
                  }
                  transition
                >
                  <MenuItem>
                    <Link className=" font-semibold text-neutral-600" to="/login">
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className=" font-semibold text-neutral-600" to="/register">
                      Register
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-full shadow-md" />
      <div className="hidden md:block">
        {/* TODO: bg color */}
        <div className="nav-container">
          <div className="py-2">
            <ul className="flex items-center justify-between text-md font-semibold">{menuItems}</ul>
          </div>
        </div>
      </div>
      <div className=" md:hidden">
        <ResponsiveNavbar menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Navbar;
