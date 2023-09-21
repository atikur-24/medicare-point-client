const OrderHistoryCard = ({ orderHistory }) => {
  const { medicine_name, image, category, quantity, price, delivery_status, district, location, expectedDate } = orderHistory || {};

  return (
    <div className="flex border-b flex-col md:flex-row gap-5 border-gray-3 md:items-center md:justify-between p-5">
      <div className="flex gap-3">
        <img className="w-20 h-24" src={image} alt="medicine" />
        <div className="flex flex-col  justify-between">
          <div>
            <h3 className="text-base lg:text-lg font-medium text-gray-7">{medicine_name}</h3>
            <p className="text-gray-4">By {category}</p>
          </div>
          <div className="space-x-4 lg:space-x-6">
            <span className="text-gray-4">QTY: {quantity}</span>
            <span className="text-black font-medium lg:font-semibold tracking-wide">TK: {price}</span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-7">Status</p>
        <p className="font-medium capitalize text-sm lg:text-base text-yellow-500 tracking-wide">{delivery_status}</p>
      </div>
      <div className="space-y-1 lg:space-y-3">
        <p className="text-gray-4">Delivery Expected By</p>
        {expectedDate && (
          <p className="text-black  font-medium lg:font-semibold tracking-wide">
            {expectedDate[0]} - {expectedDate[1]}
          </p>
        )}
        <div>
          <small className="text-gray-8">
            {district} ,{location}
          </small>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
