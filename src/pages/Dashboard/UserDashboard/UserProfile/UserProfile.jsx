import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsBuildingFillGear, BsGenderAmbiguous } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosStarHalf } from "react-icons/io";
import {
  MdLocationCity,
  MdOutlineLocationOn,
  MdOutlineShareLocation,
} from "react-icons/md";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UserProfile = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token source

    axios
      .get(`${import.meta.env.VITE_API_URL}/users`, {
        cancelToken: source.token, // Pass the cancel token to the request
      })
      .then((res) => {
        // Find the current user's data based on their email
        const currentUser = res.data.find(
          (userData) => userData.email === user.email,
        );

        if (currentUser) {
          setCurrentUserData(currentUser);
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    // Cleanup function to cancel the request when the component unmounts or when user.email changes
    return () => {
      source.cancel("Data request canceled by cleanup"); // Cancel the request with a message
    };
  }, [user.email]);
  return (
    <div className="">
      {currentUserData && (
        <div className="my-6 rounded-2xl bg-white pb-8">
          {/* TODO  */}
          <div className="relative  h-28 rounded-t-2xl bg-my-primary/70 ">
            <div className="absolute left-[calc(50%-40px)] top-[40%]">
              <figure>
                <img
                  src={
                    currentUserData?.image
                      ? currentUserData?.image
                      : user?.photoURL
                  }
                  alt={currentUserData.name}
                  className="mb-4 h-[96px]  w-[96px] rounded-full ring-4 ring-white ring-offset-2 ring-offset-white"
                />
              </figure>
            </div>
          </div>
          <h2 className="mt-12 text-center   text-2xl font-semibold">
            {currentUserData.name}
          </h2>

          <div className="rounded-2xl bg-white  px-4  py-6 md:px-10">
            <div className="flex  flex-col gap-4 md:flex-row">
              <div className="  h-full  md:w-1/2 ">
                <div className="flex flex-col gap-4 ">
                  <div className="divide-y  divide-gray-3 rounded-md border border-gray-3  ">
                    <h3 className="mb-1 p-4 text-lg font-semibold">
                      Personal Information
                    </h3>
                    <div className="space-y-2 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-6">
                        <HiOutlineMail className="text-2xl" />
                        <span> Email</span>
                      </div>
                      <p className="">{currentUserData.email}</p>
                    </div>
                    <div className="space-y-2 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-6">
                        <AiOutlinePhone className="text-2xl" />
                        <span>Phone</span>
                      </div>
                      <p>
                        {" "}
                        {currentUserData.phone ? currentUserData.phone : "N/A"}
                      </p>
                    </div>
                    <div className="space-y-2 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-6">
                        <BsGenderAmbiguous className="text-2xl" />
                        <span>Gender</span>
                      </div>
                      <p>
                        {currentUserData.gender
                          ? currentUserData.gender
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y  divide-gray-3 rounded-md border border-gray-3 ">
                    <h3 className="px-4 py-2 text-lg font-semibold">
                      Professional Information
                    </h3>
                    <div className="space-y-2 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-6">
                        <BsBuildingFillGear className="text-2xl" />
                        <span>Company</span>
                      </div>
                      <p>
                        {currentUserData.company
                          ? currentUserData.company
                          : "N/A"}
                      </p>
                    </div>
                    <div className="space-y-2 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-6">
                        <IoIosStarHalf className="text-2xl" />
                        <span>Job Title</span>
                      </div>
                      <p>
                        {" "}
                        {currentUserData.title
                          ? currentUserData.title
                          : "N/A"}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-full  rounded-md border border-gray-3 md:w-1/2">
                <div className="divide-y  divide-gray-3 rounded-md   ">
                  <h3 className="mb-1 p-4 text-lg font-semibold"> Address</h3>
                  <div className="space-y-2 px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-6">
                      <MdLocationCity className="text-2xl" />
                      <span>Division</span>
                    </div>
                    <p>
                      {currentUserData.division
                        ? currentUserData.division
                        : "N/A"}
                    </p>
                  </div>
                  <div className="space-y-2 px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-6">
                      <MdOutlineShareLocation className="text-2xl" />
                      <span>District</span>
                    </div>
                    <p>
                      {" "}
                      {currentUserData.district
                        ? currentUserData.district
                        : "N/A"}
                    </p>
                  </div>
                  <div className="space-y-2 px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-6">
                      <MdOutlineLocationOn className="text-2xl" />
                      <span>Area</span>
                    </div>
                    <p>
                      {currentUserData.area ? currentUserData.area : "N/A"} ,
                      {currentUserData.postoffice
                        ? currentUserData.postoffice
                        : ""}{" "}
                      ,
                      {currentUserData.postcode ? currentUserData.postcode : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to={`/dashboard/edit-profile/${currentUserData.email}`}
              className=" my-btn-outline mt-8"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
