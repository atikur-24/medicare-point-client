import { Link } from "react-router-dom";

const LabCard = ({ category }) => {
  const price2 = (category.price * category.discount) / 100;
  const remaining = parseFloat(category.price - price2);

  return (
    <Link to={`/labBook/${category._id}`}>
      <div className="w-52 rounded-2xl border border-gray-3 bg-white p-4  md:w-60 ">
        <figure className="flex justify-center ">
          <img
            src={category?.image_url}
            alt=""
            className="h-24  w-24 rounded-full bg-[#f1f5f9] object-contain p-2"
          />
        </figure>
        <div className="">
          <h2 className="h-12 font-sans text-sm font-bold md:h-20 md:text-xl">
            {category?.test_name}
          </h2>
        </div>
        <hr className="my-2 border border-my-primary" />
        <div className="flex items-center gap-2 text-xs font-bold md:text-base">
          <span>BDT </span>
          <span className={`${category.discount > 0 ? "line-through" : ""}`}>
            ৳{category.price}
          </span>
          {category.discount > 0 && (
            <span className="badge badge-accent border-0 bg-my-primary py-0.5 text-white">
              {category.discount}% off
            </span>
          )}
        </div>
        <p className="my-2 text-left text-xs font-bold text-my-pink md:text-base">
          ৳{remaining}
        </p>
        <div />

        <button
          type="button"
          className=" cart-btn btn-sm w-full rounded-full active:hover:transform-none active:focus:transform-none"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default LabCard;
