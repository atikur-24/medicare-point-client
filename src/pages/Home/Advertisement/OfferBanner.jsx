import { Link } from "react-router-dom";
import "./OfferBanner.css";

const OfferBanner = ({ discount, img_ad, title }) => {
  return (
    <div className="relative ">
      <div className="flex w-full relative">
        <div className="shape_i w-[70%] md:h-[150px] xl:h-[250px] flex items-center ">
          <div className="font-bold px-10 text-white inline-flex md:gap-4  lg:gap-6 items-center">
            <p className="md:text-4xl xl:text-7xl 2xl:text-8xl">{discount}%</p>
            <p className="text-2xl xl:text-3xl 2xl:text-4xl ">
              Special <br /> Discount
            </p>
          </div>
        </div>
        <div className="shape_ii w-[50%] absolute  bottom-0 right-0  md:h-[150px] xl:h-[250px] ">
          <figure className="">
            <img className="w-full" src={img_ad} alt="" />
          </figure>
        </div>
      </div>
      <div className="shape_iii md:h-[100px] xl:h-[160px] absolute top-0 left-[30%] z-10 w-[50%] flex flex-col gap-4 justify-center items-center">
        <h2 className="xl:text-2xl   text-white font-bold uppercase  ">{title}</h2>

        <Link to="/medicines" type="button" className="md:btn-sm 2xl:btn-md btn active:hover:transform-none active:focus:transform-none ">
          order now
        </Link>
      </div>
    </div>
  );
};

export default OfferBanner;
