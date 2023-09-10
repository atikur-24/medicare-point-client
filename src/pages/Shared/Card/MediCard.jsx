/* eslint-disable import/no-unresolved */
/* eslint-disable no-mixed-operators */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import AddCartButton from "../../../components/AddCartButton";
import useAuth from "../../../hooks/useAuth";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

const MediCard = ({ medicine }) => {
  const { user } = useAuth();
  const { _id, medicine_name, image, category, price, rating, discount } = medicine || {};
  const cartMedicine = { medicine_Id: _id, medicine_name, image, price, discount, category: category?.label, quantity: 1, email: user?.email };

  return (
    <div className="card card-compact bg-white rounded-md hover:shadow-lg transition-shadow relative group h-fit">
      {discount > 0 && <p className="bg-my-accent z-10 rounded-md py-1 px-2 text-xs font-medium text-white absolute top-4 left-4">-{discount}% OFF</p>}
      <div className="card-body space-y-2 lg:space-y-3">
        <Link to={`/details/${_id}`}>
          <figure>
            <img className="h-72 w-full object-cover cursor-pointer group-hover:scale-105 transition-all duration-300" src={image} alt="medicine" />
          </figure>
        </Link>
        <div className="space-y-1">
          <p className="text-gray-5 text-xs font-medium">{category?.label}</p>
          <Link to={`/details/${_id}`}>
            <h2 className="text-[1.125rem] font-semibold text-title-color tracking-wide hover:underline inline-block hover:cursor-pointer">{medicine_name}</h2>
          </Link>
        </div>
        <div className="space-y-3">
          <Rating style={{ maxWidth: 70 }} value={rating} readOnly itemStyles={customStyles} />
          <p className="inline-flex gap-1">
            <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">৳ {discount > 0 ? (price - (price / 100) * discount).toFixed(2) : price.toFixed(2)}</span>
            {discount > 0 && <span className="font-medium inline-flex items-center text-[16px] text-gray-5 line-through">৳ {price}</span>}
          </p>
        </div>
        <AddCartButton cartMedicine={cartMedicine} cls="cart-btn-outline" />
      </div>
    </div>
  );
};

export default MediCard;
