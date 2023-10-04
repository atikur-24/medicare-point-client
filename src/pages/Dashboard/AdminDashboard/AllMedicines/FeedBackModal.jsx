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
      axios
        .put(`${import.meta.env.VITE_API_URL}/medicine-feedback/${data?._id}`, {
          feedback: feedBack,
        })
        .then((res) => {
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
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 flex items-center  gap-2 text-2xl font-semibold leading-6"
                  >
                    <MdOutlineFeedback /> Give Your Feedback
                  </Dialog.Title>
                  <div className="my-4">
                    <p className=" text-gray-500">
                      What do you think this product not perfect for approved?
                      Why do you want to deny it?{" "}
                    </p>
                  </div>

                  <div className="my-5 ">
                    <form onSubmit={handelFeedback}>
                      <label className="pl-2 text-sm" htmlFor="feedback">
                        Write here what needs to be improved to be approved?
                      </label>
                      <textarea
                        className="w-full rounded-md border-2 border-my-accent p-4 focus:outline-none"
                        name="feedback"
                        id="feedback"
                      />
                      <div
                        onClick={closeModal}
                        className="flex items-center justify-between"
                      >
                        <input
                          placeholder="Write your message"
                          required
                          className="cursor-pointer rounded-md bg-yellow-500 p-2 text-white duration-300 ease-in-out hover:bg-[#F8991D]"
                          type="submit"
                          value="Send Feedback "
                        />
                        <button
                          onClick={closeModal}
                          className="cursor-pointer rounded-md  bg-red-500 p-2 text-white "
                          type="button"
                        >
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
