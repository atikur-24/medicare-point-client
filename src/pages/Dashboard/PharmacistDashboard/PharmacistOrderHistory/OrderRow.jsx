const OrderRow = ({ order }) => {
  return (
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
  );
};

export default OrderRow;
