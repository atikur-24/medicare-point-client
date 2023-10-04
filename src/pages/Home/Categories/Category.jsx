/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import queryS from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const Category = ({ category }) => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();

  const handelClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryS.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: category?.category,
    };

    const url = queryS.stringifyUrl(
      {
        url: "/medicines",
        query: updatedQuery,
      },
      { skipNull: true },
    );
    navigate(url);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={handelClick}
      className="group relative my-10 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-3 bg-white py-6 duration-500 ease-in-out hover:border-my-primary"
    >
      <h2 className="absolute -top-5 mt-2 whitespace-nowrap rounded-full border-2 border-gray-3 bg-white   px-2 text-center text-sm font-semibold duration-500 ease-in-out group-hover:border-my-primary">
        {category?.category_name}
      </h2>

      <img
        src={category?.image_url}
        alt="Category_photo"
        className=" h-28 rounded-md object-cover"
      />
    </div>
  );
};

export default Category;
