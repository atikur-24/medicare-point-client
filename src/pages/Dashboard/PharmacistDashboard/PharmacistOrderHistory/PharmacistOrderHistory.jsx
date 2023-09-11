const PharmacistOrderHistory = () => {
  return (
    <div className="mx-1 md:mx-5">
      {/* <h3 className="text-center text-3xl my-7 font-semibold">All Medicines</h3> */}
      <div className="my-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Order</div>
            <div className="stat-value text-my-primary">1</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mb-20  px-2">
        <table className="table  border border-gray-3 bg-white table-zebra">
          {/* head */}
          <thead className="rounded-lg bg-my-primary bg-opacity-90 rounded-t-md text-white ">
            <tr className="text-center rounded-t-md">
              <th className="rounded-tl-md">#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Customer</th>

              <th>Price</th>
              <th>Quantity</th>
              <th>Transaction ID</th>
              <th className="rounded-tr-md">Date</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="">
              <td className="font-bold text-center">1</td>
              <td className="flex justify-center">
                <img className="w-10 h-10 rounded-full" src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="" />
              </td>
              <td className="font-semibold text-center">NAPA EXTEND 665 TAB</td>
              <td className="font-semibold text-center">PARACETAMOL BP</td>

              <td className="font-semibold text-center">6.50Tk</td>
              <td className="font-semibold text-center">800</td>
              <td className="font-semibold text-center">asdgfdgfd800</td>
              <td className="font-semibold text-center">12-05-2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PharmacistOrderHistory;
