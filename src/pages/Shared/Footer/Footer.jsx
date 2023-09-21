/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/footer.svg";
import ssl from "../../../assets/payment-icon/payment.webp";


const Footer = () => {
  return (
    <div>
      <div className="bg-[url('assets/images/footer.webp')] bg-black bg-no-repeat  xl:h-[770px] ">
        <div className="pb-[50px] pt-[100px] xl:pt-[150px] xl:px-8  mx-auto sm:max-w-xl 2xl:max-w-screen-2xl  m:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="px-10 xl:px-0 flex flex-col xl:flex-row justify-between gap-6  ">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img className="w-28 md:w-32" src={logo} alt="" />
                <h2 className="text-xl lg:text-3xl font-bold text-white mt-2 font-bubblegum">MediCare Point </h2>
              </div>
              <p className="lg:w-96 text-white  text-justify">
                Welcome to MediCare Point, your trusted destination for all your pharmaceutical needs. As an online medicine shop, we're dedicated to providing you with a seamless and convenient way
                to access essential medications and healthcare products from the comfort of your home.
              </p>
            </div>
            <div className="text-white ">
              <h2 className="text-2xl mb-4 uppercase ">Services</h2>
              <ul className="space-y-3  font-semibold  footer-link">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/medicines" className="capitalize">
                    MEDICINES
                  </Link>
                </li>
                <li>
                  <Link to="/lab-test" className="capitalize">
                    LAB TEST
                  </Link>
                </li>
                <li>
                  <Link to="/healthtips" className="capitalize">
                    HEALTH TIPS
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="capitalize">
                    BLOGS
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-white ">
              <h2 className="text-2xl mb-4  ">OUR POLICIES</h2>
              <ul className="space-y-3  font-semibold footer-link">
                {/* <li>
                  <Link to="/">Appointment</Link>
                </li> */}
                <li>
                  <Link to="/terms&conditions">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/paymentpolicy">Fees and Payments Policy</Link>
                </li>
                {/* <li>
                  <Link to="/">Shipping and Delivery Policy</Link>
                </li> */}
                <li>
                  <Link to="/refund">Return, Refund and Cancellation Policy</Link>
                </li>
              </ul>
            </div>
            <div className="text-white ">
              <h2 className="text-2xl mb-4 ">SHOPPING</h2>
              <ul className="space-y-3  font-semibold footer-link">
                <li>
                  <Link to="/">Browse by A-Z</Link>
                </li>
                <li>
                  <Link to="/">Browse by Manufacturers</Link>
                </li>
                <li>
                  <Link to="/">Health Articles</Link>
                </li>
                <li>
                  <Link to="/">Offers / Coupons</Link>
                </li>
                <li>
                  <Link to="/">Offers / Coupons</Link>
                </li>
                <li>
                  <Link to="faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-11 px-10 xl:px-0  flex flex-col md:flex-row  justify-between gap-12">
            {/* payment */}
            <div>
              <p className="text-white text-2xl font-bold">OUR PAYMENT PARTNERS</p>
              <div className="mt-8 ">
                <img className="" src={ssl} alt="" />
              </div>
            </div>
            {/* social  */}
            <div className="md:px-8">
              <p className="text-white text-2xl font-bold">Follow Us</p>
              <div className="mt-8 flex gap-5   md:flex-row">
                <FaFacebookF className="w-6 h-6 text-white" />
                <FaInstagram className="w-6 h-6 text-white" />
                <FaLinkedinIn className="w-6 h-6 text-white" />
                <FaTwitter className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <hr className="mt-8 " />
          {/* Copyright */}
          <div className="mt-11 px-10 lg:px-0 ">
            <p className="text-center text-white font-bold">
              Copyright &copy; 2023 by <span className="text-[#eab308]">MediCare Point</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
