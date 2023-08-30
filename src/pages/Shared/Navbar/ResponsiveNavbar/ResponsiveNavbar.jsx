/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import NavCart from "../NavCard/NavCart";

import { AuthContext } from "../../../../contexts/AuthProvider";

const ResponsiveNavbar = ({ menuItems }) => {
  const { user, setRole, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState("-ml-96");
  const navigate = useNavigate();
  const menuRef = useRef();
  // console.log(user);

  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);

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
    const handelOutsiteClose = (e) => {
      if (!menuRef?.current?.contains(e?.target)) {
        setIsOpen("-ml-96");
      }
    };
    document.addEventListener("mousedown", handelOutsiteClose);

    return () => {
      document.removeEventListener("mousedown", handelOutsiteClose);
    };
  }, []);

  return (
    <div className="">
      <div className="px-4 flex items-center justify-between gap-2 w-[full] py-4">
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
              <div className="flex flex-col">
                <button type="button" className="font-semibold text-neutral-600" onClick={handelLogOut}>
                  <MenuItem>Log Out</MenuItem>
                </button>
                <Link to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={() => setRole("User")}>
                  <MenuItem>User</MenuItem>
                </Link>
                <Link to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={() => setRole("Pharmacist")}>
                  <MenuItem>Pharmacist</MenuItem>
                </Link>
                <Link to="/dashboard" type="submit" className="font-semibold text-neutral-600" onClick={() => setRole("Admin")}>
                  <MenuItem>Admin</MenuItem>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="font-semibold text-neutral-600">
                  <MenuItem>Login</MenuItem>
                </Link>
                <Link to="/signUp" className="font-semibold text-neutral-600">
                  <MenuItem>Sign Up</MenuItem>
                </Link>
              </>
            )}
          </Menu>
        </div>
      </div>
      <hr className="w-full  shadow-md border border-my-primary" />

      {/* {isOpen && ( */}
      <div className={`z-50 shadow-2xl bg-white w-[50%] h-full border-2 rounded-lg border-gray-3 absolute top-0 left-0 ${isOpen} transition-all duration-500`} ref={menuRef}>
        <div className=" pt-[37px] ">
          <div className=" px-4 flex justify-between items-center mb-5">
            <div>
              <p className=" text-my-primary  font-bold md:hidden">
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
      {/* )} */}
    </div>
  );
};

export default ResponsiveNavbar;
