import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import HighestSellings from "../HighestSellings/HighestSellings";
import chatImg from "../../../assets/icon/facebook-messenger.svg";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HighestSellings />

      <div className="fixed bottom-10 right-8 ">
        <img className="w-12 md:w-16 cursor-pointer" src={chatImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
