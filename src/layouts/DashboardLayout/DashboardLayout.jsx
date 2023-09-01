/* eslint-disable no-nested-ternary */
import { AiFillHome, AiOutlineBars, AiOutlineStar } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaUserMd, FaUsers, FaWpforms } from "react-icons/fa";
import { GiHypodermicTest, GiMedicines } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { MdAddShoppingCart, MdKeyboardArrowDown, MdKeyboardArrowUp, MdNotificationAdd, MdOutlineInventory, MdOutlineLibraryBooks, MdOutlineWorkHistory } from "react-icons/md";

import { RiFileList3Fill, RiFileList3Line, RiMessengerFill, RiUserStarFill } from "react-icons/ri";

import { RxCross1 } from "react-icons/rx";

import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Logo/logo-point.svg";
import DashBoardNavbar from "../../pages/Dashboard/DashBoardNavbar/DashBoardNavbar";
import "./DashboardLayout.css";

import { AuthContext } from "../../contexts/AuthProvider";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);
  const [isUser, setUser] = useState(false);
  const [isPharmacist, setPharmacist] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (role === "User") {
      setUser(true);
    } else if (role === "Pharmacist") {
      setPharmacist(true);
    } else if (role === "Admin") {
      setAdmin(true);
    }
  }, []);
  // console.log(role);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const [showDropdown3, setShowDropdown3] = useState(false);

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };

  const [doctor, setDoctor] = useState(false);
  const [labtest, setLabtest] = useState(false);
  const [medicineBtn, setMedicineBtn] = useState(false);
  // console.log(doctor);
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
      <li className="dashboard-link flex">
        <div onClick={toggleDropdown} className="dashboard-link flex cursor-pointer">
          <BsFillCartPlusFill className="dashboard-icon" />
          <button type="button">View Carts</button>
          <MdKeyboardArrowDown className={`${showDropdown ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${showDropdown ? "block" : "hidden"} dashboard-icon`} />
        </div>
        <ul className={`${showDropdown ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/medicine-cart">Medicine Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/lab-cart">Lab Cart</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/dashboard/booked-lab-tests" className="dashboard-link">
          <HiClipboardList className="dashboard-icon" /> Booked lab tests
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/order-history" className="dashboard-link">
          <MdOutlineWorkHistory className="dashboard-icon" /> Order History
        </NavLink>
      </li>
      {/* <li className="dashboard-link flex">
        <div onClick={toggleDropdown2} className="dashboard-link flex cursor-pointer">
          <BsFillCartPlusFill className="dashboard-icon" />
          <button type="button">Order History</button>
          <MdKeyboardArrowDown className={`${showDropdown2 ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${showDropdown2 ? "block" : "hidden"} dashboard-icon`} />
        </div>
        <ul className={`${showDropdown2 ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/active-order">Active Order</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/delivered-order">Delivered Order</NavLink>
          </li>
        </ul>
      </li> */}
      {/* <li>
        <NavLink to="/dashboard/suggestion-reminders" className="dashboard-link">
          <MdNotificationAdd className="dashboard-icon" /> Suggestions & Reminders
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/reward-points" className="dashboard-link">
          <AiOutlineStar className="dashboard-icon" />
          Reward Points
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/dashboard/pharmacyRegistration" className="dashboard-link">
          <MdOutlineLibraryBooks className="dashboard-icon" /> Pharmacy Registration Form
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
        <NavLink to="/dashboard/new-orders" className="dashboard-link">
          <MdAddShoppingCart className="dashboard-icon" />
          <span>New Orders</span>
        </NavLink>
      </li>

      <li className="dashboard-link flex">
        <NavLink to="/dashboard/medicine-inventory" onClick={() => setMedicineBtn(!medicineBtn)} className="dashboard-link flex">
          <MdOutlineInventory className="dashboard-icon" />
          <button type="button">Medicine Inventory</button>
          <MdKeyboardArrowDown className={`${medicineBtn ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${medicineBtn ? "block" : "hidden"} dashboard-icon`} />
        </NavLink>
        <ul className={`${medicineBtn ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/medicine-inventory" className="">
              All Medicines
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-new-medicine" className="">
              Add new medicine
            </NavLink>
          </li>
        </ul>
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
      {/* <li>
        <NavLink to="/dashboard/health-suggestions" className="dashboard-link">
          <RiFileList3Line className="dashboard-icon" />
          <span>Add Health Tips</span>
        </NavLink>
      </li> */}
      <li className="dashboard-link flex">
        <NavLink to="/dashboard/edit-health-tips" onClick={toggleDropdown2} className="dashboard-link flex cursor-pointer">
          <RiFileList3Line className="dashboard-icon" />
          <button type="button">Health Tips</button>
          <MdKeyboardArrowDown className={`${showDropdown2 ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${showDropdown2 ? "block" : "hidden"} dashboard-icon`} />
        </NavLink>
        <ul className={`${showDropdown2 ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/add-health-tips">Add Health Tip</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/edit-health-tips">Manage Health Tips</NavLink>
          </li>
        </ul>
      </li>

      <li className="dashboard-link flex">
        <NavLink to="/dashboard/manage-lab-test" onClick={() => setLabtest(!labtest)} className="dashboard-link flex">
          <GiHypodermicTest className="dashboard-icon" />
          <button type="button">Lab Tests</button>
          <MdKeyboardArrowDown className={`${labtest ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${labtest ? "block" : "hidden"} dashboard-icon`} />
        </NavLink>
        <ul className={`${labtest ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/manage-lab-test" className="">
              Available Test
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-lab-test" className="">
              Add a test
            </NavLink>
          </li>
        </ul>
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

      {/* To do  */}
      <li className="dashboard-link flex">
        <NavLink to="/dashboard/add-blog" onClick={toggleDropdown3} className="dashboard-link flex cursor-pointer">
          <RiFileList3Line className="dashboard-icon" />
          <button type="button">Blogs</button>
          <MdKeyboardArrowDown className={`${showDropdown3 ? "hidden" : "block"} dashboard-icon`} />
          <MdKeyboardArrowUp className={`${showDropdown3 ? "block" : "hidden"} dashboard-icon`} />
        </NavLink>
        <ul className={`${showDropdown3 ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/add-blog" className="dashboard-link">
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-health-articles">Add Health Articles</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-health-articles">Manage Health Articles</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-interviews">Add Interviews</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-interviews">Manage Interviews</NavLink>
          </li>
        </ul>
      </li>

      <li>
        <NavLink to="/dashboard/PharmacyApplications" className="dashboard-link">
          <FaWpforms className="dashboard-icon" />
          <span>Pharmacy Applications</span>
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
      <div className="drawer-side shadow-md">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />

        <ul className="dashboard-ul lg:pt-5 menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}

          <li className="relative">
            <NavLink to="/" className=" pb-3">
              <img className="h-10 w-full" src={logo} alt="" />
            </NavLink>
            <label htmlFor="my-drawer-2" className="toggle-dashboard-btn2 lg:hidden">
              <RxCross1 className="text-lg cursor-pointer" />
            </label>
          </li>
          {isUser && userLinks}
          {isPharmacist && pharmacistLinks}
          {isAdmin && adminLinks}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
