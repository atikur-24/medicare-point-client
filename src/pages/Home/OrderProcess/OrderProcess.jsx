import image4 from "../../../assets/images/order-process/checklist.webp";
import image5 from "../../../assets/images/order-process/eccomerce.webp";
import image3 from "../../../assets/images/order-process/location.webp";
import image1 from "../../../assets/images/order-process/sign-up.webp";
import image2 from "../../../assets/images/order-process/user.webp";
import SectionTitle from "../../../components/SectionTitle";

const OrderProcess = () => {
  return (
    <div className="my-container">
      <SectionTitle
        title="Order Process"
        content="Secure checkout, select your preferred payment method, receive order confirmation."
      />
      <div
        data-testid="orderProcess-container"
        className="grid grid-cols-1 gap-6 md:mt-4 md:grid-cols-2 xl:grid-cols-5"
      >
        <div className="orderProcess-card card card-compact rounded-md border border-dashed border-gray-5 bg-base-100">
          <figure>
            <img
              className="mx-auto w-20 cursor-pointer pt-3 transition-all duration-100 hover:scale-110 md:w-[70px] lg:pt-5"
              src={image1}
              alt=""
            />
          </figure>
          <div className="card-body mt-2 md:mt-4 lg:mt-8">
            <h2 className="h-8 pb-4 text-center text-base font-medium text-gray-6 md:text-lg lg:h-16 lg:text-xl lg:font-semibold">
              Signup for Free
            </h2>
            <p className="text-justify text-sm text-gray-4 lg:text-base lg:leading-6">
              Create your account through our website or mobile app with just
              your phone number. simple way to signup.
            </p>
          </div>
        </div>
        <div className="orderProcess-card card card-compact rounded-md border border-dashed border-gray-5 bg-base-100">
          <figure>
            <img
              className="mx-auto w-20 cursor-pointer pt-3 transition-all duration-100 hover:scale-110 md:w-[70px] lg:pt-5"
              src={image2}
              alt=""
            />
          </figure>
          <div className="card-body mt-2 md:mt-4 lg:mt-8">
            <h2 className="h-8 pb-4 text-center text-base font-medium text-gray-6 md:text-lg lg:h-16 lg:text-xl lg:font-semibold">
              Add Profile Information
            </h2>
            <p className="text-justify text-sm text-gray-4 lg:text-base lg:leading-6">
              Complete your profile by providing your email and store name so
              that we can identify you. simple way to info.
            </p>
          </div>
        </div>
        <div className="orderProcess-card card card-compact rounded-md border border-dashed border-gray-5 bg-base-100">
          <figure>
            <img
              className="mx-auto w-20 cursor-pointer pt-3 transition-all duration-100 hover:scale-110 md:w-[70px] lg:pt-5"
              src={image3}
              alt=""
            />
          </figure>
          <div className="card-body mt-2 md:mt-4 lg:mt-8">
            <h2 className="h-8 pb-4 text-center text-base font-medium text-gray-6 md:text-lg lg:h-16 lg:text-xl lg:font-semibold">
              Add Address Information
            </h2>
            <p className="text-justify text-sm text-gray-4 lg:text-base lg:leading-6">
              Provide all address details of your business. carefully add your
              name , email and address with details.
            </p>
          </div>
        </div>
        <div className="orderProcess-card card card-compact rounded-md border border-dashed border-gray-5 bg-base-100">
          <figure>
            <img
              className="mx-auto w-20 cursor-pointer pt-3 transition-all duration-100 hover:scale-110 md:w-[70px] lg:pt-5"
              src={image4}
              alt=""
            />
          </figure>
          <div className="card-body mt-2 md:mt-4 lg:mt-8">
            <h2 className="h-8 pb-4 text-center text-base font-medium text-gray-6 md:text-lg lg:h-16 lg:text-xl lg:font-semibold">
              Add ID & Bank Information
            </h2>
            <p className="text text-justify text-base leading-6 text-gray-4">
              Add in your ID & Business related details. provide securely your
              bank information with details. payment with any digital banking
              system.
            </p>
          </div>
        </div>
        <div className="orderProcess-card card card-compact rounded-md border border-dashed border-gray-5 bg-base-100">
          <figure>
            <img
              className="mx-auto w-20 cursor-pointer pt-3 transition-all duration-100 hover:scale-110 md:w-[70px] lg:pt-5"
              src={image5}
              alt=""
            />
          </figure>
          <div className="card-body mt-2 md:mt-4 lg:mt-8">
            <h2 className="h-8 pb-4 text-center text-base font-medium text-gray-6 md:text-lg lg:h-16 lg:text-xl lg:font-semibold">
              List Product
            </h2>
            <p className="text text-justify text-base leading-6 text-gray-4">
              Add products to your store through seller center. Start selling as
              soon as your products go live after going through quality control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
