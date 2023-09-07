import { useCallback, useState } from "react";

const BookedLabTest = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="p-6">
      <div className="border shadow-lg  bg-card rounded-md border-gray-3 p-4 md:flex flex-row    items-center">
        <div className="p-4 rounded ">
          <div className=" divide-y-2 divide-gray-3">
            <h2 className="font-bold font-nunito uppercase pb-2">Vomitus For Occult Blood</h2>
            <p className="flex justify-between items-center font-bold py-2">
              <span className="text-gray-5">Amount</span> <span> ৳100</span>
            </p>
            <h2 className="font-bold py-2">September 7, 2023 6:43 PM</h2>
          </div>
          <hr className="my-2" />
          <div className="space-y-2">
            <p className="font-bold">Test Reports will be sent to</p>
            <div>
              <h2 className="text-sm font-medium">Email</h2>
              <p className="font-semibold">masud1490@gamil.com</p>
            </div>
            <div>
              <h2 className="text-sm font-medium">SMS/whatsapp</h2>
              <p className="font-semibold">0303</p>
            </div>
          </div>
        </div>

        <div className="w-full hidden md:block">
          <ul className="steps">
            <li className="step lg:w-36 xl:w-48 2xl:w-64  step-success">
              Book <br /> Received
            </li>
            <li className="step   step-success">
              Book <br /> confirmation
            </li>
            <li className="step  step-success">
              Home <br /> Sample Collection
            </li>
            <li className="step ">
              Report <br /> Generation
            </li>
          </ul>
        </div>
        <button onClick={toggleOpen} type="button" className="my-btn text-left block md:hidden">
          Track Order
        </button>
        {isOpen && (
          <div className="md:hidden">
            <ul className="steps steps-vertical">
              <li className="step   step-success">Book Received</li>
              <li className="step   step-success">Book confirmation</li>
              <li className="step  step-success">Home Sample Collection</li>
              <li className="step ">Report Generation</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedLabTest;
