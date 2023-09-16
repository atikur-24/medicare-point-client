import pharmacies from "../../../assets/images/AboutUs/pharmasiest.webp";

const HowAreUs = () => {
  return (
    <div className=" relative">
      <div className="clear-left flex flex-col flex-col-reverse xl:flex-row gap-6 mg:gap-0 justify-between ">
        <div className="w-full space-y-7">
          <p className="uppercase text-my-primary tracking-widest font-semibold">how we are</p>
          <h2 className="text-xl md:text-3xl xl:text-4xl font-medium md:font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-title-color">With us, expect more than just a pharmacy.</h2>
          <p className="md:w-10/12 text-gray-5 text-sm lg:text-base lg:tracking-wide text-justify">
            Erat litora dignissim consectetur sit mollis. Placerat gravida dolor integer mollis habitant felis consectetur lorem platea ac hendrerit. Vitae platea massa consectetuer tristique vivamus vulputate suspendisse blandit.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:w-8/12 items-center xl:absolute justify-center border-[1px] border-gray-3 rounded-md bg-white shadow-md">
            <div className="rounded-tl-lg md:rounded-l-lg py-6">
              <div className="border-r-[1px] border-slate-3 px-10 text-center">
                <h2 className="text-xl lg:text-5xl font-bold text-my-primary md:text-3xl">95%</h2>
                <p className="text-gray-5">Happy Customer</p>
              </div>
            </div>
            <div className="h-full  py-6 rounded-tr-lg md:rounded-none">
              <div className="md:border-r-[1px] border-slate-3 px-10 text-center">
                <h2 className="text-xl lg:text-5xl font-bold text-my-primary md:text-3xl">27K+</h2>
                <p className="text-gray-5">Product Sold</p>
              </div>
            </div>
            <div className="rounded-b-lg md:rounded-r-lg col-span-2 md:col-span-1 py-6">
              <div className="px-10 text-center">
                <h2 className="text-xl lg:text-5xl font-bold text-my-primary md:text-3xl">15+</h2>
                <p className="text-gray-5">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img className=" rounded-md md:h-[450px] w-full " src={pharmacies} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowAreUs;
