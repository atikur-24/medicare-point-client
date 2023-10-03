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
        axios.delete(`http://localhost:5000/deleteRApplication/${id}`).then((res) => {
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
      <div className="space-y-2 mb-5">
        <div className="flex mb-8">
          <div className="stats shadow">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pharmacist Application</div>
              <div className="stat-value text-my-primary">{applications?.length}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-20">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-sm">
            <tr className="text-center rounded-t-md">
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
                <td className="font-bold text-center">{idx + 1}</td>
                <td className="flex justify-center items-center flex-col">
                  <img className="w-10 h-10 rounded-full" src={application?.pharmacistImage} alt="" />
                  <p>{application?.pharmacistName}</p>
                </td>

                <td className="font-semibold text-center">{application?.pharmacyName}</td>
                <td className="font-semibold text-center">{application?.division}</td>
                <td className={` font-semibold text-center capitalize text-[#f1b84d] ${application.applicationType === "Approved" ? "text-my-primary" : ""} ${application?.applicationType === "deny" ? "text-red-500" : ""} `}>
                  {application?.applicationType}
                </td>
                <td>
                  <Link to={`/dashboard/pharmacyRegistration/${application?._id}`}>
                    <button className="cart-btn-outline" type="button">
                      Details
                    </button>
                  </Link>
                </td>
                <td className="font-semibold text-center">
                  <button type="button" onClick={() => DeleteApplication(application?._id)}>
                    <RiDeleteBinLine className="text-4xl p-2 rounded-full text-red-500 bg-red-500 bg-opacity-30" />
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
