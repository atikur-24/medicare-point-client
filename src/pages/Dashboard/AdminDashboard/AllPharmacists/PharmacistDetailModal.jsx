/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiCreditCard, BiSolidPhone } from "react-icons/bi";
import {
  MdLocationOn,
  MdMarkEmailRead,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { TbMedicineSyrup } from "react-icons/tb";

const PharmacistDetailModal = ({ isOpen, setIsOpen, user }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 !z-[60] overflow-y-auto  bg-black/25">
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl  transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="ext-lg  text-gray-900 p-6 text-2xl font-semibold leading-6"
                >
                  {user?.pharmacistDetail?.pharmacyName}
                </Dialog.Title>
                <hr className=" border-gray-3" />
                <div className="mt-2 flex gap-12 p-6">
                  <div>
                    <img
                      className="mx-auto h-24 w-24 rounded-full"
                      src={user?.image}
                      alt="pharmacistImage"
                    />
                    <h4 className="text-xl font-medium text-my-accent ">
                      {user?.name}
                    </h4>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-gray-5">
                      <MdMarkEmailRead className="text-xl  text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        Pharmacy Email:{" "}
                      </span>
                      {user?.pharmacistDetail?.pharmacyEmailAddress}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <BiSolidPhone className="text-xl  text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        Pharmacy Phone:{" "}
                      </span>
                      {user?.pharmacistDetail?.pharmacyPhoneNumber}
                    </p>
                    <div className="text-gray-5 ">
                      <div className="flex items-center gap-2">
                        <MdLocationOn className="text-xl  text-black" />{" "}
                        <span className="font-medium text-gray-7">
                          Pharmacy Address:{" "}
                        </span>
                      </div>
                      <div className="ml-7">
                        Division: {user?.pharmacistDetail?.division} <br />
                        District: {user?.pharmacistDetail?.district} <br />
                        Full Location :{" "}
                        {user?.pharmacistDetail?.pharmacyFullAddress}
                      </div>
                    </div>
                    <p className="flex items-center gap-2 text-gray-5">
                      <BiCreditCard className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        License Number:{" "}
                      </span>
                      {user?.pharmacistDetail?.pharmacistLicense}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <TbMedicineSyrup className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        Medicine Sold:{" "}
                      </span>
                      {user?.pharmacistDetail?.medicinesSold}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <MdOutlineLocalShipping className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        Shipping Information:{" "}
                      </span>
                      {user?.pharmacistDetail?.shippingInformation}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <button
                    type="button"
                    className=" rounded-md bg-my-accent p-2 text-white  hover:bg-my-primary"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PharmacistDetailModal;
