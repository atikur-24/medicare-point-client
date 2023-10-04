import { Link } from "react-router-dom";

const PopularCategories = ({ category }) => {
  return (
    <Link
      to={`/labPage/${category._id}`}
      className="flex h-[200px] flex-col items-center justify-between rounded-lg border border-gray-3 bg-white py-4"
    >
      <figure className="rounded-full bg-[#f1f5f9] p-2">
        <img
          src={category?.image_url}
          alt="Category_photo"
          className=" h-20 w-20 rounded-md object-contain"
        />
      </figure>
      <div>
        <h2 className="mt-2 text-center font-semibold">
          {category?.category_name}
        </h2>
      </div>
    </Link>
  );
};

export default PopularCategories;
