import delivery from "../../../assets/images/AD/delivery.png";
import AdsBanner from "./AdsBanner";

const DeliveryAds = () => {
  return (
    <div className=" hidden md:block">
      <AdsBanner discount="5" img_ad={delivery} title="Free Delivery" />
    </div>
  );
};

export default DeliveryAds;
