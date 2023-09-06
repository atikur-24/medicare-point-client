/* eslint-disable no-unsafe-optional-chaining */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import useAllMedicines from "../../../../hooks/useAllMedicines";

const AllMedicines = () => {
  const [allMedicines] = useAllMedicines();
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  return (
    <div className="mx-1 md:mx-5">
      <h3 className="text-center text-xl lg:text-3xl my-7 font-semibold tracking-wide">
        All Available Medicines
      </h3>

      <div className="overflow-x-auto mb-20 px-5">
        <table className="table rounded bg-lite">
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
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
              allMedicines?.map((medicine, idx) => (
                <tr key={medicine?._id} className="border-b border-slate-3">
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      className="mask rounded w-14 h-14"
                      src={medicine?.image}
                      alt="medicine"
                    />
                  </td>
                  <td className="font-medium">{medicine?.medicine_name}</td>
                  <td className="flex flex-col">
                    <span>{medicine?.pharmacist_name}</span>
                    <span>{medicine?.pharmacist_email}</span>
                  </td>
                  <td>৳ {medicine?.price}</td>
                  <td className="font-medium"><span className="text-my-pink">{medicine?.available_quantity - medicine?.sellQuantity}</span> / {medicine?.available_quantity}</td>

                  <td className={`${medicine.status === "approved" && "text-my-accent"} ${medicine.status === "denied" && "text-red-500"} ${medicine.status === "pending" && "text-yellow-500"} capitalize font-medium`}>{medicine?.status}</td>
                  <td>
                    <Menu
                      menuButton={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <MenuButton>
                          <button onClick={toggleDropdown2} type="button" className="btn-sm inline-flex items-center bg-my-accent text-white w-full">
                            <span>Pending</span>
                            <MdKeyboardArrowDown className={`${showDropdown2 ? "hidden" : "block"} dashboard-icon`} />
                            <MdKeyboardArrowUp className={`${showDropdown2 ? "block" : "hidden"} dashboard-icon`} />
                          </button>
                        </MenuButton>
                      }
                      transition
                    >
                      <MenuItem className="font-semibold text-gray-6">
                        Approve
                      </MenuItem>
                      <MenuItem className="font-semibold text-gray-6">
                        Deny
                      </MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMedicines;
