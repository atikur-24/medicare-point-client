import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const AllMedicines = () => {
  return (
    <div className="mx-1 md:mx-5">
      <h3 className="text-center text-3xl my-7 font-semibold">
        All Available Medicines
      </h3>

      <div className="overflow-x-auto mb-20  px-5">
        <table className="table bg-gray-3">
          {/* head */}
          <thead className="rounded-lg bg-my-accent text-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Generic</th>
              <th>Supplier</th>

              <th>Price</th>
              <th>Av. Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="">
              <td>1</td>
              <td>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                  alt=""
                />
              </td>
              <td>NAPA EXTEND 665 TAB</td>
              <td>PARACETAMOL BP</td>
              <td>BEXIMCO PHARMACEUTICALS</td>
              <td>6.50Tk</td>

              <td>800</td>
              <td className="flex items-center gap-2">
                <NavLink>
                  <TiEdit className="text-2xl p-1 text-white bg-my-primary" />
                </NavLink>
                <NavLink>
                  <RiDeleteBinLine className="text-2xl bg-red-500 text-white p-1" />
                </NavLink>
              </td>
            </tr>
            <tr className="">
              <td>1</td>
              <td>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.newscientist.com/wp-content/uploads/2019/11/27120939/d7mw20.jpg?width=800"
                  alt=""
                />
              </td>
              <td>NAPA EXTEND 665 TAB</td>
              <td>PARACETAMOL BP</td>
              <td>BEXIMCO PHARMACEUTICALS</td>
              <td>6.50Tk</td>

              <td>800</td>
              <td className="flex items-center gap-2">
                <NavLink>
                  <TiEdit className="text-2xl p-1 text-white bg-my-primary" />
                </NavLink>
                <NavLink>
                  <RiDeleteBinLine className="text-2xl bg-red-500 text-white p-1" />
                </NavLink>
              </td>
            </tr>
            <tr className="">
              <td>1</td>
              <td>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                  alt=""
                />
              </td>
              <td>NAPA EXTEND 665 TAB</td>
              <td>PARACETAMOL BP</td>
              <td>BEXIMCO PHARMACEUTICALS</td>
              <td>6.50Tk</td>

              <td>800</td>
              <td className="flex items-center gap-2">
                <NavLink>
                  <TiEdit className="text-2xl p-1 text-white bg-my-primary" />
                </NavLink>
                <NavLink>
                  <RiDeleteBinLine className="text-2xl bg-red-500 text-white p-1" />
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMedicines;
