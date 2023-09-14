/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import ActiveLink from "./ActiveLink/ActiveLink";
import Avatar from "./Avatar/Avatar";
import Lang from "./Language/Lang";
import Logo from "./Logo/Logo";
import NavCart from "./NavCard/NavCart";
import ResponsiveNavbar from "./ResponsiveNavbar/ResponsiveNavbar";
import Search from "./Search/Search";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const menuItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/medicines">Medicines</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/lab-test">Lab Test</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/healthtips">Health Tips </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/services">Services</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about-us">About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contract">Contacts</ActiveLink>
      </li>
    </>
  );
  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout", { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <>
      <div className="nav-container ">
        <div className="hidden xl:block">
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
                    <div className="flex flex-col gap-2 divide-y-2 divide-gray-3">
                      <NavLink to="/dashboard" type="submit" className="font-semibold text-neutral-600">
                        <MenuItem className="gap-4 items-center">
                          <MdOutlineDashboardCustomize className="text-3xl" />
                          Dashboard
                        </MenuItem>
                      </NavLink>
                      <button type="submit" className="font-semibold text-neutral-600" onClick={handelLogOut}>
                        <MenuItem className="gap-4 items-center">
                          <HiOutlineLogout className="text-3xl" /> Log Out
                        </MenuItem>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Link className=" font-semibold text-neutral-600" to="/login">
                        <MenuItem>Login</MenuItem>
                      </Link>
                      <Link className=" font-semibold text-neutral-600" to="/signUp">
                        <MenuItem>Sign Up</MenuItem>
                      </Link>
                    </div>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-3" />
      <div className="hidden xl:block ">
        <div className="nav-container ">
          <div className="py-2">
            <ul className="flex items-center justify-between text-md font-semibold text-gray-5 hover:text-gray-6 py-1 2xl:py-2">{menuItems}</ul>
          </div>
        </div>
        <hr className=" border-1 border-gray-3 drop-shadow-xl" />
      </div>
      <div className=" xl:hidden">
        <ResponsiveNavbar menuItems={menuItems} />
      </div>
    </>
  );
};

export default Navbar;
