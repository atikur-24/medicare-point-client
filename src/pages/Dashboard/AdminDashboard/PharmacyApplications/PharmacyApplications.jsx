import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { DeleteApplication, GetPharmacyRApplications } from "../../../../hooks/Pharma.applications";

const PharmacyApplications = () => {
  //   const [applications, refetch] = getPRApplication();
  const [applications, refetch] = GetPharmacyRApplications();

  return (
    <div>
      <div>
        <h3 className="text-center text-3xl my-7 font-semibold">All Users List</h3>
        <div className="overflow-x-auto mb-20   px-5">
          <table className="table  border border-gray-3 bg-white table-zebra">
            {/* head */}
            <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white text-lg">
              <tr className="text-center rounded-t-md">
                <th className="rounded-tl-md">#</th>
                <th>Pharmacist</th>
                <th>Pharmacy Name</th>
                <th>Division</th>
                <th>Type</th>
                <th>Delete</th>
                <th className="rounded-tr-md">Detail</th>
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
                  <td
                    className={` font-semibold text-center capitalize text-[#f1b84d] ${application.applicationType === "Approved" ? "text-my-primary" : ""} ${
                      application?.applicationType === "deny" ? "text-red-500" : ""
                    } `}
                  >
                    {application?.applicationType}
                  </td>
                  <td className="font-semibold text-center">
                    <button type="button" onClick={() => DeleteApplication(application?._id)}>
                      <RiDeleteBinLine className="text-4xl p-2 rounded-full text-red-500 bg-red-500 bg-opacity-30" />
                    </button>
                  </td>
                  <td>
                    <Link to={`/dashboard/pharmacyRegistration/${application?._id}`}>
                      <button className="cart-btn-outline" type="button">
                        View Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PharmacyApplications;
