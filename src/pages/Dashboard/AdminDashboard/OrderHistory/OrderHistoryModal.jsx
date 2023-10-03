import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment } from "react";
import toast from "react-hot-toast";

const OrderHistoryModal = ({ isOpen, setIsOpen, order, setIsClick, isClick }) => {
  function closeModal() {
    setIsOpen(false);
  }

  const handelChangeStatus = (id) => {
    axios.patch(`http://localhost:5000/deliveryStatus/${id}`, { delivery_status: "shipping" }).then((res) => {
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
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-25 !z-[60]">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-xl text-gray-7 font-medium leading-6 text-gray-900">
                  Order Details:
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex w-full gap-3 flex-col md:flex-row justify-between my-2 ">
                    <img className="w-32 border border-dashed rounded-md border-my-primary" src={order?.image} alt="medicine" />
                    <div>
                      <h3 className="text-gray-7 font-medium leading-6 text-gray-900">Seller Info:</h3>
                      <div className="text-gray-5 text-sm">
                        <p>
                          <span className="text-black">Name:</span> {order?.pharmacist_name || "Md. Atikur Rahman"}
                        </p>
                        <p>
                          <span className="text-black">Email:</span> {order?.pharmacist_email || "abdullah65@gmail.com"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-7 font-medium leading-6 text-gray-900">Customer Info:</h3>
                      <div className="text-gray-5 text-sm">
                        <p>
                          <span className="text-black">Name:</span> {order?.name}
                        </p>
                        <p>
                          <span className="text-black">Email:</span> {order?.email}
                        </p>
                        <p>
                          <span className="text-black">Number:</span> {order?.number}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-3" />
                  <div className="text-black text-sm lg:text-base">
                    <h3 className="text-lg md:text-lg font-medium text-black">{order?.medicine_name}</h3>
                    <p>
                      Division: <span className="text-gray-6 capitalize">{order?.division}</span>
                    </p>
                    <p>
                      District: <span className="text-gray-6 capitalize">{order?.district}</span>
                    </p>
                    <p>
                      Location: <span className="text-gray-6 capitalize"> {order?.location}</span>
                    </p>
                    <p>
                      Payment Status: <span className={order?.status === "success" ? "text-my-accent capitalize" : "text-red-400 capitalize"}>{order?.status}</span>
                    </p>
                    <p>
                      Delivery Status:{" "}
                      <span
                        className={`${order?.delivery_status === "shipping" && "text-my-accent"} ${order?.delivery_status === "packing" && "text-my-pink"} ${order?.delivery_status === "pending" && "text-yellow-500"} ${
                          order?.delivery_status === "delivered" && "text-my-primary"
                        } ${order?.delivery_status === "canceled" && "text-red-400"} capitalize font-medium text-center`}
                      >
                        {order?.delivery_status}
                      </span>
                    </p>
                    <p className="font-medium">
                      Order Time: <span className="text-gray-6">{order?.dateAndTime}</span>
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

                <div className="mt-4 flex justify-between flex-col md:flex-row">
                  {order?.pharmacist_response === true && order?.delivery_status !== "shipping" ? (
                    <button onClick={() => handelChangeStatus(order?._id)} type="button" className="bg-my-primary text-white font-medium px-3 rounded-md">
                      Shipping
                    </button>
                  ) : (
                    <button className="btn cursor-not-allowed" type="button">
                      Shipping
                    </button>
                  )}
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

export default OrderHistoryModal;
