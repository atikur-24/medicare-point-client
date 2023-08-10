import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import axios from "axios";
import { TbCurrencyTaka } from "react-icons/tb";

const Product1 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("categories.json").then((res) => setProducts(res.data));
  }, []);
  console.log(products);

  return (
    <div className="nav-container my-10">
      <Heading title={"Product 1"} center={true} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product, index) => (
          <div key={index}>
            <div className="card w-full bg-[#d9d9d9] shadow-xl border-[1px] border-slate-300">
              <figure>
                <img
                  src={product?.image_url}
                  alt="Shoes"
                  className=" h-52 w-full"
                />
              </figure>
              <div className="card-body  p-4">
                <h2 className="card-title">Name</h2>
                <p>Company Name</p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="flex items-center text-lg font-medium "
                  >
                    <TbCurrencyTaka className="text-2xl" /> 140
                  </button>
                </div>
                <div className="card-actions ">
                  <button
                    className="w-full btn btn-sm bg-[#0000] hover:bg-[#0000] hover:bg-[#2d5f3b] border-[#3b784c] hover:text-white font-semibold"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product1;
