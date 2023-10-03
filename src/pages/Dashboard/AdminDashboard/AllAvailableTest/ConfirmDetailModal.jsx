import { Fragment } from "react";
/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import { BiEuro, BiNote, BiSolidEyedropper, BiSolidPhone, BiTimeFive } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";

import axios from "axios";
import ageIcon from "../../../../assets/images/age-icon.svg";

const ConfirmDetailModal = ({ isOpen, toggleOpen, data, setData, click, setClick }) => {
  const { address, age, _id, area, email, test_name, transId, dateTime, discount, price, remaining, status, note, mobile } = data || {};
  function closeModal() {
    toggleOpen();
    setData({});
  }

  const handleDeliverySing = () => {
    axios.post("http://localhost:5000/labDeliveryStatus", { id: _id }).then((res) => {
      if (res.data?.modifiedCount > 0) {
        closeModal();
        setClick(click + 1);
      }
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-25 !z-[60]">
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-2xl  transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 my-2">
                  <span className="text-2xl font-semibold p-6">Booking Details</span>
                </Dialog.Title>
                <hr className=" border-gray-3" />
                <div className="mt-2 p-6 flex gap-12">
                  <div className="space-y-2">
                    <p className="text-gray-5 flex gap-2 items-center">
                      <BiSolidEyedropper className="text-xl text-black" /> <span className="text-gray-7 font-medium">Test Name: </span>
                      {test_name}
                    </p>
                    <p className="text-gray-5 flex gap-2 items-center">
                      <GrTransaction className="text-xl text-black" /> <span className="text-gray-7 font-medium">Transaction: </span>
                      {transId}
                    </p>
                    <p className="text-gray-5 flex gap-2 items-center">
                      <MdMarkEmailRead className="text-xl  text-black" /> <span className="text-gray-7 font-medium"> Email</span>
                      {email}
                    </p>
                    <p className="text-gray-5 flex gap-2 items-center">
                      <BiSolidPhone className="text-xl  text-black" /> <span className="text-gray-7 font-medium">Phone</span>
                      {mobile}
                    </p>
                    <div className="text-gray-5 ">
                      <div className="flex gap-2 items-center">
                        <MdLocationOn className="text-xl  text-black" /> <span className="text-gray-7 font-medium"> Address</span>
                      </div>
                      <div className="ml-7">
                        Arddrss: {address} <br />
                        Area: {area} <br />
                      </div>
                    </div>

                    <p className="text-gray-5 flex gap-2 items-center">
                      <img src={ageIcon} className="text-xl text-black w-5 h-5" alt="" /> <span className="text-gray-7 font-medium">Age: </span>
                      {age}
                    </p>
                    <p className="text-gray-5 flex gap-2 items-center">
                      <BiTimeFive className="text-xl text-black" /> <span className="text-gray-7 font-medium">Time: </span>
                      {dateTime}
                    </p>
                    <p className="text-gray-5 flex gap-2 items-center">
                      <BiEuro className="text-xl text-black" /> <span className="text-gray-7 font-medium">BDT: </span>
                      {discount > 0 && <span className="line-through">৳{price}</span>} {discount > 0 ? <span className="badge  bg-my-primary border-0 badge-accent text-white py-0.5 font-bold">{discount}% off </span> : ""}{" "}
                      <span className="text-base text-my-primary ">৳{remaining}</span>
                    </p>
                    {note && (
                      <p className="text-gray-5 flex gap-2 items-center">
                        <BiNote className="text-xl text-black" /> <span className="text-gray-7 font-medium">Note: </span>
                        {note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 flex gap-4">
                  <button disabled={status === "success"} onClick={handleDeliverySing} type="button" className="my-btn">
                    Book Confirm
                  </button>
                  <button type="button" className="btn btn-error" onClick={closeModal}>
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
