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
      { skipNull: true }
    );
    navigate(url);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={handelClick}
      className="bg-white my-10 relative py-6 rounded-xl cursor-pointer border-2 border-gray-3 flex justify-center items-center flex-col group hover:border-my-primary ease-in-out duration-500"
    >
      <h2 className="text-center font-semibold mt-2 border-gray-3 border-2 whitespace-nowrap absolute -top-5   text-sm group-hover:border-my-primary bg-white px-2 rounded-full ease-in-out duration-500">
        {category?.category_name}
      </h2>

      <img src={category?.image_url} alt="Category_photo" className=" rounded-md h-28 object-cover" />
    </div>
  );
};

export default Category;
