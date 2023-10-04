/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";

import { AuthContext } from "../../../../../contexts/AuthProvider";

const ReturnOrderModal = ({ isOpen, setIsOpen }) => {
  const { user } = useContext(AuthContext);

  function closeModal() {
    setIsOpen(false);
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const location = event.target.location.value;
    const description = event.target.description.value;
    console.log(name, email, location, description);
    event.target.reset();
    closeModal();
  };

  return (
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
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-2xl  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="  text-gray-900 font-medium leading-6"
                >
                  <p className="text-xl font-medium lg:text-2xl">
                    Order Return Form
                  </p>
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handelSubmit}>
                    <div className="flex flex-col justify-between md:flex-row md:gap-6">
                      <div className="mt-2 w-full">
                        <label className="text-sm" htmlFor="name">
                          Name
                        </label>
                        <br />
                        <input
                          className="w-full  rounded   border border-my-accent  p-1 font-medium placeholder-gray-4 focus:border-2 focus:border-my-primary focus:outline-none "
                          type="text"
                          name="name"
                          id="name"
                          disabled
                          defaultValue={user?.displayName}
                          placeholder="Name"
                        />
                      </div>
                      <div className="mt-2 w-full">
                        <label className="text-sm" htmlFor="email">
                          Email
                        </label>
                        <br />
                        <input
                          className="w-full   rounded   border border-my-accent  p-1 font-medium placeholder-gray-4 focus:border-2 focus:border-my-primary focus:outline-none "
                          type="email"
                          name="email"
                          id="email"
                          disabled
                          defaultValue={user?.email}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-2 w-full">
                        <label className="text-sm" htmlFor="number">
                          Phone Number
                        </label>
                        <br />
                        <input
                          className="w-full  rounded   border border-my-accent  p-1 font-medium placeholder-gray-4 focus:border-2 focus:border-my-primary focus:outline-none "
                          type="number"
                          name="number"
                          id="number"
                          placeholder="phone Number"
                        />
                      </div>
                      <div className="mt-2 w-full">
                        <label className="text-sm" htmlFor="location">
                          Location
                        </label>
                        <br />
                        <input
                          className="w-full   rounded border border-my-accent  p-1 font-medium placeholder-gray-4 focus:border-2 focus:border-my-primary focus:outline-none "
                          type="text"
                          name="location"
                          id="location"
                          placeholder="write you full location"
                        />
                      </div>
                      <div className="mt-2 w-full">
                        <label className="text-sm" htmlFor="description">
                          Why are you return this order
                        </label>
                        <br />
                        <textarea
                          className="h-24   w-full rounded border  border-my-accent p-1 font-medium placeholder-gray-4 focus:border-2 focus:border-my-primary focus:outline-none "
                          type="text"
                          name="description"
                          id="description"
                          placeholder="Why are you return this order"
                        />
                      </div>
                    </div>
                    <input
                      className="cursor-pointer rounded-md bg-my-accent p-2 text-white"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReturnOrderModal;
