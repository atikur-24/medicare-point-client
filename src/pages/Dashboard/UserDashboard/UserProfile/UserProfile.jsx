import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsBuildingFillGear, BsGenderAmbiguous } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosStarHalf } from "react-icons/io";
import { MdLocationCity, MdOutlineLocationOn, MdOutlineShareLocation } from "react-icons/md";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UserProfile = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      // Find the current user's data based on their email
      const currentUser = res.data.find((userData) => userData.email === user.email);

      if (currentUser) {
        setCurrentUserData(currentUser);
      }
    });
  }, [user.email]);
  return (
    <div className="">
      {currentUserData && (
        <div className="bg-white rounded-2xl my-6 pb-8">
          {/* TODO  */}
          <div className="bg-my-primary bg-opacity-70 h-28 relative rounded-t-2xl ">
            <div className="left-[calc(50%-40px)] absolute top-[40%]">
              <figure>
                <img src={currentUserData?.image ? currentUserData?.image : user?.photoURL} alt={currentUserData.name} className="h-[96px] w-[96px]  mb-4 rounded-full ring-4 ring-white ring-offset-2 ring-offset-white" />
              </figure>
            </div>
          </div>
          <h2 className="text-2xl mt-12   font-semibold text-center">{currentUserData.name}</h2>

          <div className="bg-white rounded-2xl  py-6  px-4 md:px-10">
            <div className="flex  gap-4 md:flex-row flex-col">
              <div className="  h-full  md:w-1/2 ">
                <div className="flex flex-col gap-4 ">
                  <div className="divide-y  rounded-md divide-gray-3 border border-gray-3  ">
                    <h3 className="text-lg font-semibold mb-1 p-4">Personal Information</h3>
                    <div className="py-3 px-4 space-y-2">
                      <div className="flex gap-2 items-center text-gray-6">
                        <HiOutlineMail className="text-2xl" />
                        <span> Email</span>
                      </div>
                      <p className="">{currentUserData.email}</p>
                    </div>
                    <div className="py-3 px-4 space-y-2">
                      <div className="flex gap-2 items-center text-gray-6">
                        <AiOutlinePhone className="text-2xl" />
                        <span>Phone</span>
                      </div>
                      <p> {currentUserData.phone ? currentUserData.phone : "N/A"}</p>
                    </div>
                    <div className="py-3 px-4 space-y-2">
                      <div className="flex gap-2 items-center text-gray-6">
                        <BsGenderAmbiguous className="text-2xl" />
                        <span>Gender</span>
                      </div>
                      <p>{currentUserData.gender ? currentUserData.gender : "N/A"}</p>
                    </div>
                  </div>

                  <div className="divide-y  rounded-md divide-gray-3 border border-gray-3 ">
                    <h3 className="text-lg font-semibold px-4 py-2">Professional Information</h3>
                    <div className="py-3 px-4 space-y-2">
                      <div className="flex gap-2 items-center text-gray-6">
                        <BsBuildingFillGear className="text-2xl" />
                        <span>Company</span>
                      </div>
                      <p>{currentUserData.company ? currentUserData.company : "N/A"}</p>
                    </div>
                    <div className="py-3 px-4 space-y-2">
                      <div className="flex gap-2 items-center text-gray-6">
                        <IoIosStarHalf className="text-2xl" />
                        <span>Job Title</span>
                      </div>
                      <p> {currentUserData.title ? currentUserData.title : "N/A"} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:w-1/2  h-full rounded-md border border-gray-3">
                <div className="divide-y  rounded-md divide-gray-3   ">
                  <h3 className="text-lg font-semibold mb-1 p-4"> Address</h3>
                  <div className="py-3 px-4 space-y-2">
                    <div className="flex gap-2 items-center text-gray-6">
                      <MdLocationCity className="text-2xl" />
                      <span>Division</span>
                    </div>
                    <p>{currentUserData.division ? currentUserData.division : "N/A"}</p>
                  </div>
                  <div className="py-3 px-4 space-y-2">
                    <div className="flex gap-2 items-center text-gray-6">
                      <MdOutlineShareLocation className="text-2xl" />
                      <span>District</span>
                    </div>
                    <p> {currentUserData.district ? currentUserData.district : "N/A"}</p>
                  </div>
                  <div className="py-3 px-4 space-y-2">
                    <div className="flex gap-2 items-center text-gray-6">
                      <MdOutlineLocationOn className="text-2xl" />
                      <span>Area</span>
                    </div>
                    <p>
                      {currentUserData.area ? currentUserData.area : "N/A"} ,{currentUserData.postoffice ? currentUserData.postoffice : ""} ,{currentUserData.postcode ? currentUserData.postcode : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link to={`/dashboard/edit-profile/${currentUserData.email}`} className=" my-btn-outline mt-8">
              Edit Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
