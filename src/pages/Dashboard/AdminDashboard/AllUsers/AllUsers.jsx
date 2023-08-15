import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const AllUsers = () => {
  return (
    <div>
      <h3 className="text-center text-3xl my-7 font-semibold">
        All Users List
      </h3>
      <div className="overflow-x-auto mb-20  px-5">
        <table className="table bg-emerald-500">
          {/* head */}
          <thead className="rounded-lg bg-slate-400 text-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="">
              <td>1</td>
              <td>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                  alt=""
                />
              </td>
              <td>Mr. Mamun</td>
              <td>akjjjjjjjjj@gmail.com</td>
              <td>0123455125</td>
              <td className="flex items-center gap-2">
                <NavLink>
                  <TiEdit className="text-2xl p-1 text-[white] bg-lime-800" />
                </NavLink>
                <NavLink>
                  <RiDeleteBinLine className="text-2xl bg-red-500 text-[white] p-1" />
                </NavLink>
              </td>
            </tr>
            <tr className="">
              <td>1</td>
              <td>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                  alt=""
                />
              </td>
              <td>Mr. Mamun</td>
              <td>akjjjjjjjjj@gmail.com</td>
              <td>0123455125</td>
              <td className="flex items-center gap-2">
                <NavLink>
                  <TiEdit className="text-2xl p-1 text-[white] bg-lime-800" />
                </NavLink>
                <NavLink>
                  <RiDeleteBinLine className="text-2xl bg-red-500 text-[white] p-1" />
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
