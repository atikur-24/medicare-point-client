import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllUsers } from "../../../../Features/AllUsers/allUsers";

const AllUsers = () => {
  const { allUsers } = useSelector((state) => state.allUsers);
  // const a = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  // console.log(allUsers);

  return (
    <div>
      <h3 className="text-center text-3xl my-7 font-semibold">All Users List</h3>
      <div className="overflow-x-auto mb-20  px-5">
        <table className="table bg-gray-3">
          {/* head */}
          <thead className="rounded-lg bg-my-accent text-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {allUsers.map((user, idx) => (
              <tr key={user._id} className="">
                <td>{idx + 1}</td>
                <td>
                  <img className="w-10 h-10 rounded-full" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>0123455125</td>
                <td>{user?.role}</td>
                <td className="flex items-center gap-2">
                  <NavLink>
                    <TiEdit className="text-2xl p-1 text-[white] bg-my-primary" />
                  </NavLink>
                  <NavLink>
                    <RiDeleteBinLine className="text-2xl bg-red-500 text-[white] p-1" />
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
