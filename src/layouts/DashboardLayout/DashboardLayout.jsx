import { AiFillHome, AiOutlineBars, AiOutlineStar } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartPlusFill, BsShop } from "react-icons/bs";
import { FaUserMd, FaUsers } from "react-icons/fa";
import { GiHypodermicTest, GiMedicines } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { MdAddShoppingCart, MdKeyboardArrowDown, MdKeyboardArrowUp, MdNotificationAdd, MdOutlineInventory, MdOutlineLibraryBooks } from "react-icons/md";

import { RiFileList3Fill, RiFileList3Line, RiMessengerFill, RiUserStarFill } from "react-icons/ri";

import { RxCross1 } from "react-icons/rx";

import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../public/medicare-logo-color.png";
import DashBoardNavbar from "../../pages/Dashboard/DashBoardNavbar/DashBoardNavbar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [doctor, setDoctor] = useState(false);
  console.log(doctor);
  const userLinks = (
    <>
      <li>
        <NavLink to="/dashboard" className="dashboard-link">
          <AiFillHome className="dashboard-icon" />
          <span>User Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/profile" className="dashboard-link">
          <BiSolidUser className="dashboard-icon" /> User Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/view-cart" className="dashboard-link">
          <BsFillCartPlusFill className="dashboard-icon" />
          View Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/booked-lab-tests" className="dashboard-link">
          <HiClipboardList className="dashboard-icon" /> Booked lab tests
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/health-records" className="dashboard-link">
          <MdOutlineLibraryBooks className="dashboard-icon" /> Health Records
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/order-history" className="dashboard-link">
          <RiFileList3Fill className="dashboard-icon" /> Order History
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/suggestion-reminders" className="dashboard-link">
          <MdNotificationAdd className="dashboard-icon" /> Suggestions & Reminders
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/chat-support" className="dashboard-link">
          <RiMessengerFill className="dashboard-icon" /> Chat Support
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/reward-points" className="dashboard-link">
          <AiOutlineStar className="dashboard-icon" />
          Reward Points
        </NavLink>
      </li>
    </>
  );

  const pharmacistLinks = (
    <>
      <li>
        <NavLink to="/dashboard" className="dashboard-link">
          <AiFillHome className="dashboard-icon" />
          <span>Pharmacist Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/medicine-orders" className="dashboard-link">
          <MdAddShoppingCart className="dashboard-icon" />
          <span>Medicine Orders</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/medicine-inventory" className="dashboard-link">
          <MdOutlineInventory className="dashboard-icon" />
          <span>Medicine Inventory</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/pharmacists-order-history" className="dashboard-link">
          <RiFileList3Fill className="dashboard-icon" />
          <span>Order History</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/requested-medicines" className="dashboard-link">
          <GiMedicines className="dashboard-icon" />
          <span>Requested Medicines</span>
        </NavLink>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard" className="dashboard-link">
          <AiFillHome className="dashboard-icon" />
          <span>Admin Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/all-users" className="dashboard-link">
          <FaUsers className="dashboard-icon" />
          <span>All Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/all-pharmacies" className="dashboard-link">
          <RiUserStarFill className="dashboard-icon" />
          <span>All Pharmacies</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/all-medicines" className="dashboard-link">
          <GiMedicines className="dashboard-icon" />
          <span>All Medicines</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/health-suggestions" className="dashboard-link">
          <RiFileList3Line className="dashboard-icon" />
          <span>Health Suggestions</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-lab-test" className="dashboard-link">
          <GiHypodermicTest className="dashboard-icon" />
          <span>Available Test</span>
        </NavLink>
      </li>
      <li className="dashboard-link flex">
        <NavLink to="/dashboard/manage-all-doctors" onClick={() => setDoctor(!doctor)} className="dashboard-link flex">
          <FaUserMd className="dashboard-icon" />
          <button type="button">Doctors</button>
          <MdKeyboardArrowDown className={`${doctor ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${doctor ? "block" : "hidden"} dashboard-icon`} />
        </NavLink>
        <ul className={`${doctor ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/manage-all-doctors" className="">
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-doctor" className="">
              Add a doctor
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/dashboard/manage-all-pharmacy" className="dashboard-link">
          <BsShop className="dashboard-icon" />
          <span>All Pharmacy</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <DashBoardNavbar />
        <Outlet />
        <label htmlFor="my-drawer-2" className="toggle-dashboard-btn drawer-button lg:hidden">
          <AiOutlineBars className="text-lg cursor-pointer" />
        </label>
      </div>
      <div className={`drawer-side shadow-md `}>
        <label htmlFor="my-drawer-2" className="drawer-overlay" />

        <ul className="dashboard-ul lg:pt-5 menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <li className="relative">
            <NavLink to="/" className=" pb-3">
              <img className="h-10 w-full" src={logo} alt="" />
            </NavLink>
            <label htmlFor="my-drawer-2" className="toggle-dashboard-btn2 lg:hidden">
              <RxCross1 className="text-lg cursor-pointer" />
            </label>
          </li>
          {userLinks}
          {/* {pharmacistLinks} */}
          {/* {adminLinks} */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
