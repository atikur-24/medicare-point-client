/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import ActiveLink from "./ActiveLink/ActiveLink";
import Avatar from "./Avatar/Avatar";
import Lang from "./Language/Lang";
import Logo from "./Logo/Logo";
import NavCart from "./NavCard/NavCart";
import ResponsiveNavbar from "./ResponsiveNavbar/ResponsiveNavbar";
import Search from "./Search/Search";

const Navbar = () => {
  const { user, logOut, setRole } = useAuth();
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
      <li>
        <details className="dropdown dropdown-end">
          <summary className=" btn btn-ghost">More </summary>
          <ul className="p-2 shadow menu dropdown-content z-10 bg-my-accent rounded-box w-52 space-y-4">
            <li>
              <NavLink to="pharmacyRegistration">Pharmacy Registration</NavLink>
            </li>
            <li>
              <NavLink to="#">Item 2</NavLink>
            </li>
          </ul>
        </details>
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
        navigate("/");
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
                    <div className="flex flex-col">
                      <NavLink to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={handelLogOut}>
                        <MenuItem>Log Out</MenuItem>
                      </NavLink>
                      <NavLink to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={() => setRole("User")}>
                        <MenuItem>User</MenuItem>
                      </NavLink>
                      <NavLink to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={() => setRole("Pharmacist")}>
                        <MenuItem>Pharmacist</MenuItem>
                      </NavLink>
                      <NavLink to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={() => setRole("Admin")}>
                        <MenuItem>Admin</MenuItem>
                      </NavLink>
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
      <hr className="border-gray-3" />
      <div className="hidden md:block ">
        {/* TODO: bg color */}
        <div className="nav-container ">
          <div className="py-2">
            <ul className="flex items-center justify-between text-md font-semibold text-gray-5 hover:text-gray-6">{menuItems}</ul>
          </div>
        </div>
        <hr className=" border-1 border-gray-3 drop-shadow-xl" />
      </div>
      <div className=" md:hidden">
        <ResponsiveNavbar menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Navbar;
