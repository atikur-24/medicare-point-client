import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditProfile = () => {
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
