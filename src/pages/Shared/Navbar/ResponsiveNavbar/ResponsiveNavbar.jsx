/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";

const ResponsiveNavbar = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="">
      <div className="px-4 flex items-center justify-between w-[70%] py-4">
        <div onClick={toggleOpen}>
          <RiMenu2Line className=" text-my-accent w-6 h-6 cursor-pointer " />
        </div>
        <Logo />
      </div>
      <hr className="w-full  shadow-md border border-my-primary" />

      {isOpen && (
        <div className="z-50 bg-white w-[70%] h-full border border-gray-3 absolute top-0 left-0 ">
          <div className=" pt-[37px] ">
            <div className=" px-4 flex justify-between items-center mb-5">
              <div>
                <Avatar />
              </div>
              <div className="text-2xl border-2 border-my-primary rounded-full p-1">
                <div onClick={toggleOpen}>
                  <MdClose className="text-my-primary w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>

            <hr className=" shadow-md border  border-my-primary " />
            <div className=" px-4 py-6 bg-[#ffffffe8] h-[100vh]">
              <ul className=" space-y-4 text-2xl text-neutral-600">{menuItems}</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
