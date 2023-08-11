import { TbCurrencyTaka } from "react-icons/tb";

const HSMedicine = ({ medicine }) => {
  return (
    <div className="card w-full bg-[#d9d9d9] shadow-xl border-[1px] border-slate-300 relative">
      <figure>
        <img src={medicine?.image_url} alt="Shoes" className=" h-36 w-full" />
      </figure>
      <div className="card-body  p-4">
        <h2 className="card-title">Name</h2>
        <p>Company Name</p>
        <div className="flex justify-center">
          <button type="button" className="flex items-center text-lg font-medium ">
            <TbCurrencyTaka className="text-2xl" /> 140
          </button>
        </div>
        <div className="card-actions ">
          <button className="w-full btn btn-sm bg-[#0000] hover:bg-[#0000] hover:bg-[#2d5f3b] border-[#3b784c] hover:text-white font-semibold" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HSMedicine;
