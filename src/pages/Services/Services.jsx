import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import delivery from "../../assets/images/services/delivary.jpg";
import pharmacy from "../../assets/images/services/pharmacy.jpg";
import teast from "../../assets/images/services/test.jpg";
import "./services.css";

const Services = () => {
  return (
    <div>
      <div className="my-container flex flex-col flex-col-reverse md:flex-row justify-between gap-6 items-center ">
        <div className="w-full md:w-[70%] space-y-6">
          <h2 className="text-4xl font-bold">In this website you will got world-class service.</h2>
          <p className="text-gray-5">
            We are try to provide our best services for every single customer. You will got 100% original medicine form medicare point. Our goal is to deliver safe and original products to customers.
          </p>
          <Link to="/medicines">
            <button type="button" className="my-btn mt-6">
              View Our All Product <BsArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
        <div className="w-full">
          <img className="w-full rounded-md" src={pharmacy} alt="" />
        </div>
      </div>

      <div className="services-product-bg">
        <div className="bg-my-primary opacity-50">
          <div className="flex flex-col flex-col-reverse md:flex-row justify-between gap-6 items-center my-container ">
            <div className="w-full space-y-6">
              <h2 className="text-4xl font-bold text-white">In this website you will get some test booking options.</h2>
              <p className="text-white">
                You can booking lab test according to your time and needed. After booking a test from this website If you will go to Diagnostic Centre for test you can do test with out any trouble.
                And you also get some discount. So book the test now without delay.
              </p>
              <Link to="/lab-test">
                <button type="button" className="my-btn mt-6">
                  View Our All tests <BsArrowRight className="text-xl" />
                </button>
              </Link>
            </div>
            <div className="w-full">
              <img className="w-full rounded-md " src={teast} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-container flex flex-col flex-col-reverse md:flex-row justify-between gap-6 items-center ">
        <div className="w-full md:w-[70%] space-y-6">
          <h2 className="text-4xl font-bold">Super fast delivery by <br /> 100% protected</h2>
          <p className="text-gray-5">
            you can order medicine according to your needs by online. We will try to delivery it to you as soon as possible. We will deliver your product to you with utmost care.
          </p>
          <Link to="/about-us">
            <button type="button" className="my-btn mt-6">
              Know more About Us <BsArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
        <div className="w-full">
          <img className="w-full rounded-md" src={delivery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
