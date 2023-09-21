import MessageOption from "../../../components/MessageOption/MessageOption";
import DeliveryOffer from "../Advertisement/DeliveryOffer";
import LabAd from "../Advertisement/LabAd";
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
      <LabAd />
      <OrderProcess />
      <Service />
      <Brands />
      <Feedback />
      <DeliveryOffer />
      <ChooseUs />
      <div className="fixed z-50 bottom-10 right-10 ">
        {/* <button type="button">
          <img className="w-16 md:w-20 hover:w-24 cursor-pointer ease-in-out duration-500" src={chatImg} alt="Message Icon" />
        </button> */}
        <MessageOption />
      </div>
    </>
  );
};

export default Home;
