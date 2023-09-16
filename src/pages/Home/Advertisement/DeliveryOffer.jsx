import delivery from "../../../assets/images/AD/delivery.webp";
import OfferBanner from "./OfferBanner";

const DeliveryOffer = () => {
  return (
    <div className=" hidden md:block">
      <OfferBanner discount="5" img_ad={delivery} title="Free Delivery" />
    </div>
  );
};

export default DeliveryOffer;
