import ads from "../../../assets/images/AD/ad.png";
import OfferBanner from "./OfferBanner";

const MedicineAd = () => {
  return (
    <div className="my-16 hidden md:block">
      <OfferBanner discount="15" img_ad={ads} title="Your Health is our Priority" />
    </div>
  );
};

export default MedicineAd;
