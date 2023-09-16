import ads from "../../../assets/images/AD/ad.webp";
import OfferBanner from "./OfferBanner";

const MedicineAd = () => {
  return (
    <div className="my-16 hidden lg:block">
      <OfferBanner discount="15" img_ad={ads} title="Your Health is our Priority" />
    </div>
  );
};

export default MedicineAd;
