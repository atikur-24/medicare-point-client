import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const OrderHistoryModal = ({ isOpen, setIsOpen, order }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-xl text-gray-7 font-medium leading-6 text-gray-900">
                  Order Detail
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex w-full gap-3 flex-col md:flex-row items-center my-2 ">
                    <img className="w-32 border border-dashed rounded-md border-my-primary" src={order?.image} alt="" />
                    <div>
                      <h3 className="text-xl text-gray-7 font-medium leading-6 text-gray-900">Seller Info</h3>
                      <div className="text-gray-5">
                        <p>Name: {order?.name}</p>
                        <p>Number: {order?.number}</p>
                        <p>Email: {order?.email}</p>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-3" />
                  <div className="text-gray-5">
                    <h3 className="text-lg md:text-xl font-medium text-black">{order?.medicine_name}</h3>
                    <p className="font-medium">
                      Price: <span className="text-yellow-500">৳ {order?.price}</span>
                    </p>
                    <p className="font-medium">
                      Quantity: <span className="text-[#3988ff]">{order?.quantity}</span>
                    </p>
                    <p className="font-medium">
                      Discount: <span className="text-red-500">%{order?.discount}</span>
                    </p>
                    <p className="">
                      {" "}
                      Delivery Status:{" "}
                      <span
                        className={`${order?.delivery_status === "shipping" && "text-[#209744]"} ${order?.delivery_status === "packing" && "text-yellow-500"} ${
                          order?.delivery_status === "pending" && "text-red-500"
                        } ${order?.delivery_status === "delivered" && "text-[#4075e9]"} capitalize font-medium`}
                      >
                        {order?.delivery_status}
                      </span>
                    </p>
                    <p className="font-medium">
                      Order Time: <span className="text-my-accent">{order?.dateAndTime}</span>
                    </p>
                    <p className="font-medium">
                      Expected Date:{" "}
                      <span className="text-my-primary">
                        {order?.expectedDate.map((date) => (
                          <span key={date}>{date} - </span>
                        ))}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between flex-col md:flex-row">
                  <button type="button" className="bg-my-primary text-white font-medium px-3 rounded-md">
                    Shipping
                  </button>
                  <button type="button" className="bg-red-500 text-white font-medium p-2 rounded-md" onClick={closeModal}>
                    Close Modal
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

export default OrderHistoryModal;
