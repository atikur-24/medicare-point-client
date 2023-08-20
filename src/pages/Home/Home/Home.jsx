import { Link } from "react-router-dom";
import chatImg from "../../../assets/icon/message_icon.svg";
import DeliveryOffer from "../Advertisement/DeliveryOffer";
import MedicineAd from "../Advertisement/MedicineAd";

import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import ChooseUs from "../ChooseUs/ChooseUs";
import Feedback from "../FeedBack/Feedback";
import Headline from "../Headline/Headline";
import HighestSellings from "../HighestSellings/HighestSellings";
import OrderProcess from "../OrderProcess/OrderProcess";
import OtcMedicine from "../OtcMedicine/OtcMedicine";
import PainProducts from "../Painrelief/PainProducts";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <Headline />
      <MedicineAd />
      <Categories />
      <HighestSellings />
      <PainProducts />

      <OtcMedicine />
      <OrderProcess />
      <Service />
      <Brands />
      <Feedback />
      <DeliveryOffer />
      <ChooseUs />
      <div className="fixed z-50 bottom-10 right-10 ">
        <Link to="/contract">
          <img className="w-16 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500" src={chatImg} alt="Message Icon" />
        </Link>
      </div>
    </>
  );
};

export default Home;
