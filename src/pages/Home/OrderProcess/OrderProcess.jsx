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
      <div className="my-container grid gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 text-title-color lg:grid-cols-5 bg-card rounded-lg border border-gray-3">
        <div className="relative flex flex-col justify-center items-center p-6 shadow-lg m-4 group space-y-4">
          <div className=" absolute top-0 left-0 w-28  border-t-8  bg-white border-my-accent" />
          <figure>
            <img className="w-20 md:w-[70px] mx-auto group-hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image1} alt="Shoes" />
          </figure>
          <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Signup for Free</h2>
        </div>
        <div className="relative flex flex-col justify-center items-center p-6 shadow-lg m-4 group space-y-4">
          <div className=" absolute top-0 left-0 w-28  border-t-8  bg-white border-my-accent" />

          <figure>
            <img className="w-20 md:w-[70px] mx-auto group-hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image2} alt="Shoes" />
          </figure>
          <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Add Profile Information</h2>
        </div>
        <div className="relative flex flex-col justify-center items-center p-6 shadow-lg m-4 group space-y-4">
          <div className=" absolute top-0 left-0 w-28  border-t-8  bg-white border-my-accent" />

          <figure>
            <img className="w-20 md:w-[70px] mx-auto group-hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image3} alt="Shoes" />
          </figure>
          <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Add Address Information</h2>
        </div>
        <div className="relative flex flex-col justify-center items-center p-6 shadow-lg m-4 group space-y-4">
          <div className=" absolute top-0 left-0 w-28  border-t-8  bg-white border-my-accent" />

          <figure>
            <img className="w-20 md:w-[70px] mx-auto group-hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image4} alt="Shoes" />
          </figure>
          <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">Add ID & Bank Information</h2>
        </div>
        <div className="relative flex flex-col justify-center items-center p-6 shadow-lg m-4 group space-y-4">
          <div className=" absolute top-0 left-0 w-28  border-t-8  bg-white border-my-accent" />

          <figure>
            <img className="w-20 md:w-[70px] mx-auto group-hover:scale-110 transition-all duration-100 cursor-pointer pt-5" src={image5} alt="Shoes" />
          </figure>
          <h2 className="text-xl font-semibold text-gray-6 pb-4 text-center h-16">List Product</h2>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
