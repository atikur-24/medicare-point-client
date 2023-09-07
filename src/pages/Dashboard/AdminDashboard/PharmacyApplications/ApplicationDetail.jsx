/* eslint-disable react/no-unescaped-entities */

import { TbPointFilled } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { ApprovePR } from "../../../../hooks/Pharma.applications";

const ApplicationDetail = () => {
  const application = useLoaderData();
  // console.log(application);

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
    <div className=" p-16">
      <div className="bg-lite p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-5"> Pharmacy Registration Application </h2>
        <div className="space-y-5">
          <div className="text-center">
            <img className=" w-36 mx-auto rounded-md shadow-md" src={pharmacistImage} alt="" />
            <h2 className="text-lg font-semibold my-2">{pharmacistName}</h2>
          </div>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Pharmacy Name:</span> {pharmacyName}
          </h4>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Pharmacy's Official Email:</span> {pharmacyEmailAddress}
          </h4>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Pharmacy's Contract Number:</span> {pharmacyPhoneNumber}
          </h4>
          <div className="text-lg flex gap-5">
            <TbPointFilled />
            <div>
              <span className=" font-semibold">Pharmacy's Address:</span>
              <div>
                <p>
                  <span className=" font-medium">Division:</span> {division}
                </p>
                <p>
                  <span className=" font-medium">District:</span> {district}
                </p>
                <p>
                  <span className=" font-medium">Pharmacy Location:</span> {pharmacyFullAddress}
                </p>
              </div>
            </div>
          </div>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Pharmacy Registration: </span> {pharmacyRegisNumber}
          </h4>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Pharmacy License: </span> {pharmacistLicense}
          </h4>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold"> Types of medicines sold:</span> {medicinesSold}
          </h4>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Scope of practice:</span> {scopeOfPractice}
          </h4>
          <h4 className="text-lg flex items-center gap-5">
            <TbPointFilled /> <span className=" font-semibold">Shipping information:</span> {shippingInformation}
          </h4>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div>
            {applicationType !== "Approved" ? (
              <button onClick={() => ApprovePR(_id, email, "Approved", "Pharmacist")} type="button" className="submit-btn">
                Approve Pharmacy
              </button>
            ) : (
              <button type="button" onClick={handelApprovedAlart} className="btn btn-success mt-10">
                This Application Already Approved
              </button>
            )}
          </div>
          {applicationType === "pending" ? (
            <button onClick={() => ApprovePR(_id, email, "deny")} type="button" className="reset-btn">
              Adeny
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
