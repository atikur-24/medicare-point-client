/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unsafe-optional-chaining */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import axios from "axios";
import { useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedicines } from "../../../../Features/Medicines/AllMedicines/medicines";
import Loader from "../../../../components/Loader";

const AllMedicines = () => {
  const { isLoading, medicines } = useSelector((state) => state.medicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMedicines());
  }, [dispatch]);

  const handelChangeStatus = (id, newStatus) => {
    const statusApproved = { status: newStatus };
    axios.patch(`http://localhost:5000/medicine-status/${id}`, statusApproved).then((res) => {
      console.log(res.data);
      dispatch(fetchAllMedicines());
    });
  };

  const approvedMedicines = medicines.filter((medicine) => medicine?.status === "approved");
  const pendingMedicines = medicines.filter((medicine) => medicine?.status === "pending");
  const deniedMedicines = medicines.filter((medicine) => medicine?.status === "denied");

  return (
    <div className="mx-1 md:mx-5">
      {/* <h3 className="text-center text-xl lg:text-3xl my-7 font-semibold tracking-wide">All Available Medicines</h3> */}

      <div className="flex px-6 mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Approved Medicines</div>
            <div className="stat-value text-my-primary">{approvedMedicines?.length}</div>
          </div>

          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pending Medicines</div>
            <div className="stat-value text-yellow-500">{pendingMedicines?.length}</div>
          </div>

          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Denied Medicines</div>
            <div className="stat-value text-red-500">{deniedMedicines?.length}</div>
          </div>
        </div>
      </div>

      <div className=" mb-20 px-5">
        <table className="overflow-x-auto table rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-white font-normal text-base">
            <tr className="">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Pharmacist Info</th>
              <th>Price</th>
              <th>Av. Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* rows */}

          {!isLoading && (
            <tbody>
              {medicines?.map((medicine, idx) => (
                <tr key={medicine?._id} className="border-b border-slate-3">
                  <td>{idx + 1}</td>
                  <td>
                    <img className="mask rounded w-14 h-14" src={medicine?.image} alt="medicine" />
                  </td>
                  <td className="font-medium">{medicine?.medicine_name}</td>
                  <td className="flex flex-col">
                    <span>{medicine?.pharmacist_name}</span>
                    <span>{medicine?.pharmacist_email}</span>
                  </td>
                  <td>৳ {medicine?.price}</td>
                  <td className="font-medium">
                    <span className="text-my-pink">{medicine?.available_quantity - medicine?.sellQuantity}</span> / {medicine?.available_quantity}
                  </td>

                  <td
                    className={`${medicine.status === "approved" && "text-my-accent"} ${medicine.status === "denied" && "text-red-500"} ${
                      medicine.status === "pending" && "text-yellow-500"
                    } capitalize font-medium`}
                  >
                    {medicine?.status}
                  </td>
                  <td>
                    <Menu
                      menuButton={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <MenuButton className="btn-sm inline-flex items-center bg-my-accent text-white w-full capitalize">
                          {medicine.status}
                          <MdKeyboardArrowDown />
                        </MenuButton>
                      }
                      transition
                    >
                      <MenuItem disabled={medicine.status === "approved"} onClick={() => handelChangeStatus(medicine?._id, "approved")} className="font-semibold text-gray-6">
                        Approve
                      </MenuItem>
                      <MenuItem disabled={medicine.status === "denied"} onClick={() => handelChangeStatus(medicine?._id, "denied")} className="font-semibold text-gray-6">
                        Deny
                      </MenuItem>
                      <MenuItem disabled={medicine.status === "pending"} onClick={() => handelChangeStatus(medicine?._id, "pending")} className="font-semibold text-gray-6">
                        Pending
                      </MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {isLoading && (
          <div className="mt-44">
            <Loader spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMedicines;
