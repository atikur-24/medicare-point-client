import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllUsers } from "../../../../Features/AllUsers/allUsers";
import Loader from "../../../../components/Loader";

const AllUsers = () => {
  const { isLoading, allUsers } = useSelector((state) => state.allUsers);

  // pagination
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  let filteredUsers = allUsers;

  if (searchName) {
    filteredUsers = allUsers.filter((user) =>
      user?.name?.toLowerCase().includes(searchName?.toLowerCase()),
    );
  } else if (filterStatus !== "All Users") {
    filteredUsers = allUsers.filter((user) =>
      user?.role?.toLowerCase().includes(filterStatus?.toLowerCase()),
    );
  }

  const paginatedUsers = filteredUsers?.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  const updateRole = (id, role) => {
    const userData = {
      role,
    };
    axios
      .patch(`${import.meta.env.VITE_API_URL}/updateUserRole/${id}`, userData)
      .then((res) => {
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
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/delete-user/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              dispatch(fetchAllUsers());
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const totalAdmin = allUsers.filter((admin) => admin?.role === "admin");
  const totalPharmacist = allUsers.filter(
    (admin) => admin?.role === "Pharmacist",
  );
  const totalUsers = allUsers.filter((admin) => admin?.role === "user");

  return (
    <div>
      <div className="mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              All Members
            </div>
            <div className="stat-value">{allUsers?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Admin
            </div>
            <div className="stat-value text-my-pink">
              {totalAdmin?.length || 0}
            </div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Pharmacist
            </div>
            <div className="stat-value text-my-primary">
              {totalPharmacist?.length || 0}
            </div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Users
            </div>
            <div className="stat-value text-gray-5">
              {totalUsers?.length || 0}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between">
        <div className="join">
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            type="search"
            className="f input join-item input-bordered !rounded-md outline-none placeholder:text-gray-6 focus:!outline-none"
            placeholder="search by name"
          />
        </div>
        <div className="flex items-center gap-4 ">
          <h2 className="w-[120px]">Filter by</h2>
          <select
            onChange={(e) => {
              setFilterStatus(e?.target?.value);
            }}
            className="select select-bordered w-full max-w-xs outline-none hover:outline-none focus:!outline-none"
          >
            <option selected>All Users</option>
            <option>Admin</option>
            <option>Pharmacist</option>
            <option>User</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table  table-zebra border border-gray-3 bg-white">
          {/* head */}
          <thead className="rounded-lg rounded-t-md  bg-my-primary/90 text-[14px] text-white">
            <tr className="rounded-t-md text-center">
              <th className="rounded-tl-md">#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="rounded-tr-md">Actions</th>
            </tr>
          </thead>

          {!isLoading && (
            <tbody>
              {/* row 1 */}
              {paginatedUsers?.map((user, idx) => (
                <tr key={user._id} className="">
                  <td className="text-center font-bold">{idx + 1}</td>
                  <td className="flex justify-center">
                    <img
                      className="h-10 w-10  rounded-full"
                      src={user?.image}
                      alt=""
                    />
                  </td>
                  <td className="text-center font-semibold">{user?.name}</td>
                  <td className="text-center font-semibold">{user?.email}</td>
                  <td className="text-center font-semibold">
                    <Menu
                      menuButton={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <MenuButton className="my-btn !btn-sm w-full  !rounded !bg-my-accent">
                          {user?.role} <BsChevronDown />
                        </MenuButton>
                      }
                      transition
                    >
                      <MenuItem
                        onClick={() => updateRole(user?._id, "user")}
                        disabled={user?.role === "user"}
                        className="font-semibold text-gray-6"
                      >
                        User
                      </MenuItem>
                      <MenuItem
                        onClick={() => updateRole(user?._id, "admin")}
                        disabled={user?.role === "admin"}
                        className="font-semibold text-gray-6"
                      >
                        Admin
                      </MenuItem>
                    </Menu>
                  </td>
                  <td className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => handelDeleteUser(user?._id)}
                      className=" rounded-full bg-red-500/30"
                    >
                      <RiDeleteBinLine className="p-1  text-3xl text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="flex items-center justify-end gap-5 pt-5 lg:gap-7">
          {/* Row per page view */}
          <div>
            <label className="mr-2 text-gray-6">Rows Per Page:</label>
            <select
              className="p-1"
              value={perPage}
              onChange={(e) => {
                setCurrentPage(1);
                setPerPage(parseInt(e.target.value, 10));
              }}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          {/* Previous and next button (pagination) */}
          <div className="space-x-3">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleLeftSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < filteredUsers?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= filteredUsers?.length}
              className={`${
                currentPage * perPage >= filteredUsers?.length
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
          </div>
        </div>
        <div className="mt-44">{isLoading && <Loader spinner />}</div>
      </div>
    </div>
  );
};

export default AllUsers;
