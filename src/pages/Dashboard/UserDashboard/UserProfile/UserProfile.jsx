import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UserProfile = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const { user } = useContext(AuthContext); // Access the user object from the context
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
    <div className="px-4">
      {currentUserData && (
        <div className="bg-white rounded-2xl my-10 shadow py-10 px-4 md:px-10">
          <div className="flex gap-6">
            <figure>
              <img src={currentUserData.image} alt={currentUserData.name} className=" h40  mb-4 rounded-full" />
            </figure>

            <h2 className="text-2xl mt-6  font-semibold text-center">{currentUserData.name}</h2>
          </div>

          <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
            <div className="  h-full rounded-md border border-gray-3">
              <div className="divide-y-2 divide-gray-3">
                <h3 className="text-lg font-semibold mb-1 p-4">Personal Information</h3>
                <div className="py-3 px-4 space-y-2">
                  <div className="flex gap-2 items-center text-gray-6">
                    <HiOutlineMail className="text-2xl" />
                    <span> Email</span>
                  </div>
                  <p className="">
                    {currentUserData.email}
                  </p>
                </div>
                <p>Phone: {currentUserData.phone ? currentUserData.phone : "N/A"}</p>
                <p>Gender: {currentUserData.gender ? currentUserData.gender : "N/A"}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 ">Professional Information</h3>
                <p>Company: {currentUserData.company ? currentUserData.company : "N/A"}</p>
                <p>Job Title: {currentUserData.title ? currentUserData.title : "N/A"} </p>
              </div>
            </div>
            <div className="shadow-xl p-4 h-full rounded-lg border border-gray-3">
              <div>
                <h3 className="text-lg font-semibold mb-1"> Address</h3>
                <p>Division: {currentUserData.division ? currentUserData.division : "N/A"}</p>
                <p>District: {currentUserData.district ? currentUserData.district : "N/A"}</p>
                <p>Detail Area: {currentUserData.area ? currentUserData.area : "N/A"}</p>
                <p>Post Offiice: {currentUserData.postoffice ? currentUserData.postoffice : "N/A"} </p>
                <p>Post Code: {currentUserData.postcode ? currentUserData.postcode : "N/A"} </p>
              </div>
            </div>
          </div>

          <Link to={`/dashboard/edit-profile/${currentUserData.email}`} type="button" className="btn btn-block btn-outline btn-accent mt-8">
            Edit Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
