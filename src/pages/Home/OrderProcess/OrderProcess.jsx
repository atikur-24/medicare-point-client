import image4 from "../../../assets/images/order-process/checklist.png";
import image5 from "../../../assets/images/order-process/eccomerce.png";
import image3 from "../../../assets/images/order-process/location.png";
import image1 from "../../../assets/images/order-process/sign-up.png";
import image2 from "../../../assets/images/order-process/user.png";
import SectionTitle from "../../../components/SectionTitle";

const OrderProcess = () => {
  return (
    <div className="my-container">
      <SectionTitle title="Order Process" content="Secure checkout. browse our curated selection, add your chosen items to the cart, securely check out, select your preferred payment method, receive order confirmation, and anticipate the swift delivery of your wellness essentials." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="space-y-4 text-center border border-gray-3 p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 transition-all duration-100 cursor-pointer" src={image1} alt="icon" />
          <h1 className="text-xl font-semibold txt-gray-5">Signup for Free</h1>
          <p className="text-justify txt-gray">Create your account through our website or mobile app with just your phone number.</p>
        </div>
        <div className="space-y-4 text-center border border-gray-3 p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 transition-all duration-100 cursor-pointer" src={image2} alt="icon" />
          <h1 className="text-xl font-semibold txt-gray-5">Add Profile Information</h1>
          <p className="txt-gray text-justify">Complete your profile by providing your email and store name so that we can identify you.</p>
        </div>
        <div className="space-y-4 text-center border border-gray-3 p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 transition-all duration-100 cursor-pointer" src={image3} alt="icon" />
          <h1 className="text-xl font-semibold txt-gray-5">Add Address Information</h1>
          <p className="txt-gray text-justify">Provide all address details of your business</p>
        </div>
        <div className="space-y-4 text-center border border-gray-3 p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 transition-all duration-100 cursor-pointer" src={image4} alt="icon" />
          <h1 className="text-xl font-semibold txt-gray-5">Add ID & Bank Information</h1>
          <p className="txt-gray text-justify">Add in your ID & Business related details. Include necessary bank information for payments.</p>
        </div>
        <div className="space-y-4 text-center border border-gray-3 p-4 rounded-lg">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 transition-all duration-100 cursor-pointer" src={image5} alt="icon" />
          <h1 className="text-xl font-semibold txt-gray-5">List Products</h1>
          <p className="txt-gray text-justify">Add products to your store through seller center. Start selling as soon as your products go live after going through quality control.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
