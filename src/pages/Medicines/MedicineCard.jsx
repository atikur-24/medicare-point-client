// import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiCartAdd } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

// const customStyles = {
//     activeFillColor: "#FAAF00",
//     inactiveFillColor: "#DBDBDB",
// };

const MedicineCard = ({ medicine }) => {
  const { medicine_name, image, price, category, rating, discount } = medicine;
  return (
    <div className="card card-compact bg-white rounded-md hover:shadow-lg transition-shadow duration-200 relative">
      {discount && (
        <p className="bg-my-accent rounded-md py-1 px-2 text-xs font-medium txt-white absolute top-4 left-4">
          -{discount}% OFF
        </p>
      )}
      <figure>
        <img className="h-72 w-full object-cover" src={image} alt="medicine" />
      </figure>
      <div className="card-body space-y-2 lg:space-y-3">
        <div className="space-y-1">
          <p className="txt-gray-5 text-xs font-medium">
            {category}, personal care
          </p>
          <h2 className="text-[1.125rem] font-semibold title-color tracking-wide hover:underline inline-block hover:cursor-pointer">
            {medicine_name}
          </h2>
        </div>
        <div className="space-y-3">
          {/* <Rating style={{ maxWidth: 70 }} value={rating} readOnly /> */}
          <p className="inline-flex gap-1">
            <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">
              <TbCurrencyTaka /> {price}
            </span>
            <span className="font-semibold inline-flex items-center text-[16px] txt-gray-5 line-through">
              <TbCurrencyTaka /> 500
            </span>
          </p>
        </div>
        <button className="cart-btn " type="button">
          <BiCartAdd /> add to cart
        </button>
      </div>
    </div>
  );
};

export default MedicineCard;
