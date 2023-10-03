const OrderRow = ({ order }) => {
  const { image, medicine_name, name, email, number, price, discount, quantity, dateAndTime, medicine_Id, delivery_status } = order || {};
  return (
    <tr className="font-medium text-center">
      <td>{medicine_Id?.slice(-4)}</td>
      <td>
        <img className="w-12 h-12 rounded" src={image} alt="medicine" />
      </td>
      <td>{medicine_name}</td>
      <td>{discount > 0 ? (price - (price / 100) * discount).toFixed(2) : price.toFixed(2)}</td>
      <td>{quantity}</td>
      <td>
        <div className="flex flex-col">
          <span>{name}</span>
          <span>{email}</span>
          <span>{number}</span>
        </div>
      </td>
      <td>
        <div
          className={`${delivery_status === "shipping" && "text-my-accent"} ${delivery_status === "packing" && "text-my-pink"} ${delivery_status === "pending" && "text-yellow-500"} ${delivery_status === "delivered" && "text-my-primary"} ${
            delivery_status === "canceled" && "text-red-400"
          } capitalize`}
        >
          {delivery_status}
        </div>
      </td>
      <td>{dateAndTime}</td>
    </tr>
  );
};

export default OrderRow;
