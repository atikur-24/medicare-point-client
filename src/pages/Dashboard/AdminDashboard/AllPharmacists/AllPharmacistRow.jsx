import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import PharmacistDetailModal from "./PharmacistDetailModal";

const AllPharmacistRow = ({ user, index, handelDelete }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <tr className="">
      <td className=" font-bold ">{index + 1}</td>
      <td className="flex justify-center">
        <img className="h-10 w-10 rounded-full" src={user?.image} alt="" />
      </td>
      <td className="font-medium ">
        <span>{user?.name}</span>
        <br />
        <span>{user?.email}</span>
      </td>
      <td className=" font-medium">
        {user?.pharmacistDetail?.pharmacyPhoneNumber}
      </td>
      <td className="font-medium ">{user?.pharmacistDetail?.pharmacyName}</td>
      <td className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} type="button">
          <BiSolidUserDetail className="rounded-full bg-my-primary p-1 text-3xl text-[white]" />
        </button>
        <PharmacistDetailModal
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <button
          type="button"
          onClick={() => handelDelete(user?._id)}
          className=" rounded-full bg-red-500/30  "
        >
          <RiDeleteBinLine className="p-1  text-3xl text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default AllPharmacistRow;
