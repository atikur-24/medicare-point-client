import chatImg from "../../../assets/icon/message_icon.svg";
import Ad from "../Ad/Ad";
import DeliveryAd from "../Ad/DeliveryAd";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChooseUs from "../ChooseUs/ChooseUs";
import Feedback from "../FeedBack/Feedback";
import HighestSellings from "../HighestSellings/HighestSellings";
import chatImg from "../../../assets/icon/message_icon.svg";
import Product1 from "../Product1/Product1";
import OtcMedicine from "../OtcMedicine/OtcMedicine";
import OtcMedicine from "../OtcMedicine/OtcMedicine";
import Product1 from "../Product1/Product1";

const Home = () => {
  return (
    <div>
      <Banner />
      <Ad />
      <Categories />
      <HighestSellings />
      <Product1 />

      <div className="fixed z-50 bottom-10 right-10 ">
        <img className="w-12 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500" src={chatImg} alt="Message Icon" />
      </div>
      <OtcMedicine />
      <Feedback />
      <DeliveryAd />
      <ChooseUs />
      <div className="fixed bottom-10 right-10 ">
        <img className="w-12 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500" src={chatImg} alt="Message Icon" />
      </div>
    </div>
  );
};

export default Home;
