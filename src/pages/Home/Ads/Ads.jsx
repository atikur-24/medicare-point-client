import ads from "../../../assets/images/AD/ad.png";
import AdBanner from "./AdsBanner";

const Ads = () => {
  return (
    <div className="my-16 hidden md:block">
      <AdBanner discount="15" img_ad={ads} title="Your Health is our Priority" />
    </div>
  );
};

export default Ads;
