import queryS from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const Category = ({ category }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get("category");

  // console.log(value);

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
    // console.log(url);
  };

  console.log(value);

  return (
    <div onClick={handelClick} className="bg-white drop-shadow-2xl p-2 rounded-md cursor-pointer border border-gray-3">
      <img src={category?.image_url} alt="Category_photo" className=" rounded-md h-28" />
      <div>
        <h2 className="text-center font-semibold mt-2">{category?.category_name}</h2>
      </div>
    </div>
  );
};

export default Category;
