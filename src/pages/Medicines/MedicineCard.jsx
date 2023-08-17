/* eslint-disable no-mixed-operators */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiCartAdd } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const customStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#fbb614",
    inactiveFillColor: "#DEE1E6",
};

const MedicineCard = ({ medicine }) => {
  const { _id, medicine_name, image, price, category, rating, discount } = medicine || {};
  return (
    <div className="card card-compact bg-white rounded-md hover:shadow-lg transition-shadow relative group">
      {discount > 0 && (
        <p className="bg-my-accent z-10 rounded-md py-1 px-2 text-xs font-medium text-white absolute top-4 left-4">
          -{discount}% OFF
        </p>
      )}
      <div className="card-body space-y-2 lg:space-y-3">
        <Link to={`/details/${_id}`}>
          <figure><img className="h-72 w-full object-cover cursor-pointer group-hover:scale-105 transition-all duration-300" src={image} alt="medicine" /></figure>
        </Link>
        <div className="space-y-1">
          <p className="text-gray-5 text-xs font-medium">
            {category}, personal care
          </p>
          <h2 className="text-[1.125rem] font-semibold text-title-color tracking-wide hover:underline inline-block hover:cursor-pointer">
            {medicine_name}
          </h2>
        </div>
        <div className="space-y-3">
          <Rating style={{ maxWidth: 70 }} value={rating} readOnly itemStyles={customStyles} />
          <p className="inline-flex gap-1">
            <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">
              <TbCurrencyTaka /> {discount > 0 ? (price - (price / 100 * discount)).toFixed(2) : (price).toFixed(2)}
            </span>
            { discount > 0 && (
              <span className="font-medium inline-flex items-center text-[16px] text-gray-5 line-through">
                <TbCurrencyTaka /> {price}
              </span>
            )}
          </p>
        </div>
        <button className="cart-btn-outline" type="button">
          <BiCartAdd /> add to cart
        </button>
      </div>
    </div>
  );
};

export default MedicineCard;
