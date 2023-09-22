const OrderRow = ({ order }) => {
  const { image, medicine_name, name, price, quantity, transId, dateAndTime } = order || {};
  return (
    <tr className="">
      <td className="font-bold text-center">1</td>
      <td className="flex justify-center">
        <img className="w-10 h-10 rounded-full" src={image} alt="medicine" />
      </td>
      <td className="font-semibold text-center">{medicine_name}</td>
      <td className="font-semibold text-center">{name}</td>

      <td className="font-semibold text-center">{price}</td>
      <td className="font-semibold text-center">{quantity}</td>
      <td className="font-semibold text-center">{transId}</td>
      <td className="font-semibold text-center">{dateAndTime}</td>
    </tr>
  );
};

export default OrderRow;
