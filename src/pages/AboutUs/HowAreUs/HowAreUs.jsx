import pharmacies from "../../../assets/images/AboutUs/pharmasiest.webp";

const HowAreUs = () => {
  return (
    <div className=" relative">
      <div className="mg:gap-0 clear-left flex  flex-col justify-between gap-6 xl:flex-row ">
        <div className="w-full space-y-7">
          <p className="font-semibold uppercase tracking-widest text-my-primary">
            how we are
          </p>
          <h2 className="text-xl font-medium capitalize text-title-color md:text-3xl md:font-semibold xl:text-4xl xl:font-bold xl:leading-snug xl:tracking-wide">
            With us, expect more than just a pharmacy.
          </h2>
          <p className="text-justify text-sm text-gray-5 md:w-10/12 lg:text-base lg:tracking-wide">
            Erat litora dignissim consectetur sit mollis. Placerat gravida dolor
            integer mollis habitant felis consectetur lorem platea ac hendrerit.
            Vitae platea massa consectetuer tristique vivamus vulputate
            suspendisse blandit.
          </p>
          <div className="grid grid-cols-2 items-center justify-center rounded-md border-[1px] border-gray-3 bg-white shadow-md md:grid-cols-3 xl:absolute xl:w-8/12">
            <div className="rounded-tl-lg py-6 md:rounded-l-lg">
              <div className="border-r-[1px] border-slate-3 px-10 text-center">
                <h2 className="text-xl font-bold text-my-primary md:text-3xl lg:text-5xl">
                  95%
                </h2>
                <p className="text-gray-5">Happy Customer</p>
              </div>
            </div>
            <div className="h-full  rounded-tr-lg py-6 md:rounded-none">
              <div className="border-slate-3 px-10 text-center md:border-r-[1px]">
                <h2 className="text-xl font-bold text-my-primary md:text-3xl lg:text-5xl">
                  27K+
                </h2>
                <p className="text-gray-5">Product Sold</p>
              </div>
            </div>
            <div className="col-span-2 rounded-b-lg py-6 md:col-span-1 md:rounded-r-lg">
              <div className="px-10 text-center">
                <h2 className="text-xl font-bold text-my-primary md:text-3xl lg:text-5xl">
                  15+
                </h2>
                <p className="text-gray-5">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className=" w-full rounded-md md:h-[450px] "
            src={pharmacies}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HowAreUs;
