import { MdAddIcCall } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";

// Todo
const AddLabCard = ({ category, handlerDelete }) => {
  const { image_url, price, test_name, PhoneNumber, _id } = category || {};
  return (
    <div className=" text-gray-6 bg-card shadow-md ">
      <img className="" src={image_url} alt="" />
      <div className="p-3 space-y-1">
        <h4 className="uppercase text-lg font-semibold">{test_name}</h4>
        <p className="flex items-center gap-2">
          <MdAddIcCall />
          <span>{PhoneNumber}</span>
        </p>
        <div className="flex justify-between">
          <p>Fees: {price} TK.</p>

          <div className="space-x-1">
            <Link to={`/dashboard/${_id}`}>
              <button type="button" className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                <TiEdit className="text-lg" />
              </button>
            </Link>
            <button onClick={() => handlerDelete(_id)} type="button" className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink">
              <RiDeleteBinLine className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLabCard;
