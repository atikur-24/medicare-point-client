import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 px-10">
      <div className="flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/headshot-portrait-happy-young-man-looking-camera-standing-indoors-home-modern-office-profile-picture-smiling-millennial-male-making-online-call-by-video-link-posing-digital-webcam_774935-2104.jpg?w=2000"
          alt="Nafees"
          className="w-1/3 h-60 rounded-2xl mb-4"
        />
      </div>
      <h2 className="text-xl font-semibold text-center">Nafees Imtiaz</h2>
      <p className="text-gray-600 mb-4 text-center">I am an engineer.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <div className="shadow-xl p-4 h-full rounded-lg border border-gray-3">
          <div>
            <h3 className="text-lg font-semibold mb-1">Basic Information</h3>
            <p>Email: user786@gmail.com</p>
            <p>Phone: 0190000000</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Personal Details</h3>
            <p>Username: user786</p>
            <p>Date of Birth: 24/8/1998</p>
            <p>Gender: Male</p>
          </div>
        </div>
        <div className="shadow-xl p-4 h-full rounded-lg border border-gray-3">
          <div>
            <h3 className="text-lg font-semibold mb-1">Location</h3>
            <p>Current Location: Dhaka</p>
            <p>Hometown: Cumilla</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1 ">Professional Information</h3>
            <p>Occupation: Web Developer</p>
            <p>Company: Programming Hero</p>
            <p>Job Title: Front End Developer</p>
          </div>
        </div>
        <div className="shadow-xl p-4 h-full rounded-lg border border-gray-3">
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">Activity and History</h3>
            <p>Registration Date: 16/08/2023</p>
            <p>Last Login: 17/08/2023</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">Privacy and Security</h3>
            <button className="btn btn-outline btn-accent">Password Management</button>
          </div>
        </div>
      </div>

      <button className="btn btn-block btn-outline btn-accent mt-8">Edit Profile</button>
    </div>
  );
};

export default UserProfile;
