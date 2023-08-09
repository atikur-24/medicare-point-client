import Ad from "../Ad/Ad";
import DeliveryAd from "../Ad/DeliveryAd";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Feedback from "../FeedBack/Feedback";
import HighestSellings from "../HighestSellings/HighestSellings";
import OtcMedicine from "../OtcMedicine/OtcMedicine";

const Home = () => {
  return (
    <div>
      <Banner />
      <Ad />
      <Categories />
      <HighestSellings />
      <OtcMedicine />
      <Feedback />
      <DeliveryAd />
    </div>
  );
};

export default Home;
