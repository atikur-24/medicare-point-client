import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllUsers } from "../../../../Features/AllUsers/allUsers";

const AllUsers = () => {
  const { allUsers } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const updateRole = (id, role) => {
    const userData = {
      role,
    };
    axios.patch(`http://localhost:5000/updateUserRole/${id}`, userData).then((res) => {
      if (res?.data?.modifiedCount > 0) {
        dispatch(fetchAllUsers());
        Swal.fire("Successful", "Convert User Role to Admin", "success");
      }
    });
  };

  const handelDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you Want delete This user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/delete-user/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            dispatch(fetchAllUsers());
          }
        });
      }
    });
  };

  const totalAdmin = allUsers.filter((admin) => admin?.role === "admin");
  const totalPharmacist = allUsers.filter((admin) => admin?.role === "Pharmacist");
  const totalUsers = allUsers.filter((admin) => admin?.role === "user");
  // console.log(allUsers);

  return (
    <div>
      <div className="flex px-6 mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Admin</div>
            <div className="stat-value">{totalAdmin?.length}</div>
          </div>

          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pharmacist</div>
            <div className="stat-value text-my-primary">{totalPharmacist?.length}</div>
          </div>

          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Users</div>
            <div className="stat-value">{totalUsers?.length}</div>
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
              <th>Role</th>
              <th className="rounded-tr-md">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {allUsers.map((user, idx) => (
              <tr key={user._id} className="">
                <td className="font-bold text-center">{idx + 1}</td>
                <td className="flex justify-center">
                  <img className="w-10 h-10  rounded-full" src={user?.image} alt="" />
                </td>
                <td className="font-semibold text-center">{user?.name}</td>
                <td className="font-semibold text-center">{user?.email}</td>
                <td className="font-semibold text-center">
                  <Menu
                    menuButton={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <MenuButton className="my-btn !btn-sm !bg-my-accent  !rounded w-full">
                        {user?.role} <BsChevronDown />
                      </MenuButton>
                    }
                    transition
                  >
                    <MenuItem onClick={() => updateRole(user?._id, "user")} disabled={user?.role === "user"} className="font-semibold text-gray-6">
                      User
                    </MenuItem>
                    <MenuItem onClick={() => updateRole(user?._id, "admin")} disabled={user?.role === "admin"} className="font-semibold text-gray-6">
                      Admin
                    </MenuItem>
                    <MenuItem onClick={() => updateRole(user?._id, "Pharmacist")} disabled={user?.role === "Pharmacist"} className="font-semibold text-gray-6">
                      Pharmacist
                    </MenuItem>
                  </Menu>
                </td>
                <td className="flex justify-center items-center gap-4">
                  <button type="button" onClick={() => handelDeleteUser(user?._id)} className=" bg-red-500 rounded-full bg-opacity-30 ">
                    <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
                  </button>
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
