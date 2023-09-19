import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";
import HowAreUs from "./HowAreUs/HowAreUs";
import Medilazar from "./Medilazar/Medilazar";
import OurPromise from "./OurPromise/OurPromise";
import WhyChoseUs from "./WhyChoseUS/WhyChoseUs";

const AboutUs = () => {
  return (
    <div className="my-container ">
      <WebSiteTitle title="About Us" />
      <HowAreUs />
      <Medilazar />
      <OurPromise />
      <WhyChoseUs />
    </div>
  );
};

export default AboutUs;
