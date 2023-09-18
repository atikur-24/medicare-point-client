import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

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
    image: "",
    division: "",
    district: "",
    postoffice: "",
    postcode: "",
    area: "",
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
      const { _id, ...formDataWithoutId } = formData;
      const response = await axios.put(`http://localhost:5000/users/${email}`, formDataWithoutId);

      if (response.status === 200) {
        // Profile update successful
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been updated successfully!",
        });
      } else {
        // Handle any errors or display an error message to the user
        console.error("Failed to update profile");
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "An error occurred while updating your profile. Please try again later.",
        });
      }
    } catch (error) {
      console.error("An error occurred while updating the profile:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "An error occurred while updating your profile. Please try again later.",
      });
    }
  };

  return (
    <div className="px-4">
      <div className="grid grid-cols-1">
        <div className="bg-white box-shadow p-8 rounded-2xl">
          <h1 className="text-2xl font-bold py-2">Edit Your Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input type="text" name="name" className="input input-bordered w-full" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input disabled type="email" name="email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Phone</label>
                <input type="text" name="phone" className="input input-bordered w-full" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Gender</label>
                <select name="gender" className="input input-bordered w-full" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Company</label>
                <input type="text" name="company" className="input input-bordered w-full" value={formData.company} onChange={handleChange} />
              </div>
              <div>
                <label className="text-sm font-semibold">Title</label>
                <input type="text" name="title" className="input input-bordered w-full" value={formData.title} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold w-full">Image</label>
              <input type="text" name="image" className="input input-bordered w-full" value={formData.image} onChange={handleChange} />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm font-semibold"> Division</label>
                  <input type="text" name="division" className="input input-bordered w-full" value={formData.division} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-semibold"> District</label>
                  <input type="text" name="district" className="input input-bordered w-full" value={formData.district} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-semibold"> Post Office</label>
                  <input type="text" name="postoffice" className="input input-bordered w-full" value={formData.postoffice} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-semibold"> Postcode</label>
                  <input type="text" name="postcode" className="input input-bordered w-full" value={formData.postcode} onChange={handleChange} />
                </div>
              </div>
              <div className="mt-2">
                <label className="text-sm font-semibold w-full">Detail Area</label>
                <input type="text" name="area" className="input input-bordered w-full" value={formData.area} onChange={handleChange} />
              </div>
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
