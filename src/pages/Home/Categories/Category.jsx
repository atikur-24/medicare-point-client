/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
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
    // console.log(url);
  };

  // console.log(value);

  return (
    <div tabIndex={0} role="button" onClick={handelClick} className="bg-white drop-shadow-2xl p-2 rounded-md cursor-pointer border border-gray-3 flex justify-center items-center flex-col">
      <img src={category?.image_url} alt="Category_photo" className=" rounded-md h-28 object-cover" />
      <div>
        <h2 className="text-center font-semibold mt-2">{category?.category_name}</h2>
      </div>
    </div>
  );
};

export default Category;
