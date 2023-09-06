import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { DeleteApplication, GetPharmacyRApplications } from "../../../../hooks/Pharma.applications";

const PharmacyApplications = () => {
  //   const [applications, refetch] = getPRApplication();
  const [applications, refetch] = GetPharmacyRApplications();

  console.log(applications);

  return (
    <div>
      <div>
        <h3 className="text-center text-3xl my-7 font-semibold">All Users List</h3>
        <div className="overflow-x-auto mb-20   px-5">
          <table className="table bg-gray-3 ">
            {/* head */}
            <thead className="rounded-lg bg-my-primary  ">
              <tr className="bg-my-secondary rounded-lg text-white text-md ">
                <th>#</th>
                <th>Pharmacist Photo</th>
                <th>Pharmacy Name</th>
                <th>Pharmacist Name</th>
                <th>Division</th>
                <th>Application Type</th>
                <th>Delete</th>
                <th>Detail</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {applications.map((application, idx) => (
                <tr key={application._id} className="">
                  <td>{idx + 1}</td>
                  <td>
                    <img className="w-10 h-10 rounded-full" src={application?.pharmacistImage} alt="" />
                  </td>
                  <td>{application?.pharmacyName}</td>
                  <td>{application?.pharmacistName}</td>
                  <td>{application?.division}</td>
                  <td
                    className={` font-semibold text-[#f1b84d] ${application.applicationType === "Approved" ? "text-my-primary" : ""} ${
                      application?.applicationType === "deny" ? "text-red-500" : ""
                    } `}
                  >
                    {application?.applicationType}
                  </td>
                  <td>
                    <button type="button" onClick={() => DeleteApplication(application?._id)}>
                      <RiDeleteBinLine className="text-4xl p-2 rounded-full text-[white] bg-red-500" />
                    </button>
                  </td>
                  <td>
                    <Link to={`/dashboard/pharmacyRegistration/${application?._id}`}>
                      <button
                        className=" hover:bg-my-primary  p-1 rounded-md hover:text-white border-2 border-my-primary text-my-primary font-semibold transition delay-150 duration-150 ease-in-out"
                        type="button"
                      >
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
