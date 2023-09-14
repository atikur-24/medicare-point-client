import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../../Features/AllUsers/allUsers";
import { deleteUser } from "../../../../hooks/userApi";
import AllPharmacistRow from "./AllPharmacistRow";

const AllPharmacists = () => {
  const api = "all-pharmacist/Pharmacist";
  const { allUsers } = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers(api));
  }, [dispatch]);

  const handelDelete = (id) => {
    deleteUser(id);
    dispatch(fetchAllUsers(api));
  };

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
            <tr className=" rounded-t-md">
              <th className="rounded-tl-md">#</th>
              <th>Photo</th>
              <th>Pharmacist</th>
              <th>Mobile</th>
              <th>Pharmacy</th>
              <th className="rounded-tr-md">Actions</th>
            </tr>
          </thead>

          <tbody>
            {allUsers.map((user, index) => (
              <AllPharmacistRow handelDelete={handelDelete} key={user?._id} index={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPharmacists;
