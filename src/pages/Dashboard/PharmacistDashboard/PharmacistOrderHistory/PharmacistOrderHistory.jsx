const PharmacistOrderHistory = () => {
  return (
    <div className="mx-1 md:mx-5">
      <h3 className="text-center text-3xl my-7 font-semibold">All Medicines</h3>

      <div className="overflow-x-auto mb-20  px-2">
        <table className="table bg-gray-3">
          {/* head */}
          <thead className="rounded-lg bg-my-accent text-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Customer</th>

              <th>Price</th>
              <th>Quantity</th>
              <th>Transaction ID</th>
              <th>Date</th>
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

              <td>6.50Tk</td>

              <td>800</td>
              <td>asdgfdgfd800</td>
              <td>12-05-2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PharmacistOrderHistory;
