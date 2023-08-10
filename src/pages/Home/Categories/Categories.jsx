import axios from "axios";
import { useEffect, useState } from "react";

import Heading from "../../Shared/Heading/Heading";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("categories.json").then((res) => setCategories(res?.data));
  }, []);
  // console.log(categories);

  return (
    <div className="my-container">
      <Heading title="Shop by Category" center />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
