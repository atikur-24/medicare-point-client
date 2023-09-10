import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const AllPharmacists = () => {
  return (
    <div>
      <div className="flex px-6 mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pharmacists</div>
            <div className="stat-value text-my-primary">4,200</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-20  px-5">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-lg">
            <tr className="text-center rounded-t-md">
              <th className="rounded-tl-md">#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Pharmacy</th>
              <th>Role</th>
              <th className="rounded-tr-md">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="">
              <td className="font-bold text-center">1</td>
              <td className="flex justify-center">
                <img className="w-10 h-10 rounded-full" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
              </td>
              <td className="font-semibold text-center">Mr. Mamun</td>
              <td className="font-semibold text-center">akManun@gmail.com</td>
              <td className="font-semibold text-center">0123455125</td>
              <td className="font-semibold text-center">ABC Pharma</td>
              <td className="font-semibold text-center">Pharmacist</td>
              <td className="flex justify-center items-center gap-4">
                <NavLink>
                  <TiEdit className="text-3xl p-1 rounded-full text-[white] bg-my-primary" />
                </NavLink>
                <NavLink className=" bg-red-500 rounded-full bg-opacity-30 ">
                  <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPharmacists;
