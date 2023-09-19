/* eslint-disable import/no-unresolved */
/* eslint-disable no-mixed-operators */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import AddCartButton from "../../../components/AddCartButton";
import ReqToStockButton from "../../../components/ReqToStockButton";
import useAuth from "../../../hooks/useAuth";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

const MediCard = ({ medicine }) => {
  const { user } = useAuth();
  const { _id, medicine_name, image, category, price, rating, discount, available_quantity, sellQuantity, pharmacist_email, order_quantity } = medicine || {};
  const cartMedicine = { medicine_Id: _id, medicine_name, image, price, discount, category: category?.label, quantity: 1, email: user?.email, order_quantity };
  const reqToStock = { reqByMedicine_Id: _id, medicine_name, image, request_count: 1, pharmacist_email };
  return (
    <div className="card card-compact bg-white rounded-md hover:shadow-md lg:hover:shadow-lg transition-shadow relative group h-fit">
      {discount > 0 && <p className="bg-my-accent z-10 rounded py-1 px-2 text-xs lg:font-medium text-white absolute top-4 left-4">-{discount}% OFF</p>}
      <div className="card-body space-y-1">
        <Link to={`/details/${_id}`}>
          <figure>
            <img className="md:h-[189px] md:w-[169px] xl:h-[172px] xl:w-[154px] object-cover cursor-pointer group-hover:scale-105 transition-all duration-300" src={image} alt="medicine" />
          </figure>
        </Link>
        <div className="">
          <p className="text-gray-5 text-[8px] lg:text-[11px]">{category?.label}</p>
          <Link to={`/details/${_id}`}>
            <h2 className="text-xs lg:text-sm font-medium text-gray-7 tracking-wide hover:underline inline-block hover:cursor-pointer">{medicine_name}</h2>
          </Link>
        </div>
        <div className="space-y-2">
          <Rating style={{ maxWidth: 60 }} value={rating} readOnly itemStyles={customStyles} />
          <p className="inline-flex gap-1">
            <span className="font-medium text-my-pink inline-flex items-center text-sm lg:text-lg">৳ {discount > 0 ? (price - (price / 100) * discount).toFixed(2) : price.toFixed(2)}</span>
            {discount > 0 && <span className="inline-flex items-center text-xs lg:text-[15px] text-gray-5 line-through">৳ {price}</span>}
          </p>
        </div>
        {available_quantity === sellQuantity ? <ReqToStockButton reqToStock={reqToStock} cls="req-btn-sm" /> : <AddCartButton cartMedicine={cartMedicine} cls="cart-btn-outline" />}
      </div>
    </div>
  );
};

export default MediCard;
