/* eslint-disable react/no-unescaped-entities */

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { ApprovePR } from "../../../../hooks/Pharma.applications";

const ApplicationDetail = () => {
  const application = useLoaderData();

  const handelApprovedAlart = () => {
    Swal.fire("Approved Application", "This Application Already Approved", "error");
  };

  const {
    district,
    division,
    medicinesSold,
    pharmacistImage,
    pharmacistLicense,
    pharmacistName,
    pharmacyEmailAddress,
    pharmacyFullAddress,
    pharmacyName,
    pharmacyPhoneNumber,
    pharmacyRegisNumber,
    scopeOfPractice,
    shippingInformation,
    _id,
    applicationType,
    email,
  } = application;

  return (
    <div className="px-20 py-8 ">
      <div className="flex flex-col gap-16 md:flex-row rounded-lg shadow-xl bg-white p-14">
        <div className="  ">
          <img className="w-52 rounded-md shadow-md" src={pharmacistImage} alt="Pharmacist" />
          <div className="mt-6 pl-2">
            <h3 className="text-lg font-semibold">{pharmacistName}</h3>
            <p className="text-gray-5 text-sm">{email}</p>
          </div>
        </div>
        <div className="   border-l-4 pl-6 border-my-primary ">
          <h3 className="text-2xl font-semibold">Pharmacist Application Details</h3>
          <div className="mt-10 space-y-4">
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Pharmacy Name:</span> {pharmacyName}
            </p>
            <p className="text-lg text-gray-5 ">
              <span className="font-bold text-gray-7">Pharmacy Email:</span> {pharmacyEmailAddress}
            </p>
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Pharmacy Phone Number:</span> {pharmacyPhoneNumber}
            </p>
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Pharmacy Address:</span>
              <div className="pl-4">
                <p>
                  <span className=" font-semibold">Division:</span> {division}
                </p>
                <p>
                  <span className=" font-semibold">District:</span> {district}
                </p>
                <p>
                  <span className=" font-semibold">Pharmacy Location:</span> {pharmacyFullAddress}
                </p>
              </div>
            </p>
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Pharmacy Registration Number:</span> {pharmacyRegisNumber}
            </p>
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Pharmacy License Number:</span> {pharmacistLicense}
            </p>
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Medicine Sold:</span> {medicinesSold}
            </p>
            <p className="text-lg text-gray-5">
              <span className="font-bold text-gray-7">Shipping Information:</span> {shippingInformation}
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div>
              {applicationType !== "Approved" ? (
                <button onClick={() => ApprovePR(_id, email, "Approved", "Pharmacist", application)} type="button" className="submit-btn">
                  Approve Pharmacy
                </button>
              ) : (
                <button type="button" onClick={handelApprovedAlart} className="btn btn-success">
                  This Application Already Approved
                </button>
              )}
            </div>
            {applicationType === "pending" ? (
              <button onClick={() => ApprovePR(_id, email, "deny", "user")} type="button" className="reset-btn">
                Deny
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
