import delivery from "../../../assets/images/AD/delivery.png";
import AdBanner from "./AdBanner";

const DeliveryAd = () => {
  return (
    <div className="my-20">
      <AdBanner discount="5" img_ad={delivery} title="Free Delivery" />
    </div>
  );
};

export default DeliveryAd;
