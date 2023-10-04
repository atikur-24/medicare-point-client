import { Link } from "react-router-dom";
import "./OfferBanner.css";

const OfferBanner = ({ discount, img_ad, title }) => {
  return (
    <div className="relative ">
      <div className="relative flex w-full">
        <div className="shape_i flex w-[70%] items-center md:h-[150px] xl:h-[250px] ">
          <div className="inline-flex items-center px-10 font-bold text-white  md:gap-4 lg:gap-6">
            <p className="md:text-4xl xl:text-7xl 2xl:text-8xl">{discount}%</p>
            <p className="text-2xl xl:text-3xl 2xl:text-4xl ">
              Special <br /> Discount
            </p>
          </div>
        </div>
        <div className="shape_ii absolute bottom-0  right-0 w-[50%]  md:h-[150px] xl:h-[250px] ">
          <figure className="">
            <img className="w-full" src={img_ad} alt="" />
          </figure>
        </div>
      </div>
      <div className="shape_iii absolute left-[30%] top-0 z-10 flex w-[50%] flex-col items-center justify-center gap-4 md:h-[100px] xl:h-[160px]">
        <h2 className="font-bold   uppercase text-white xl:text-2xl  ">
          {title}
        </h2>

        <Link
          to="/medicines"
          type="button"
          className="btn md:btn-sm 2xl:btn-md active:hover:transform-none active:focus:transform-none "
        >
          order now
        </Link>
      </div>
    </div>
  );
};

export default OfferBanner;
