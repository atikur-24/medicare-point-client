/* eslint-disable react/no-unescaped-entities */
import { BiTimeFive } from "react-icons/bi";
import { BsBox2, BsBoxSeam } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { TbTruckDelivery, TbWorldPin } from "react-icons/tb";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";
import Form from "./Form/Form";

const Contract = () => {
  return (
    <div className="">
      <WebSiteTitle title="Contract" />
      <div className="my-container">
        <div>
          <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-title-color">Hi, How Can I help you?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-6 border-[1px] border-gray-3 w-full">
              <div className="flex gap-3 items-center pb-1 lg:pb-3 cursor-pointer">
                <TbTruckDelivery className="text-2xl lg:text-4xl text-my-primary" />
                <h4 className="text-base lg:text-lg font-medium uppercase text-my-primary">I Want to know where my order is</h4>
              </div>
              <p className="text-sm text-gray-5">Get status updates about your order with our tracking tool</p>
            </div>
            <div className="p-6 border-[1px] border-gray-3 w-full">
              <div className="flex gap-3 items-center pb-1 lg:pb-3 cursor-pointer">
                <BsBoxSeam className="text-2xl lg:text-4xl text-my-primary" />
                <h4 className="text-base lg:text-lg font-medium uppercase text-my-primary">I Want to return an item</h4>
              </div>
              <p className="text-sm text-gray-5">Use our online return form in your dashboard to start your return</p>
            </div>
            <div className="p-6 border-[1px] border-gray-3 w-full">
              <div className="flex gap-3 items-center pb-1 lg:pb-3 cursor-pointer">
                <BsBox2 className="text-2xl lg:text-3xl text-my-primary" />
                <h4 className="text-base lg:text-lg font-medium uppercase text-my-primary">I Want to cancel an order</h4>
              </div>
              <p className="text-sm text-gray-5">use our online cancellation Form to state your order cancellation</p>
            </div>
          </div>
        </div>
        <div className="my-16">
          <div className="flex justify-between gap-10">
            <div className="w-full hidden  md:block">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide capitalize text-title-color mb-5">Get in touch</h2>
              <p className="text-gray-5 text-sm lg:text-base xl:leading-7 text-justify lg:text-start">
                We're collaborating with some of the largest brands in the world, as well as with startups. We’d love to learn your needs, vision and explore how we can assist exceeding your goals.
              </p>
            </div>
            <div className="md:block hidden w-full">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide capitalize text-title-color mb-5">Contract Us</h2>
              <p className="text-gray-5 text-sm lg:text-base xl:leading-7 text-justify lg:text-start">
                Here are Us contract Information. Feel free to contract with us or send message by this contract form.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row justify-between items-center gap-10">
            <div className="w-full space-y-6">
              <div className="md:hidden">
                <h2 className="text-4xl font-bold mb-3 lg:mb-5">Get in touch</h2>
                <p className="text-gray-5 text-sm lg:text-base">
                  We're collaborating with some of the largest brands in the world, as well as with startups. We’d love to learn your needs, vision and explore how we can assist exceeding your goals.
                </p>
              </div>
              <div>
                <Form />
              </div>
            </div>
            <div className="w-full space-y-6">
              <div className="md:hidden">
                <h2 className="text-4xl font-bold mb-3 lg:mb-5">Contract Us</h2>
                <p className="text-gray-5 text-sm lg:text-base">Here are Us contract Information. Feel free to contract with us or send message by this contract form. </p>
              </div>
              <div>
                <div className="flex gap-5 items-center">
                  <TbWorldPin className="text-my-primary text-2xl lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" uppercase text-base lg:text-lg font-semibold transition delay-150 duration-300 ease-in-out">address</h4>
                    <p className="text-gray-5 text-sm lg:text-base">9066 Green Lake Drive Chevy Chase, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center">
                  <LiaPhoneVolumeSolid className="text-my-primary text-2xl lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" uppercase text-base lg:text-lg font-semibold transition delay-150 duration-300 ease-in-out">phone number</h4>
                    <p className="text-gray-5 text-sm lg:text-base">
                      (+1800) 56 789 990 <br />
                      (+1800) 66 789 990
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center">
                  <MdOutlineMail className="text-my-primary text-2xl lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" uppercase text-base lg:text-lg font-semibold transition delay-150 duration-300 ease-in-out">Email Address</h4>
                    <p className="text-gray-5 text-sm lg:text-base">
                      support@gmail.com <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center">
                  <BiTimeFive className="text-my-primary text-2xl lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" uppercase text-base lg:text-lg font-semibold  transition delay-150 duration-300 ease-in-out">Support Time</h4>
                    <p className="text-gray-5">
                      Saturday - Thursday: 9:00 - 20:00 <br />
                      Friday: 14:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
