import Ad from "../Ad/Ad";
import DeliveryAd from "../Ad/DeliveryAd";
import Categories from "../Categories/Categories";
import HighestSellings from "../HighestSellings/HighestSellings";

const Home = () => {
  return (
    <div>
      <Ad />
      <Categories />
      <HighestSellings />
      <DeliveryAd />
    </div>
  );
};

export default Home;
