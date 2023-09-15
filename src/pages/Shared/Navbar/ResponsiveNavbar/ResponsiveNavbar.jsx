/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useContext, useEffect, useRef, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { MdClose, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import NavCart from "../NavCard/NavCart";

const ResponsiveNavbar = ({ menuItems }) => {
  const { user, setRole, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState("-ml-96");
  const navigate = useNavigate();
  const menuRef = useRef();

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

  useEffect(() => {
    const handelOutsideClose = (e) => {
      if (!menuRef?.current?.contains(e?.target)) {
        setIsOpen("-ml-96");
      }
    };
    document.addEventListener("mousedown", handelOutsideClose);

    return () => {
      document.removeEventListener("mousedown", handelOutsideClose);
    };
  }, []);

  return (
    <div className="">
      <div className="px-4 flex items-center justify-between gap-1 w-full py-4">
        <div onClick={() => setIsOpen("")}>
          <RiMenu2Line className=" text-my-accent w-6 h-6 cursor-pointer " />
        </div>
        <span>
          <Logo />
        </span>

        <div className="flex gap-10 items-center">
          <div>
            <span>
              <NavCart />
            </span>
          </div>
          <Menu
            menuButton={
              // eslint-disable-next-line react/jsx-wrap-multilines
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
                    <MdOutlineDashboardCustomize className="text-xl" />
                    Dashboard
                  </MenuItem>
                </NavLink>
                <button type="submit" className="font-semibold text-neutral-600" onClick={handelLogOut}>
                  <MenuItem className="gap-4 items-center">
                    <HiOutlineLogout className="text-xl" /> Log Out
                  </MenuItem>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 divide-y-2 divide-gray-3">
                <Link className=" font-semibold text-neutral-600" to="/login">
                  <MenuItem className="gap-4 items-center">
                    <BiLogInCircle className="text-xl" />
                    Login
                  </MenuItem>
                </Link>
                <Link className=" font-semibold text-neutral-600" to="/signUp">
                  <MenuItem className="gap-4 items-center">
                    <CgUserlane className="text-xl" />
                    Sign Up
                  </MenuItem>
                </Link>
              </div>
            )}
          </Menu>
        </div>
      </div>
      <hr className="w-full  shadow-md border border-my-primary" />

      <div className={`z-50 !h-full shadow-2xl bg-white w-[60%]  md:w-[40%] lg:w-[30%]  border-2 rounded-lg border-gray-3 fixed top-0 left-0 ${isOpen} transition-all duration-500`} ref={menuRef}>
        <div className="pt-9">
          <div className=" px-4 flex justify-between items-center mb-5">
            <div>
              <p className=" text-my-primary  font-bold xl:hidden">
                Medicare <span className="text-my-accent">Point</span>
              </p>
            </div>
            <div className="text-2xl border-2 border-my-primary rounded-full p-1">
              <div onClick={() => setIsOpen("-ml-96")}>
                <MdClose className="text-my-primary w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          <hr className=" shadow-md border  border-my-primary " />
          <div className=" rounded-lg px-4 py-6 bg-white h-[100vh] drop-shadow-xl">
            <ul className=" space-y-4 text-2xl text-neutral-600">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
