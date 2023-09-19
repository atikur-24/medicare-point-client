import { BiSolidUser } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";

const ReqCard = ({ singleMedi }) => {
  const { reqByMedicine_Id, medicine_name, image, request_count, date } = singleMedi || {};

  return (
    <div className=" text-gray-6 bg-white box-shadow rounded-xl">
      <figure className="bg-white rounded-2xl">
        <img className="h-48 w-40 md:h-[189px] md:w-[169px] xl:h-[172px] xl:w-[154px] object-cover mx-auto" src={image} alt="Medicine" />
      </figure>
      <div className="p-3 space-y-1">
        <h4 className="text-lg font-medium">{medicine_name}</h4>
        <p>
          <span className="block text-sm text-gray-7 font-medium">Medicine Code:</span>
          <small>{reqByMedicine_Id}</small>
        </p>
        <p className="flex items-center gap-2">
          <BiSolidUser />
          <small>{request_count}</small>
        </p>
        <p className="flex items-center gap-2">
          <MdAccessTimeFilled />
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default ReqCard;
