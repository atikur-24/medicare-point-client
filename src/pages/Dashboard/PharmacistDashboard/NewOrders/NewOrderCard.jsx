import axios from "axios";
import toast from "react-hot-toast";

const NewOrderCard = ({ order, refetch }) => {
  const { medicine_name, image, quantity, category, price, _id } = order || {};

  const handleResponse = (id) => {
    axios.patch("http://localhost:5000/pharmacistResponse", { id }).then((res) => {
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
    // <div className="flex md:flex-row flex-col space-x-3 text-gray-6 bg-white box-shadow rounded-2xl p-4 w-[700px] lg:w-[800px]">
    //   <img className="md:w-48 h-32 md:h-full object-fill " src="https://i.ibb.co/X3Szs2Z/product-12-2.jpg" alt="" />
    //   <div className="p-2 space-y-1 relative md:w-[60%]">
    //     <h4 className="uppercase text-lg font-semibold">NAPA EXTEND 665 Tab</h4>
    //     <p>Generic: PARACETAMOL BP</p>
    //     <h4>
    //       Buyer: <span className="font-semibold">Mamun Khan</span>
    //     </h4>
    //     <div className="md:flex justify-between space-y-1 md:space-y-0">
    //       <p>Price: 6.50 TK.</p>
    //       <p>Quantity: 6</p>
    //     </div>
    //     <div className="flex pt-2 gap-3 items-center">
    //       <button type="button" className="my-btn !rounded-full">
    //         Buyer Info
    //       </button>
    //       <button type="button" className="my-btn-outline">
    //         Order Info
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NewOrderCard;
