import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";
import SectionTitle from "../../../components/SectionTitle";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("categories.json").then((res) => setCategories(res?.data));
  }, []);

  return (
    <div className="my-container">
      <SectionTitle title="Shop by Category" content="Discover essential healthcare solutions through our diverse medicine categories. It's  health-focused categories, ensuring easy access to the right products for your well-being. Explore now and prioritize your health journey with us." />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
