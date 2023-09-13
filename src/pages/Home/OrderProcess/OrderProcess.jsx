import image4 from "../../../assets/images/order-process/checklist.png";
import image5 from "../../../assets/images/order-process/eccomerce.png";
import image3 from "../../../assets/images/order-process/location.png";
import image1 from "../../../assets/images/order-process/sign-up.png";
import image2 from "../../../assets/images/order-process/user.png";
import SectionTitle from "../../../components/SectionTitle";

const OrderProcess = () => {
  return (
    <div className="my-container">
      <SectionTitle title="Order Process" content="Secure checkout, select your preferred payment method, receive order confirmation, and anticipate the swift delivery of your wellness essentials." />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <div className="card card-compact bg-base-100 border border-gray-3 rounded-md">
          <figure><img className="w-20 md:w-[70px] mx-auto hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image1} alt="Shoes" /></figure>
          <div className="card-body mt-8">
            <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Signup for Free</h2>
            <p className="text-justify text-base text-gray-4 leading-6">Create your account through our website or mobile app with just your phone number. simple way to signup.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 border border-gray-3 rounded-md">
          <figure><img className="w-20 md:w-[70px] mx-auto hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image2} alt="Shoes" /></figure>
          <div className="card-body mt-8">
            <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Add Profile Information</h2>
            <p className="text-justify text-base text-gray-4 leading-6">Complete your profile by providing your email and store name so that we can identify you. simple way to info.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 border border-gray-3 rounded-md">
          <figure><img className="w-20 md:w-[70px] mx-auto hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image3} alt="Shoes" /></figure>
          <div className="card-body mt-8">
            <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Add Address Information</h2>
            <p className="text-justify text-base text-gray-4 leading-6">Provide all address details of your business. carefully add your name , email and address with details.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 border border-gray-3 rounded-md">
          <figure><img className="w-20 md:w-[70px] mx-auto hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image4} alt="Shoes" /></figure>
          <div className="card-body mt-8">
            <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Add ID & Bank Information</h2>
            <p className="text-justify text-base text text-gray-4 leading-6">Add in your ID & Business related details. provide securely your bank information with details. payment with any digital banking system.</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 border border-gray-3 rounded-md">
          <figure><img className="w-20 md:w-[70px] mx-auto hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image5} alt="Shoes" /></figure>
          <div className="card-body mt-8">
            <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">List Product</h2>
            <p className="text-justify text-base text text-gray-4 leading-6">Add products to your store through seller center. Start selling as soon as your products go live after going through quality control.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
