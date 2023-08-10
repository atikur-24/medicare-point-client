import chatImg from "../../../assets/icon/message_icon.svg";
import Ad from "../Ad/Ad";
import DeliveryAd from "../Ad/DeliveryAd";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChooseUs from "../ChooseUs/ChooseUs";
import Feedback from "../FeedBack/Feedback";
import Headline from "../Headline/Headline";
import HighestSellings from "../HighestSellings/HighestSellings";
import OrderProcess from "../OrderProcess/OrderProcess";
import OtcMedicine from "../OtcMedicine/OtcMedicine";
import OneProducts from "../Product1/OneProducts";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Ad />
      <Categories />
      <HighestSellings />
      <OneProducts />
      <OtcMedicine />
      <OrderProcess />
      <Service />
      <Feedback />
      <DeliveryAd />
      <ChooseUs />
      <div className="fixed z-50 bottom-10 right-10 ">
        <img className="w-12 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500" src={chatImg} alt="Message Icon" />
      </div>
    </div>
  );
};

export default Home;
