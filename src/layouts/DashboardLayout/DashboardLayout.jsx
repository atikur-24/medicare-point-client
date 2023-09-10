/* eslint-disable no-nested-ternary */
import { useContext, useEffect, useState } from "react";
import { AiFillHome, AiOutlineBars } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsGrid1X2Fill, BsImage } from "react-icons/bs";
import { FaCaretDown, FaCaretUp, FaUsers, FaWpforms } from "react-icons/fa";
import { GiHypodermicTest, GiMedicines } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { MdAddShoppingCart, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineInventory, MdOutlineLibraryBooks, MdOutlineWorkHistory } from "react-icons/md";
import { RiFileList3Fill, RiFileList3Line, RiUserStarFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { TfiMenu } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Logo/logo-point.svg";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import DashBoardNavbar from "../../pages/Dashboard/DashBoardNavbar/DashBoardNavbar";
import Notification from "../../pages/Dashboard/Dashboard/Notification/Notification";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { role } = useContext(AuthContext);
  const [isUser, setUser] = useState(false);
  const [isPharmacist, setPharmacist] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (role === "user") {
      setUser(true);
    } else if (role === "Pharmacist") {
      setPharmacist(true);
    } else if (role === "admin") {
      setAdmin(true);
    }
  }, [role]);

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
        <NavLink to="/dashboard/images" className="dashboard-link">
          <BsImage className="dashboard-icon" />
          <span>Image Gallery</span>
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
          <BsGrid1X2Fill className="dashboard-icon" />
          <span>Admin Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/images" className="dashboard-link">
          <BsImage className="dashboard-icon" />
          <span>Image Gallery</span>
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
      <li className="dashboard-link flex">
        <NavLink to="/dashboard/edit-health-tips" onClick={toggleDropdown2} className="dashboard-link flex cursor-pointer">
          <RiFileList3Line className="dashboard-icon" />
          <button type="button">Health Tips</button>
          <FaCaretDown className={`${showDropdown2 ? "hidden" : "block"} dashboard-icon`} />
          <FaCaretUp className={`${showDropdown2 ? "block" : "hidden"} dashboard-icon`} />
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
          <FaCaretDown className={`${labtest ? "hidden" : "block"} dashboard-icon`} />
          <FaCaretUp className={`${labtest ? "block" : "hidden"} dashboard-icon`} />
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

      {/* To do  */}
      <li className="dashboard-link flex">
        <NavLink to="/dashboard/add-blog" onClick={toggleDropdown3} className="dashboard-link flex cursor-pointer">
          <RiFileList3Line className="dashboard-icon" />
          <button type="button">Blogs</button>
          <FaCaretDown className={`${showDropdown3 ? "hidden" : "block"} dashboard-icon`} />
          <FaCaretUp className={`${showDropdown3 ? "block" : "hidden"} dashboard-icon`} />
        </NavLink>
        <ul className={`${showDropdown3 ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/dashboard/add-blog" className="dashboard-link">
              Add Blog
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/add-health-articles">Add Health Articles</NavLink>
          </li> */}
          <li>
            <NavLink to="/dashboard/manage-health-articles">Manage Health Articles</NavLink>
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

  if (!role) {
    return <Loader spinner />;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative  bg-[#F1F6FA]   2xl:px-20">
        {/* Page content here */}
        <DashBoardNavbar setShowNotification={setShowNotification} showNotification={showNotification} />
        {showNotification && <Notification />}
        <Outlet />
        <label htmlFor="my-drawer-2" className="toggle-dashboard-btn ml-4 drawer-button lg:hidden">
          <TfiMenu className="text-2xl  cursor-pointer" />
        </label>
      </div>
      <div className="drawer-side  md:bg-[#F1F6FA]  md:shadow-2xl ">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />

        <ul className="dashboard-ul bg-white flex-nowrap  menu p-4 w-80 !h-full text-base-content space-y-4 !z-50">
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
