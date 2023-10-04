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
      <div className="flex w-full items-center justify-between gap-1 px-4 py-4">
        <div onClick={() => setIsOpen("")}>
          <RiMenu2Line className=" h-6 w-6 cursor-pointer text-my-accent " />
        </div>
        <span>
          <Logo />
        </span>

        <div className="flex items-center gap-10">
          <div>
            <span>
              <NavCart />
            </span>
          </div>
          <div className="navMenu">
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
                  <NavLink
                    to="/dashboard"
                    type="submit"
                    className="font-semibold text-neutral-600"
                  >
                    <MenuItem className="items-center gap-4">
                      <MdOutlineDashboardCustomize className="text-xl" />
                      Dashboard
                    </MenuItem>
                  </NavLink>
                  <button
                    type="submit"
                    className="font-semibold text-neutral-600"
                    onClick={handelLogOut}
                  >
                    <MenuItem className="items-center gap-4">
                      <HiOutlineLogout className="text-xl" /> Log Out
                    </MenuItem>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 divide-y-2 divide-gray-3">
                  <Link className=" font-semibold text-neutral-600" to="/login">
                    <MenuItem className="items-center gap-4">
                      <BiLogInCircle className="text-xl" />
                      Login
                    </MenuItem>
                  </Link>
                  <Link
                    className=" font-semibold text-neutral-600"
                    to="/signUp"
                  >
                    <MenuItem className="items-center gap-4">
                      <CgUserlane className="text-xl" />
                      Sign Up
                    </MenuItem>
                  </Link>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </div>
      <hr className="w-full  border border-my-primary shadow-md" />

      <div
        className={`fixed left-0 top-0 z-50 !h-full  w-[60%] rounded-lg  border-2 border-gray-3 bg-white shadow-2xl md:w-[40%] lg:w-[30%] ${isOpen} transition-all duration-500`}
        ref={menuRef}
      >
        <div className="pt-9">
          <div className=" mb-5 flex items-center justify-between px-4">
            <div>
              <p className=" font-bold  text-my-primary xl:hidden">
                Medicare <span className="text-my-accent">Point</span>
              </p>
            </div>
            <div className="rounded-full border-2 border-my-primary p-1 text-2xl">
              <div onClick={() => setIsOpen("-ml-96")}>
                <MdClose className="h-4 w-4 cursor-pointer text-my-primary" />
              </div>
            </div>
          </div>

          <hr className=" border border-my-primary  shadow-md " />
          <div className=" h-[100vh] rounded-lg bg-white px-4 py-6 drop-shadow-xl">
            <ul className=" space-y-4 text-2xl text-neutral-600">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
