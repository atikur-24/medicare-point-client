import { MdLocationSearching } from "react-icons/md";
import Swal from "sweetalert2";

const BookLabCard = ({ book, isOpen, toggleOpen }) => {
  const { test_name, remaining, email, mobile, dateTime } = book || {};

  const handlerAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Sample collector on the way",
      text: "Please Wait...",
      showConfirmButton: true,
    });
  };

  return (
    <div className="pb-6">
      <div className="border box-shadow  bg-white rounded-2xl border-gray-3 p-4 xl:flex flex-row justify-around    items-center">
        <div className="p-4 rounded lg:w-[35%] 2xl:w-[30%]">
          <div className=" divide-y-2 divide-gray-3">
            <h2 className="font-bold font-nunito uppercase pb-2">{test_name}</h2>
            <p className="flex justify-between items-center font-bold py-2">
              <span className="text-gray-5">Amount</span> <span> ৳{remaining}</span>
            </p>
            <h2 className="font-bold py-2">{dateTime}</h2>
          </div>
          <hr className="my-2" />
          <div className="space-y-2">
            <p className="font-bold">Test Reports will be sent to</p>
            <div>
              <h2 className="text-sm font-medium">Email</h2>
              <p className="font-semibold">{email}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium">SMS/whatsapp</h2>
              <p className="font-semibold">{mobile}</p>
            </div>
          </div>
        </div>

        <div className=" hidden xl:block">
          <ul className="steps">
            <li className="step  step-success">
              Book <br /> Received
            </li>
            <li className="step step-success  ">
              Book <br /> confirmation
            </li>
            <li className="step  ">
              Home <br /> Sample Collection
            </li>
            <li className="step ">
              Report <br /> Generation
            </li>
          </ul>
        </div>

        <button onClick={handlerAlert} className="my-btn !hidden xl:!block" type="button">
          Lab Report
        </button>

        <div className=" xl:hidden">
          <div className="flex items-center gap-3">
            <button onClick={toggleOpen} type="button" className="my-btn text-left ">
              <MdLocationSearching className="text-2xl" /> Track Order
            </button>
            <button onClick={handlerAlert} className="my-btn" type="button">
              Lab Report
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden">
            <ul className="steps steps-vertical">
              <li className="step   step-success">Book Received</li>
              <li className="step  step-success  ">Book confirmation</li>
              <li className="step  ">Home Sample Collection</li>
              <li className="step ">Report Generation</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookLabCard;
