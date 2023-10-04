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
          <h2 className="text-xl font-semibold capitalize text-title-color md:text-3xl xl:text-4xl xl:font-bold xl:leading-snug xl:tracking-wide">
            Hi, How Can I help you?
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="w-full border-[1px] border-gray-3 p-6">
              <div className="flex cursor-pointer items-center gap-3 pb-1 lg:pb-3">
                <TbTruckDelivery className="text-2xl text-my-primary lg:text-4xl" />
                <h4 className="text-base font-medium uppercase text-my-primary lg:text-lg">
                  I Want to know where my order is
                </h4>
              </div>
              <p className="text-sm text-gray-5">
                Get status updates about your order with our tracking tool
              </p>
            </div>
            <div className="w-full border-[1px] border-gray-3 p-6">
              <div className="flex cursor-pointer items-center gap-3 pb-1 lg:pb-3">
                <BsBoxSeam className="text-2xl text-my-primary lg:text-4xl" />
                <h4 className="text-base font-medium uppercase text-my-primary lg:text-lg">
                  I Want to return an item
                </h4>
              </div>
              <p className="text-sm text-gray-5">
                Use our online return form in your dashboard to start your
                return
              </p>
            </div>
            <div className="w-full border-[1px] border-gray-3 p-6">
              <div className="flex cursor-pointer items-center gap-3 pb-1 lg:pb-3">
                <BsBox2 className="text-2xl text-my-primary lg:text-3xl" />
                <h4 className="text-base font-medium uppercase text-my-primary lg:text-lg">
                  I Want to cancel an order
                </h4>
              </div>
              <p className="text-sm text-gray-5">
                use our online cancellation Form to state your order
                cancellation
              </p>
            </div>
          </div>
        </div>
        <div className="my-16">
          <div className="flex justify-between gap-10">
            <div className="hidden w-full  md:block">
              <h2 className="mb-5 text-xl font-medium capitalize text-title-color md:text-3xl md:font-semibold xl:text-4xl xl:font-bold xl:tracking-wide">
                Get in touch
              </h2>
              <p className="text-justify text-sm text-gray-5 lg:text-start lg:text-base xl:leading-7">
                We're collaborating with some of the largest brands in the
                world, as well as with startups. We’d love to learn your needs,
                vision and explore how we can assist exceeding your goals.
              </p>
            </div>
            <div className="hidden w-full md:block">
              <h2 className="mb-5 text-xl font-medium capitalize text-title-color md:text-3xl md:font-semibold xl:text-4xl xl:font-bold xl:tracking-wide">
                Contract Us
              </h2>
              <p className="text-justify text-sm text-gray-5 lg:text-start lg:text-base xl:leading-7">
                Here are Us contract Information. Feel free to contract with us
                or send message by this contract form.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-10 md:flex-row">
            <div className="w-full space-y-6">
              <div className="md:hidden">
                <h2 className="mb-3 text-4xl font-bold lg:mb-5">
                  Get in touch
                </h2>
                <p className="text-sm text-gray-5 lg:text-base">
                  We're collaborating with some of the largest brands in the
                  world, as well as with startups. We’d love to learn your
                  needs, vision and explore how we can assist exceeding your
                  goals.
                </p>
              </div>
              <div>
                <Form />
              </div>
            </div>
            <div className="w-full space-y-6">
              <div className="md:hidden">
                <h2 className="mb-3 text-4xl font-bold lg:mb-5">Contract Us</h2>
                <p className="text-sm text-gray-5 lg:text-base">
                  Here are Us contract Information. Feel free to contract with
                  us or send message by this contract form.{" "}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-5">
                  <TbWorldPin className="text-2xl text-my-primary lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" text-base font-semibold uppercase transition delay-150 duration-300 ease-in-out lg:text-lg">
                      address
                    </h4>
                    <p className="text-sm text-gray-5 lg:text-base">
                      9066 Green Lake Drive Chevy Chase, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5">
                  <LiaPhoneVolumeSolid className="text-2xl text-my-primary lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" text-base font-semibold uppercase transition delay-150 duration-300 ease-in-out lg:text-lg">
                      phone number
                    </h4>
                    <p className="text-sm text-gray-5 lg:text-base">
                      (+1800) 56 789 990 <br />
                      (+1800) 66 789 990
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5">
                  <MdOutlineMail className="text-2xl text-my-primary lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" text-base font-semibold uppercase transition delay-150 duration-300 ease-in-out lg:text-lg">
                      Email Address
                    </h4>
                    <p className="text-sm text-gray-5 lg:text-base">
                      support@gmail.com <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5">
                  <BiTimeFive className="text-2xl text-my-primary lg:text-4xl xl:text-6xl" />
                  <div className="hover:text-my-primary">
                    <h4 className=" text-base font-semibold uppercase transition  delay-150 duration-300 ease-in-out lg:text-lg">
                      Support Time
                    </h4>
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
