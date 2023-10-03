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
        <img className="w-10 h-10 rounded-full" src={user?.image} alt="" />
      </td>
      <td className="font-medium ">
        <span>{user?.name}</span>
        <br />
        <span>{user?.email}</span>
      </td>
      <td className=" font-medium">{user?.pharmacistDetail?.pharmacyPhoneNumber}</td>
      <td className="font-medium ">{user?.pharmacistDetail?.pharmacyName}</td>
      <td className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} type="button">
          <BiSolidUserDetail className="text-3xl p-1 rounded-full text-[white] bg-my-primary" />
        </button>
        <PharmacistDetailModal user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
        <button type="button" onClick={() => handelDelete(user?._id)} className=" bg-red-500 rounded-full bg-opacity-30 ">
          <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
        </button>
      </td>
    </tr>
  );
};

export default AllPharmacistRow;
