import { Fragment } from "react";
/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import {
  BiEuro,
  BiNote,
  BiSolidEyedropper,
  BiSolidPhone,
  BiTimeFive,
} from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";

import axios from "axios";
import ageIcon from "../../../../assets/images/age-icon.svg";

const ConfirmDetailModal = ({
  isOpen,
  toggleOpen,
  data,
  setData,
  setClick,
}) => {
  const {
    address,
    age,
    _id,
    area,
    email,
    test_name,
    transId,
    dateTime,
    discount,
    price,
    remaining,
    status,
    note,
    mobile,
  } = data || {};
  function closeModal() {
    toggleOpen();
    setData({});
  }

  const handleDeliverySing = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/labDeliveryStatus`, { id: _id })
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          closeModal();
          setClick((click) => click + 1);
        }
      });
  };

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
          <div className="fixed inset-0 bg-black/25" />
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
                  className="text-gray-900 my-2 text-lg font-medium leading-6"
                >
                  <span className="p-6 text-2xl font-semibold">
                    Booking Details
                  </span>
                </Dialog.Title>
                <hr className=" border-gray-3" />
                <div className="mt-2 flex gap-12 p-6">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-5">
                      <BiSolidEyedropper className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        Test Name:{" "}
                      </span>
                      {test_name}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <GrTransaction className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">
                        Transaction:{" "}
                      </span>
                      {transId}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <MdMarkEmailRead className="text-xl  text-black" />{" "}
                      <span className="font-medium text-gray-7"> Email</span>
                      {email}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <BiSolidPhone className="text-xl  text-black" />{" "}
                      <span className="font-medium text-gray-7">Phone</span>
                      {mobile}
                    </p>
                    <div className="text-gray-5 ">
                      <div className="flex items-center gap-2">
                        <MdLocationOn className="text-xl  text-black" />{" "}
                        <span className="font-medium text-gray-7">
                          {" "}
                          Address
                        </span>
                      </div>
                      <div className="ml-7">
                        Arddrss: {address} <br />
                        Area: {area} <br />
                      </div>
                    </div>

                    <p className="flex items-center gap-2 text-gray-5">
                      <img
                        src={ageIcon}
                        className="h-5 w-5 text-xl text-black"
                        alt=""
                      />{" "}
                      <span className="font-medium text-gray-7">Age: </span>
                      {age}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <BiTimeFive className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">Time: </span>
                      {dateTime}
                    </p>
                    <p className="flex items-center gap-2 text-gray-5">
                      <BiEuro className="text-xl text-black" />{" "}
                      <span className="font-medium text-gray-7">BDT: </span>
                      {discount > 0 && (
                        <span className="line-through">৳{price}</span>
                      )}{" "}
                      {discount > 0 ? (
                        <span className="badge  badge-accent border-0 bg-my-primary py-0.5 font-bold text-white">
                          {discount}% off{" "}
                        </span>
                      ) : (
                        ""
                      )}{" "}
                      <span className="text-base text-my-primary ">
                        ৳{remaining}
                      </span>
                    </p>
                    {note && (
                      <p className="flex items-center gap-2 text-gray-5">
                        <BiNote className="text-xl text-black" />{" "}
                        <span className="font-medium text-gray-7">Note: </span>
                        {note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 p-6">
                  <button
                    disabled={status === "success"}
                    onClick={handleDeliverySing}
                    type="button"
                    className="my-btn"
                  >
                    Book Confirm
                  </button>
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={closeModal}
                  >
                    Close
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

export default ConfirmDetailModal;
