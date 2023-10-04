import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment } from "react";
import toast from "react-hot-toast";

const OrderHistoryModal = ({
  isOpen,
  setIsOpen,
  order,
  setIsClick,
  isClick,
}) => {
  function closeModal() {
    setIsOpen(false);
  }

  const handelChangeStatus = (id) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/deliveryStatus/${id}`, {
        delivery_status: "shipping",
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setIsClick(isClick + 1);
          toast.success("Order Shipping");
          closeModal();
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
          <div className="fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 !z-[60] overflow-y-auto  bg-black/25">
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
                <Dialog.Title
                  as="h3"
                  className="text-gray-900 text-xl font-medium leading-6 text-gray-7"
                >
                  Order Details:
                </Dialog.Title>
                <div className="mt-2">
                  <div className="my-2 flex w-full flex-col justify-between gap-3 md:flex-row ">
                    <img
                      className="w-32 rounded-md border border-dashed border-my-primary"
                      src={order?.image}
                      alt="medicine"
                    />
                    <div>
                      <h3 className="text-gray-900 font-medium leading-6 text-gray-7">
                        Seller Info:
                      </h3>
                      <div className="text-sm text-gray-5">
                        <p>
                          <span className="text-black">Name:</span>{" "}
                          {order?.pharmacist_name || "Md. Atikur Rahman"}
                        </p>
                        <p>
                          <span className="text-black">Email:</span>{" "}
                          {order?.pharmacist_email || "abdullah65@gmail.com"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium leading-6 text-gray-7">
                        Customer Info:
                      </h3>
                      <div className="text-sm text-gray-5">
                        <p>
                          <span className="text-black">Name:</span>{" "}
                          {order?.name}
                        </p>
                        <p>
                          <span className="text-black">Email:</span>{" "}
                          {order?.email}
                        </p>
                        <p>
                          <span className="text-black">Number:</span>{" "}
                          {order?.number}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-3" />
                  <div className="text-sm text-black lg:text-base">
                    <h3 className="text-lg font-medium text-black md:text-lg">
                      {order?.medicine_name}
                    </h3>
                    <p>
                      Division:{" "}
                      <span className="capitalize text-gray-6">
                        {order?.division}
                      </span>
                    </p>
                    <p>
                      District:{" "}
                      <span className="capitalize text-gray-6">
                        {order?.district}
                      </span>
                    </p>
                    <p>
                      Location:{" "}
                      <span className="capitalize text-gray-6">
                        {" "}
                        {order?.location}
                      </span>
                    </p>
                    <p>
                      Payment Status:{" "}
                      <span
                        className={
                          order?.status === "success"
                            ? "capitalize text-my-accent"
                            : "capitalize text-red-400"
                        }
                      >
                        {order?.status}
                      </span>
                    </p>
                    <p>
                      Delivery Status:{" "}
                      <span
                        className={`${
                          order?.delivery_status === "shipping" &&
                          "text-my-accent"
                        } ${
                          order?.delivery_status === "packing" && "text-my-pink"
                        } ${
                          order?.delivery_status === "pending" &&
                          "text-yellow-500"
                        } ${
                          order?.delivery_status === "delivered" &&
                          "text-my-primary"
                        } ${
                          order?.delivery_status === "canceled" &&
                          "text-red-400"
                        } text-center font-medium capitalize`}
                      >
                        {order?.delivery_status}
                      </span>
                    </p>
                    <p className="font-medium">
                      Order Time:{" "}
                      <span className="text-gray-6">{order?.dateAndTime}</span>
                    </p>
                    <p className="font-medium">
                      Expected Delivery Date:{" "}
                      <span className="text-my-primary">
                        {order?.expectedDate?.map((date, idx) => (
                          <span key={idx}>{date} </span>
                        ))}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col justify-between md:flex-row">
                  {order?.pharmacist_response === true &&
                  order?.delivery_status !== "shipping" ? (
                    <button
                      onClick={() => handelChangeStatus(order?._id)}
                      type="button"
                      className="rounded-md bg-my-primary px-3 font-medium text-white"
                    >
                      Shipping
                    </button>
                  ) : (
                    <button className="btn cursor-not-allowed" type="button">
                      Shipping
                    </button>
                  )}
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

export default OrderHistoryModal;
