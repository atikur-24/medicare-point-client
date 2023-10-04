/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { MdAddIcCall } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

// Todo
const AddLabCard = ({ category, handlerDelete, setSingleId }) => {
  const { image_url, price, test_name, PhoneNumber, _id } = category || {};

  // const handleUpdate = () => {
  //   console.log("add lab test");
  // };
  return (
    <div className=" box-shadow rounded-2xl bg-white p-4 text-gray-6">
      <img src={image_url} alt="" className="h-24 w-24 object-fill" />
      <div className="space-y-1 p-3">
        <h4 className="text-md font-semibold uppercase">{test_name}</h4>
        <p className="flex items-center gap-2">
          <MdAddIcCall />
          <span>{PhoneNumber}</span>
        </p>
        <div className="flex justify-between">
          <p>৳{price} TK.</p>

          <div className="space-x-1">
            <label
              onClick={() => {
                setSingleId(_id);
              }}
              htmlFor="my-modal-3"
              className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
            >
              <TiEdit className="rounded-full bg-my-primary p-1 text-3xl text-[white]" />
            </label>
            <button
              onClick={() => handlerDelete(_id)}
              type="button"
              className="btn btn-circle btn-sm rounded-full bg-red-500/30 "
            >
              <RiDeleteBinLine className="p-1  text-3xl text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLabCard;
