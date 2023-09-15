import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllUsers } from "../../../../Features/AllUsers/allUsers";
import Loader from "../../../../components/Loader";
import AllPharmacistRow from "./AllPharmacistRow";

const AllPharmacists = () => {
  const api = "all-pharmacist/Pharmacist";
  const { allUsers, isLoading } = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers(api));
  }, [dispatch]);

  const handelDelete = (id) => {
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
            dispatch(fetchAllUsers(api));
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex px-6 mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pharmacists</div>
            <div className="stat-value text-my-primary">{allUsers.length || 0}</div>
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

          {!isLoading && (
            <tbody>
              {allUsers.map((user, index) => (
                <AllPharmacistRow handelDelete={handelDelete} key={user?._id} index={index} user={user} />
              ))}
            </tbody>
          )}
        </table>
        <div className="mt-44">{isLoading && <Loader spinner />}</div>
      </div>
    </div>
  );
};

export default AllPharmacists;
