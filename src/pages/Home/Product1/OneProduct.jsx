import { TbCurrencyTaka } from "react-icons/tb";

const OnProduct = ({ product }) => {
  const isOutofStock = false;

  return (
    <div className="card w-full bg-[#d9d9d9] shadow-xl border-[1px] border-slate-300 relative">
      <figure>
        <img src={product?.image_url} alt="Shoes" className=" h-52 w-full" />
        {isOutofStock && (
          <small className=" text-white px-2 rounded-full top-2 right-4 bg-yellow-500 absolute">
            2% Off
          </small>
        )}
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
          {isOutofStock ? (
            <button
              className="w-full btn btn-sm bg-[#0000] hover:bg-[#0000] hover:bg-red-600 border-red-600 hover:text-white font-semibold"
              type="button"
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="w-full btn btn-sm bg-[#0000] hover:bg-[#0000] hover:bg-[#2d5f3b] border-[#3b784c] hover:text-white font-semibold"
              type="button"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnProduct;
