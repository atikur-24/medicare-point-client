import axios from "axios";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import moduleName from "../../../assets/images/AD/medicine.png";
import Heading from "../../Shared/Heading/Heading";
import OnProduct from "./OneProduct";

const OneProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("categories.json").then((res) => setProducts(res.data));
  }, []);
  // console.log(products);

  return (
    <div className="nav-container my-10">
      <Heading title="Product 1" center />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product, index) => (
          <OnProduct key={index} product={product} />
        ))}
      </div>

      <div className="bg-[#d9d9d9] w-full h-40 mt-16 rounded-xl px-10">
        <div className=" flex justify-between items-center h-full">
          <div>
            <button type="button" className="btn flex items-center bap-2">
              View all
              <span className="text-xl">
                <FiArrowRight />
              </span>
            </button>
          </div>
          <div>
            <h2 className="text-4xl font-bold">Product Name</h2>
          </div>
          <div>
            <img className=" w-52 rounded-md" src={moduleName} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProducts;
