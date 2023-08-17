import { MdAddIcCall } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const AllAvailableTest = () => {
  return (
    <div className="px-2 md:px-5">
      <h3 className="text-center text-3xl my-7 font-semibold">
        All Available Tests
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
        <div className=" text-gray-6 bg-card shadow-md ">
          <img
            className=""
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/urine_drug_test_732x549_thumb-732x549.jpg"
            alt=""
          />
          <div className="p-3 space-y-1">
            <h4 className="uppercase text-lg font-semibold">Urine Test</h4>
            <p className="flex items-center gap-2">
              <MdAddIcCall />
              <span>0123456789</span>
            </p>
            <div className="flex justify-between">
              <p>Fees: 650 TK.</p>

              <div className="space-x-1">
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
                >
                  <TiEdit className="text-lg" />
                </button>
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink"
                >
                  <RiDeleteBinLine className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-gray-6 bg-card shadow-md ">
          <img
            className=""
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/urine_drug_test_732x549_thumb-732x549.jpg"
            alt=""
          />
          <div className="p-3 space-y-1">
            <h4 className="uppercase text-lg font-semibold">Urine Test</h4>
            <p className="flex items-center gap-2">
              <MdAddIcCall />
              <span>0123456789</span>
            </p>
            <div className="flex justify-between">
              <p>Fees: 650 TK.</p>

              <div className="space-x-1">
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
                >
                  <TiEdit className="text-lg" />
                </button>
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink"
                >
                  <RiDeleteBinLine className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-gray-6 bg-card shadow-md ">
          <img
            className=""
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/urine_drug_test_732x549_thumb-732x549.jpg"
            alt=""
          />
          <div className="p-3 space-y-1">
            <h4 className="uppercase text-lg font-semibold">Urine Test</h4>
            <p className="flex items-center gap-2">
              <MdAddIcCall />
              <span>0123456789</span>
            </p>
            <div className="flex justify-between">
              <p>Fees: 650 TK.</p>

              <div className="space-x-1">
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
                >
                  <TiEdit className="text-lg" />
                </button>
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink"
                >
                  <RiDeleteBinLine className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-gray-6 bg-card shadow-md ">
          <img
            className=""
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/urine_drug_test_732x549_thumb-732x549.jpg"
            alt=""
          />
          <div className="p-3 space-y-1">
            <h4 className="uppercase text-lg font-semibold">Urine Test</h4>
            <p className="flex items-center gap-2">
              <MdAddIcCall />
              <span>0123456789</span>
            </p>
            <div className="flex justify-between">
              <p>Fees: 650 TK.</p>

              <div className="space-x-1">
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
                >
                  <TiEdit className="text-lg" />
                </button>
                <button
                  type="button"
                  className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink"
                >
                  <RiDeleteBinLine className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAvailableTest;
