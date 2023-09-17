import { Link } from "react-router-dom";

const LabCard = ({ category }) => {
  const price2 = (category.price * category.discount) / 100;
  const remaining = parseFloat(category.price - price2);

  return (
    <Link to={`/labBook/${category._id}`}>
      <div className="border border-gray-3 w-52 md:w-60 p-4 rounded-2xl  bg-white ">
        <figure className="flex justify-center ">
          <img src={category?.image_url} alt="" className="bg-[#f1f5f9]  rounded-full p-2 w-24 h-24 object-contain" />
        </figure>
        <div className="">
          <h2 className="text-sm md:text-xl font-sans font-bold h-12 md:h-20">{category?.test_name}</h2>
        </div>
        <hr className="border border-my-primary my-2" />
        <div className="flex gap-2 items-center font-bold text-xs md:text-base">
          <span>BDT </span>
          <span className={`${category.discount > 0 ? "line-through" : ""}`}>৳{category.price}</span>
          {category.discount > 0 && <span className="badge bg-my-primary border-0 badge-accent text-white py-0.5">{category.discount}% off</span>}
        </div>
        <p className="text-xs md:text-base font-bold my-2 text-my-pink text-left">৳{remaining}</p>
        <div />

        <button type="button" className=" cart-btn w-full active:hover:transform-none active:focus:transform-none rounded-full btn-sm">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default LabCard;
