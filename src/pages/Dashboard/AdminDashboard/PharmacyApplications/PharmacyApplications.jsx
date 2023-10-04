import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GetPharmacyRApplications } from "../../../../hooks/Pharma.applications";

const PharmacyApplications = () => {
  //   const [applications, refetch] = getPRApplication();
  const [applications, refetch] = GetPharmacyRApplications();

  const DeleteApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/deleteRApplication/${id}`)
          .then((res) => {
            if (res.data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };

  return (
    <div>
      <div className="mb-5 space-y-2">
        <div className="mb-8 flex">
          <div className="stats shadow">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Pharmacist Application
              </div>
              <div className="stat-value text-my-primary">
                {applications?.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 overflow-x-auto">
        <table className="table  table-zebra border border-gray-3 bg-white">
          {/* head */}
          <thead className="rounded-lg rounded-t-md  bg-my-primary/90 text-sm text-white">
            <tr className="rounded-t-md text-center">
              <th className="rounded-tl-md">#</th>
              <th>Pharmacist</th>
              <th>Pharmacy Name</th>
              <th>Division</th>
              <th>Type</th>
              <th className="rounded-tr-md">Details</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {applications.map((application, idx) => (
              <tr key={application._id} className="">
                <td className="text-center font-bold">{idx + 1}</td>
                <td className="flex flex-col items-center justify-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={application?.pharmacistImage}
                    alt=""
                  />
                  <p>{application?.pharmacistName}</p>
                </td>

                <td className="text-center font-semibold">
                  {application?.pharmacyName}
                </td>
                <td className="text-center font-semibold">
                  {application?.division}
                </td>
                <td
                  className={` text-center font-semibold capitalize text-[#f1b84d] ${
                    application.applicationType === "Approved"
                      ? "text-my-primary"
                      : ""
                  } ${
                    application?.applicationType === "deny"
                      ? "text-red-500"
                      : ""
                  } `}
                >
                  {application?.applicationType}
                </td>
                <td>
                  <Link
                    to={`/dashboard/pharmacyRegistration/${application?._id}`}
                  >
                    <button className="cart-btn-outline" type="button">
                      Details
                    </button>
                  </Link>
                </td>
                <td className="text-center font-semibold">
                  <button
                    type="button"
                    onClick={() => DeleteApplication(application?._id)}
                  >
                    <RiDeleteBinLine className="rounded-full bg-red-500/30 p-2 text-4xl text-red-500 " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PharmacyApplications;
