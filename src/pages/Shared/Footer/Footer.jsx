/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import chat from "../../../assets/icon/facebook-messenger.svg";
import logo from "../../../assets/images/logo.svg";
import google_pay from "../../../assets/payment-icon/google-pay.svg";
import mastercard from "../../../assets/payment-icon/mastercard.svg";
import paytm from "../../../assets/payment-icon/paytm.svg";
import phonepe from "../../../assets/payment-icon/phonepe.svg";
import rupay from "../../../assets/payment-icon/rupay.svg";
import simpl from "../../../assets/payment-icon/simpl.svg";
import visa from "../../../assets/payment-icon/visa.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[url('assets/images/footer.png')] bg-black bg-no-repeat  lg:h-[750px] ">
        <div className="pb-[50px] pt-[300px] lg:pt-[150px]  mx-auto sm:max-w-xl 2xl:max-w-screen-2xl  m:max-w-xl md:max-w-full lg:max-w-screen-xl relative">
          <div className="px-10 lg:px-0 flex flex-col lg:flex-row justify-between gap-6  ">
            <div className="space-y-4">
              <img className="w-20" src={logo} alt="" />
              <h2 className="text-4xl font-bold text-white mt-2 font-bubblegum">MediCare Point </h2>
              <p className="w-96 text-white  text-justify">
                Lorem ipsum dolor sit amet, consectt dipiscing elit esent vestibulum molestie lacus. Aenean nonmy hendrerit mauris. Phasellus porta. Fusce suit varius mi. Cum sociis natoque penatibus
                et magnis dis parturient montes.
              </p>
            </div>
            <div className="text-white ">
              <h2 className="text-2xl mb-4  font-bubblegum">services</h2>
              <ul className="space-y-3 camp-footer font-semibold  footer-link">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Pages</Link>
                </li>
                <li>
                  <Link to="/">Team</Link>
                </li>
                <li>
                  <Link to="/">Appointment</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="text-gray-50 ">
              <h2 className="text-2xl mb-4  font-bubblegum">OUR POLICIES</h2>
              <ul className="space-y-3 camp-footer font-semibold footer-link">
                <li>
                  <Link to="/">Appointment</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Fees and Payments Policy</Link>
                </li>
                <li>
                  <Link to="/">Shipping and Delivery Policy</Link>
                </li>
                <li>
                  <Link to="/">Return, Refund and Cancellation Policy</Link>
                </li>
              </ul>
            </div>
            <div className="text-white ">
              <h2 className="text-2xl mb-4 font-bubblegum">SHOPPING</h2>
              <ul className="space-y-3 camp-footer font-semibold footer-link">
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
                  <Link to="/">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-11 px-10 lg:px-0  flex justify-between gap-12">
            {/* payment */}
            <div>
              <p className="text-white text-2xl font-bold">OUR PAYMENT PARTNERS</p>
              <div className="mt-8 flex gap-5 flex-col  md:flex-row">
                <img className="w-20" src={google_pay} alt="" />
                <img className="w-20" src={mastercard} alt="" />
                <img className="w-20" src={visa} alt="" />
                <img className="w-20" src={paytm} alt="" />
                <img className="w-20" src={phonepe} alt="" />
                <img className="w-20" src={rupay} alt="" />
                <img className="w-20" src={simpl} alt="" />
              </div>
            </div>
            {/* social  */}
            <div className="px-8">
              <p className="text-white text-2xl font-bold">Follow Us</p>
              <div className="mt-8 flex gap-5 flex-col  md:flex-row">
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
              Copyright &copy; 2023 by <span className="text-yellow-500">MediCare Point</span>
            </p>
          </div>
          {/* chat */}
          <div className="absolute bottom-1/4 -right-28">
            <img className="w-20" src={chat} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
