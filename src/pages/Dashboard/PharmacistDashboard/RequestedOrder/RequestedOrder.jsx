import { BiSolidUser } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { MdAccessTimeFilled, MdAddIcCall, MdLocationOn } from "react-icons/md";

import img from "../../../../assets/Dashboard-icons/req.jpg";

const RequestedOrder = () => {
  return (
    <div className="px-2 md:px-5">
      {/* <h3 className="text-center text-3xl my-7 font-semibold">

      </h3> */}

      <div className="my-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Requested Orders</div>
            <div className="stat-value text-my-primary">3</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
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
        <div className=" text-gray-6 bg-white box-shadow rounded-2xl">
          <figure className="bg-white rounded-2xl">
            <img className="md:w-3/4 h-48  mx-auto " src="https://i.ibb.co/QC5YWwr/product-16.jpg" alt="" />
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
        <div className=" text-gray-6 bg-white box-shadow rounded-2xl">
          <figure className="bg-white rounded-2xl">
            <img className="md:w-3/4 h-48  mx-auto " src="https://i.ibb.co/wLXYFVC/product-08.jpg" alt="" />
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
        <div className=" text-gray-6 bg-white box-shadow rounded-2xl">
          <figure className="bg-white rounded-2xl">
            <img className="md:w-3/4 h-48  mx-auto " src="https://i.ibb.co/ygqFd9y/product-07.jpg" alt="" />
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
      {/* <div className=" text-gray-6 bg-card shadow-md">
          <div className="bg-white">
            <img
              className="w-3/4 md:h-[181px] md:w-auto mx-auto "
              src={img}
              alt=""
            />
          </div>
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
        </div> */}
    </div>
  );
};

export default RequestedOrder;
