import HowAreUs from "./HowAreUs/HowAreUs";
import Medilazar from "./Medilazar/Medilazar";
import OurPromise from "./OurPromise/OurPromise";
import WhyChoseUs from "./WhyChoseUS/WhyChoseUs";

const AboutUs = () => {
  return (
    <section className=" bg-lite ">
      <div className=" my-container ">
        <HowAreUs />
        <Medilazar />
        <OurPromise />
        <WhyChoseUs />
        {/* <Values /> */}
      </div>
    </section>
  );
};

export default AboutUs;
