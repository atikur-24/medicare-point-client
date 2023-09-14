const BookLabCard = ({ book, isOpen, toggleOpen }) => {
  const { test_name, remaining, email, mobile, dateTime } = book || {};

  return (
    <div className="pb-6">
      <div className="border box-shadow  bg-white rounded-2xl border-gray-3 p-4 xl:flex flex-row    items-center">
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

        <div className="w-full hidden xl:block">
          <ul className="steps">
            <li className="step lg:w-36 xl:w-40 2xl:w-64  step-success">
              Book <br /> Received
            </li>
            <li className="step   ">
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
        <button onClick={toggleOpen} type="button" className="my-btn text-left block xl:hidden">
          Track Order
        </button>
        {isOpen && (
          <div className="xl:hidden">
            <ul className="steps steps-vertical">
              <li className="step   step-success">Book Received</li>
              <li className="step   ">Book confirmation</li>
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
