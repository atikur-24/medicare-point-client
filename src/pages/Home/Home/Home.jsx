import Ad from "../Ad/Ad";
import DeliveryAd from "../Ad/DeliveryAd";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChooseUs from "../ChooseUs/ChooseUs";
import Feedback from "../FeedBack/Feedback";
import HighestSellings from "../HighestSellings/HighestSellings";
import chatImg from "../../../assets/icon/message_icon.svg";
import OneProducts from "../Product1/OneProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Ad />
      <Categories />
      <HighestSellings />
      <OneProducts />

      <div className="fixed bottom-10 right-10 ">
        <img
          className="w-12 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500"
          src={chatImg}
          alt="Message Icon"
        />
      </div>
    </div>
  );
};

export default Home;
