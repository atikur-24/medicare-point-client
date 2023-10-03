import axios from "axios";
import toast from "react-hot-toast";

const NewOrderCard = ({ order, refetch }) => {
  const { medicine_name, image, quantity, category, price, _id, discount, name, email, number, division, district, location, dateAndTime, expectedDate } = order || {};
  const handleResponse = (id) => {
    axios.patch(`http://localhost:5000/deliveryStatus/${id}`, { pharmacist_response: true, delivery_status: "packing" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Order Confirm");
      }
    });
  };

  return (
    <div className="flex gap-1 justify-between text-gray-6 bg-white box-shadow rounded-xl p-4">
      <div className="flex flex-col justify-between">
        <figure>
          <img className="h-20 lg:h-32 max-w-md object-cover" src={image} alt="medicine" />
        </figure>
      </div>
      <div className="space-y-1 text-sm">
        <h4 className="text-base font-medium">{medicine_name}</h4>
        <p className="">Category: {category}</p>
        <p className="inline-flex items-center gap-1">
          <span className="text-black-2">Price:</span>
          <span className="font-medium text-my-pink inline-flex items-center">{discount > 0 ? (price - (price / 100) * discount).toFixed(2) : price.toFixed(2)}</span>
          {discount > 0 && <span className="inline-flex items-center text-xs text-gray-5 line-through">৳ {price}</span>}
        </p>
        <p>
          <span className="text-black-2">Discount:</span> <span>{discount}</span>
        </p>
        <p>
          <span className="text-black-2">Quantity:</span> <span className="text-my-primary">{quantity}</span>
        </p>
      </div>
      <div className="space-y-1 text-sm">
        <h2 className="text-black-2 text-base">Order Info:</h2>
        <p>
          <span className="text-black-2">Date & Time:</span> {dateAndTime}
        </p>
        <p>
          <span className="text-black-2">Expected Delivery:</span> {expectedDate[0]} - {expectedDate[1]}
        </p>
        <p className="flex gap-2 text-black-2">
          <span>
            Division: <span className="text-gray-6">{division}</span>,
          </span>
          <span>
            District: <span className="text-gray-6">{district}</span>
          </span>
        </p>
        <p className="capitalize">
          <span className="text-black-2">Full Location:</span> {location}
        </p>
      </div>
      <div className="flex flex-col justify-between gap-3">
        <div className="space-y-1 text-sm">
          <p className="text-black-2 text-base">Customer Info:</p>
          <p>
            <span className="text-black-2">name:</span> {name}
          </p>
          <p>
            <span className="text-black-2">Email:</span> {email}
          </p>
          <p>
            <span className="text-black-2">Number:</span> {number}
          </p>
        </div>
        <button onClick={() => handleResponse(_id)} type="button" className="my-btn !rounded !font-medium !btn-sm !p-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default NewOrderCard;
