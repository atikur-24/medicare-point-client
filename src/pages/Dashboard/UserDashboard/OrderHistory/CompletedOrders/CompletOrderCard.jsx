import { useState } from "react";
import ReturnOrderModal from "./ReturnOrderModal";

const CompletOrderCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex border-b flex-col md:flex-row gap-5 border-gray-3 md:items-center md:justify-between p-5">
      <h2 className="text-base lg:text-lg">No Delivered Product</h2>
      <button disabled onClick={() => setIsOpen(!isOpen)} type="button" className="text-white bg-red-500 opacity-50 py-1 px-2 rounded-md">
        Return
      </button>
      {/* <div className="flex gap-3">
        <img className="w-20 h-24" src="https://5.imimg.com/data5/SELLER/Default/2022/7/FQ/DJ/KG/153946829/pain-killer-tablet-500x500.jpg" alt="medicine" />
        <div className="flex flex-col  justify-between">
          <div>
            <h3 className="text-lg lg:text-xl font-medium text-gray-7">Move</h3>
            <p className="text-gray-4">By pain relief</p>
          </div>
          <div className="space-x-4 lg:space-x-6">
            <span className="text-gray-4">QTY:5</span>
            <span className="text-black font-semibold lg:font-bold tracking-wide">TK: 50</span>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-4">Delivery Expected By</p>
        <p className="text-black font-semibold lg:font-bold tracking-wide">10 Sep- 13 Sep 2023</p>
      </div>
      <div className="">
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-white bg-red-500 py-1 px-2 rounded-md">
          Return Order
        </button>
      </div>
      <ReturnOrderModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
};

export default CompletOrderCard;
