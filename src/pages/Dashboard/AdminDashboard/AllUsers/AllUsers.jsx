import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllUsers } from "../../../../Features/AllUsers/allUsers";
import { updateUser, updateUserAdmin, updateUserPharmacist } from "../../../../hooks/userApi";

const AllUsers = () => {
  const { allUsers } = useSelector((state) => state.allUsers);
  // const a = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  console.log(allUsers);

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
                  <img className="w-10 h-10 rounded-full" src={user?.image} alt="" />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <Menu
                    menuButton={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <MenuButton>
                        <button type="button" className="btn btn-sm bg-my-accent hover:bg-my-primary hover:text-white w-full">
                          {user?.role}
                        </button>
                      </MenuButton>
                    }
                    transition
                  >
                    <MenuItem onClick={() => updateUser(user?._id)} disabled={user?.role === "user"} className="font-semibold text-gray-6">
                      User
                    </MenuItem>
                    <MenuItem onClick={() => updateUserPharmacist(user?._id)} disabled={user?.role === "Pharmacist"} className="font-semibold text-gray-6">
                      Pharmacist
                    </MenuItem>
                    <MenuItem onClick={() => updateUserAdmin(user?._id)} disabled={user?.role === "admin"} className="font-semibold text-gray-6">
                      Admin
                    </MenuItem>
                  </Menu>
                </td>
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
