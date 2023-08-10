import ad from "../../../assets/images/AD/ad.png";
import AdBanner from "./AdBanner";

const Ad = () => {
  return (
    <div className="my-20">
      <AdBanner discount="15" img_ad={ad} title="Your Health is our Priority" />
    </div>
  );
};

export default Ad;
