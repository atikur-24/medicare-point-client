import { BiSolidUser } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { MdAccessTimeFilled, MdAddIcCall, MdLocationOn } from "react-icons/md";

const NewMedicineRequest = () => {
  return (
    <div>
      <h3 className="text-3xl">New Medicine request</h3>
      <div className=" text-gray-6 bg-white box-shadow rounded-2xl">
        <figure className="bg-white rounded-2xl">
          <img className="md:w-3/4 h-48  mx-auto " src="https://i.ibb.co/X3Szs2Z/product-12-2.jpg" alt="" />
        </figure>
        <div className="p-3 space-y-1">
          <h4 className="uppercase text-lg font-semibold">Alkalina 600mg</h4>
          <p className="flex items-center gap-2">
            <BiSolidUser />
            <span>Mr. xyz</span>
          </p>
          <p className="flex items-center gap-2">
            <MdAddIcCall />
            <span>0123456789</span>
          </p>
          <p className="flex items-center gap-2">
            <MdLocationOn />
            <span>Uttara, Dhaka</span>
          </p>
          <p className="flex items-center gap-2">
            <MdAccessTimeFilled />
            <span>Need in: 2 days</span>
          </p>
          <div className="flex justify-between items-center">
            <p>Quantity: 50</p>

            <button type="button">
              <FcApproval className="text-3xl hover:scale-150" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMedicineRequest;
