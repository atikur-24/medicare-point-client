import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import delivery from "../../assets/images/services/delivary.webp";
import pharmacy from "../../assets/images/services/pharmacy.webp";
import teast from "../../assets/images/services/test.webp";
import "./services.css";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";

const Services = () => {
  return (
    <div>
      <WebSiteTitle title="Services" />
      <div className="my-container flex flex-col-reverse xl:flex-row justify-between gap-6 items-center ">
        <div className="w-full xl:w-[70%] space-y-6">
          <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-title-color">In this website you will got world-class service.</h2>
          <p className="text-gray-5 text-sm lg:text-base xl:leading-7 text-justify">
            We are try to provide our best services for every single customer. You will got 100% original medicine form medicare point. Our goal is to deliver safe and original products to customers.
          </p>
          <Link to="/medicines">
            <button type="button" className="my-btn mt-6">
              View Our All Product <BsArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
        <div className="w-full">
          <img className="w-full rounded-md" src={pharmacy} alt="pharmacist" />
        </div>
      </div>

      <div className="services-product-bg">
        <div className="bg-black bg-opacity-60">
          <div className="flex flex-col md:flex-row justify-between gap-6 items-center my-container ">
            <div className="w-full space-y-6">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide xl:leading-snug text-white capitalize">In this website you will get some test booking options.</h2>
              <p className="text-sm lg:text-base xl:leading-7 text-white text-justify">
                You can booking lab test according to your time and needed. After booking a test from this website If you will go to Diagnostic Centre for test you can do test with out any trouble. And you also get some discount. So book the test now
                without delay.
              </p>
              <Link to="/lab-test">
                <button type="button" className="my-btn mt-6">
                  View Our All tests <BsArrowRight className="text-xl" />
                </button>
              </Link>
            </div>
            <div className="w-full">
              <img className="w-full rounded-md " src={teast} alt="lab-test" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-container flex flex-col md:flex-row justify-between gap-6 items-center ">
        <div className="w-full md:w-[70%] space-y-6">
          <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-title-color">
            Super fast delivery by <br /> 100% protected
          </h2>
          <p className="text-gray-5 text-sm lg:text-base xl:leading-7">you can order medicine according to your needs by online. We will try to delivery it to you as soon as possible. We will deliver your product to you with utmost care.</p>
          <Link to="/about-us">
            <button type="button" className="my-btn mt-6">
              Know more About Us <BsArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
        <div className="w-full">
          <img className="w-full rounded-md" src={delivery} alt="delivery-boy" />
        </div>
      </div>
    </div>
  );
};

export default Services;
