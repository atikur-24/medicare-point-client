import axios from "axios";
import toast from "react-hot-toast";

const NewOrderCard = ({ order, refetch }) => {
  const { medicine_name, image, quantity, category, price, _id } = order || {};

  const handleResponse = (id) => {
    axios.patch(`http://localhost:5000/pharmacistResponse/${id}`, { pharmacist_response: true, delivery_status: "packing" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Order Confirm");
      }
    });
  };

  return (
    <div className="flex md:flex-row flex-col space-x-3 text-gray-6 bg-white box-shadow rounded-2xl p-4 w-[700px] xl:w-[800px]">
      <figure>
        <img className="h-20 lg:h-40 max-w-md object-cover" src={image} alt="medicine" />
      </figure>
      <div className="p-2 space-y-1 relative md:w-[60%]">
        <h4 className="uppercase text-lg font-semibold">{medicine_name}</h4>
        <p>Category: {category}</p>

        <div className="md:flex justify-between space-y-1 md:space-y-0">
          <p>Price: {price} TK.</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="flex pt-2 gap-3 items-center">
          <button onClick={() => handleResponse(_id)} type="button" className="my-btn">
            Conform
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderCard;
