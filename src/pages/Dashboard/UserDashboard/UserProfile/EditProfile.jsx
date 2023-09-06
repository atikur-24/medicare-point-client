import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditProfile = () => {
  const { email } = useParams();
  const existingData = useLoaderData();
  console.log(existingData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Add missing fields
    gender: "",
    company: "",
    title: "",
    currentlocation: "",
    hometown: "",
    po: "",
    postcode: "",
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch user data based on the email and update the formData state
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${email}`);
        if (response.status === 200) {
          const userData = response.data; // Assuming the user data is returned as an object
          setFormData(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
      }
    };

    fetchUserData();
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { _id, ...formDataWithoutId } = formData; // Remove _id property

      // Send a PUT request to update the user's profile without _id
      const response = await axios.put(`http://localhost:5000/users/${email}`, formDataWithoutId);

      // Check the response status to handle success or error
      if (response.status === 200) {
        // Update successful, you can add logic here for handling success
        console.log("Profile updated successfully");

        // Redirect the user back to the profile page, you can use React Router or another method for this
        // Example: history.push('/profile');
      } else {
        // Handle any errors or display an error message to the user
        console.error("Failed to update profile");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred while updating the profile:", error);
    }
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-1">
        <div className="bg-gray-3 p-2">
          <h1 className="text-2xl font-bold py-2">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Name:</label>
                <input type="text" name="name" className="input input-bordered w-full" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Email:</label>
                <input type="email" name="email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Phone:</label>
                <input type="text" name="phone" className="input input-bordered w-full" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Gender:</label>
                <input type="text" name="gender" className="input input-bordered w-full" value={formData.gender} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Company:</label>
                <input type="text" name="company" className="input input-bordered w-full" value={formData.company} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Title:</label>
                <input type="text" name="title" className="input input-bordered w-full" value={formData.title} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Current Location:</label>
                <input type="text" name="currentlocation" className="input input-bordered w-full" value={formData.currentlocation} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Post Office:</label>
                <input type="text" name="po" className="input input-bordered w-full" value={formData.po} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Postcode:</label>
              <input type="text" name="postcode" className="input input-bordered w-full" value={formData.postcode} onChange={handleChange} />
            </div>
            {/* Add other fields similarly */}
            <button type="submit" className="my-btn">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
