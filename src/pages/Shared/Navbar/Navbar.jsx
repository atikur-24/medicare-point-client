/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Avatar from "./Avatar/Avatar";
import Lang from "./Language/Lang";
import Logo from "./Logo/Logo";
import NavCart from "./NavCard/NavCart";
import ResponsiveNavbar from "./ResponsiveNavbar/ResponsiveNavbar";
import Search from "./Search/Search";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/medicines">Medicines</NavLink>
      </li>
      <li>
        <NavLink to="/lab-test">Lab Test</NavLink>
      </li>
      <li>
        <NavLink to="/healthtips">Health Tips </NavLink>
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
  const handelLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "You are LogOut",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch(() => {});
  };
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
                  {user ? (
                    <MenuItem>
                      <button type="submit" className="font-semibold text-neutral-600" onClick={handelLogOut}>
                        LogOut
                      </button>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Link className=" font-semibold text-neutral-600" to="/login">
                        Login
                      </Link>
                    </MenuItem>
                  )}
                  {/* <MenuItem>
                    <Link className=" font-semibold text-neutral-600" to="/signUp">
                      Register
                    </Link>
                  </MenuItem> */}
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
