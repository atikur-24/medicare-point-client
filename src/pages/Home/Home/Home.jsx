import Categories from "../Categories/Categories";
import Feedback from "../FeedBack/Feedback";
import HighestSellings from "../HighestSellings/HighestSellings";
import OtcMedicine from "../OtcMedicine/OtcMedicine";

const Home = () => {
  return (
    <div>
      <Categories />
      <HighestSellings />
      <OtcMedicine />
      <Feedback />
    </div>
  );
};

export default Home;
