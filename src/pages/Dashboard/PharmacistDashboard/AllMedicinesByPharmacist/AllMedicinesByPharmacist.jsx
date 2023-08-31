import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const AllMedicinesByPharmacist = () => {
  const { user, loading } = useAuth();

  const { data: medicines = [], refetch } = useQuery({
    queryKey: ["medicines", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/phamacistMedicines?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="mx-1 md:mx-5">
      <h3 className="text-center text-2xl lg:text-3xl my-7 font-semibold tracking-wide">All Medicines</h3>
      <div className="overflow-x-auto mb-20 px-5">
        <table className="table rounded bg-lite">
          {/* head */}
          <thead className="bg-my-primary text-white font-normal text-base">
            <tr className="">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Sell</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
              medicines?.map((medicine, idx) => (
                <tr key={medicine._id} className="border-b border-gray-6">
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={medicine?.image}
                      alt="medicine"
                    />
                  </td>
                  <td>NAPA EXTEND 665 TAB</td>
                  <td>PARACETAMOL BP</td>
                  <td>BEXIMCO PHARMACEUTICALS</td>
                  <td>6.50Tk</td>

                  <td>800</td>
                  <td className="flex items-center gap-2">
                    <Link to="/">
                      <TiEdit className="text-2xl p-1 text-white bg-my-primary" />
                    </Link>
                    <button type="button">
                      <RiDeleteBinLine className="text-2xl bg-red-500 text-white p-1" />
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMedicinesByPharmacist;
