import "./AdBanner.css";

const AdBanner = ({ discount, img_ad, title }) => {
  return (
    <div className="relative ">
      <div className="flex w-full relative">
        <div className="shape_i w-[70%] h-[250px] flex items-center ">
          <div className="font-bold px-10 text-white inline-flex gap-6 items-center">
            <p className="text-8xl">{discount}%</p>
            <p className="text-3xl">
              Special <br /> Discount
            </p>
          </div>
        </div>
        <div className="shape_ii w-[50%] absolute  bottom-0 right-0  h-[250px] ">
          <figure className="">
            <img className="w-full" src={img_ad} alt="" />
          </figure>
        </div>
      </div>
      <div className="shape_iii absolute top-0 left-[30%] z-10 w-[50%] flex flex-col gap-4 justify-center items-center">
        <h2 className="text-2xl  text-white font-bold uppercase  ">{title}</h2>
        <button type="button" className="btn ">
          order now
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
