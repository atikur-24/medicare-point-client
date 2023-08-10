import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import Avater from "../Avater/Avater";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const ResponsiveNavbar = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  //   console.log(isOpen);

  return (
    <div className="relative">
      <div className="px-4 flex items-center justify-between w-[70%] py-4">
        <div onClick={() => setIsOpen(!isOpen)}>
          <RiMenu2Line className="text-4xl" />
        </div>
        <Logo />
      </div>
      <hr className=" w-full  shadow-md   border-[#999999]" />
      <div className=" px-4 py-2">
        <Search />
      </div>
      {isOpen && (
        <div className="z-50 bg-[#ffffffe8] w-[70%] h-full border-[1px] border-gray-300 absolute top-0 left-0">
          <div className=" pt-10">
            <div className=" px-4 flex justify-between items-center mb-5">
              <div>
                <Avater />
              </div>
              <div className="text-3xl border-2 border-black rounded-full p-2">
                <span onClick={() => setIsOpen(!isOpen)}>
                  <MdClose />
                </span>
              </div>
            </div>
            <hr />
            <hr className=" shadow-md   border-[#999999]" />
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
