import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import HighestSellings from "../HighestSellings/HighestSellings";
import chatImg from "../../../assets/icon/message_icon.svg";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HighestSellings />

      <div className="fixed bottom-10 right-10 ">
        <img
          className="w-12 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500"
          src={chatImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
