/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment } from "react";
import toast from "react-hot-toast";
import { MdOutlineFeedback } from "react-icons/md";
import Swal from "sweetalert2";

const FeedBackModal = ({ isOpen, setIsOpen, data }) => {
  function closeModal() {
    setIsOpen(false);
  }

  const handelFeedback = (event) => {
    event.preventDefault();
    const feedBack = event.target.feedback.value;

    if (!feedBack) {
      toast.error("Your feedback field is empty");
    } else {
      axios.put(`http://localhost:5000/medicine-feedback/${data?._id}`, { feedback: feedBack }).then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire("Sended", "Feedback Successful Sended", "success");
        }
      });
    }
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl flex items-center  gap-2 font-semibold leading-6 text-gray-900">
                    <MdOutlineFeedback /> Give Your Feedback
                  </Dialog.Title>
                  <div className="my-4">
                    <p className=" text-gray-500">What do you think this product not perfect for approved? Why do you want to deny it? </p>
                  </div>

                  <div className="my-5 ">
                    <form onSubmit={handelFeedback}>
                      <label className="text-sm pl-2" htmlFor="feedback">
                        Write here what needs to be improved to be approved?
                      </label>
                      <textarea className="w-full border-2 border-my-accent rounded-md focus:outline-none p-4" name="feedback" id="feedback" />
                      <div onClick={closeModal} className="flex items-center justify-between">
                        <input placeholder="Write your message" required className="p-2 bg-yellow-500 hover:bg-[#F8991D] text-white cursor-pointer rounded-md ease-in-out duration-300" type="submit" value="Send Feedback " />
                        <button onClick={closeModal} className="p-2 bg-red-500  text-white cursor-pointer rounded-md " type="button">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FeedBackModal;
