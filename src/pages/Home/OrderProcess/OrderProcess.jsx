import image4 from "../../../assets/images/order-process/checklist.png";
import image5 from "../../../assets/images/order-process/eccomerce.png";
import image3 from "../../../assets/images/order-process/location.png";
import image1 from "../../../assets/images/order-process/sign-up.png";
import image2 from "../../../assets/images/order-process/user.png";
import Heading from "../../Shared/Heading/Heading";

const OrderProcess = () => {
  return (
    <div className="my-container">
      <Heading title="Order Process" center />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="space-y-4 text-center border p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image1} alt="" />
          <h1 className="text-xl font-semibold text-gray-500">Signup for Free</h1>
          <p>Create your account through our website or mobile app with just your phone number.</p>
        </div>
        <div className="space-y-4 text-center border p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image2} alt="" />
          <h1 className="text-xl font-semibold text-gray-500">Add Profile Information</h1>
          <p>Complete your profile by providing your email and store name so that we can identify you.</p>
        </div>
        <div className="space-y-4 text-center border p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image3} alt="" />
          <h1 className="text-xl font-semibold text-gray-500">Add Address Information</h1>
          <p>Provide all address details of your business</p>
        </div>
        <div className="space-y-4 text-center border p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image4} alt="" />
          <h1 className="text-xl font-semibold text-gray-500">Add ID & Bank Information</h1>
          <p>Add in your ID & Business related details. Include necessary bank information for payments.</p>
        </div>
        <div className="space-y-4 text-center border p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image5} alt="" />
          <h1 className="text-xl font-semibold text-gray-500">List Products</h1>
          <p>Add products to your store through seller center. Start selling as soon as your products go live after going through quality control.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
