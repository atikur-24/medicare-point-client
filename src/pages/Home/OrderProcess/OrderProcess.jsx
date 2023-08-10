import image4 from "../../../assets/images/order-process/checklist.png";
import image5 from "../../../assets/images/order-process/eccomerce.png";
import image3 from "../../../assets/images/order-process/location.png";
import image1 from "../../../assets/images/order-process/sign-up.png";
import image2 from "../../../assets/images/order-process/user.png";
import Heading from "../../Shared/Heading/Heading";

const OrderProcess = () => {
  return (
    <div className="nav-container">
      <Heading title="Order Process" center />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="space-y-4 text-center">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image1} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non impedit ipsum corrupti!</p>
        </div>
        <div className="space-y-4 text-center">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image2} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non impedit ipsum corrupti!</p>
        </div>
        <div className="space-y-4 text-center">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image3} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non impedit ipsum corrupti!</p>
        </div>
        <div className="space-y-4 text-center">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image4} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non impedit ipsum corrupti!</p>
        </div>
        <div className="space-y-4 text-center">
          <img className="w-20 md:w-16 mx-auto hover:scale-110 cursor-pointer" src={image5} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non impedit ipsum corrupti!</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
