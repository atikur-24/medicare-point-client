import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
    <div>
      {currentUserData && (
        <div className="bg-white rounded-lg shadow p-6 px-10">
          <div className="flex items-center justify-center">
            <img src={currentUserData.image} alt="Nafees" className="w-1/3 h-60 rounded-2xl mb-4" />
          </div>
          <h2 className="text-xl font-semibold text-center">{currentUserData.name}</h2>
          <p className="text-gray-600 mb-4 text-center">Role: {currentUserData.role ? currentUserData.role : "User"}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
            <div className="shadow-xl p-4 h-full rounded-lg border border-gray-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">Basic Information</h3>
                <p>Email:{currentUserData.email}</p>
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
