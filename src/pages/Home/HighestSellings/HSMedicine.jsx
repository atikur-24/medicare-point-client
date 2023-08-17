import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiCartAdd } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

const HSMedicine = ({ medicine }) => {
  const discount = "20";

  return (
    // <div className="card w-full bg-[#d9d9d9] shadow-xl border border-gray-3 relative">
    //   <figure>
    //     <img src={medicine?.image_url} alt="Shoes" className=" h-36 w-full" />
    //   </figure>
    //   <div className="card-body  p-4">
    //     <h2 className="card-title">Name</h2>
    //     <p>Company Name</p>
    //     <div className="flex justify-center">
    //       <button type="button" className="flex items-center text-lg font-medium ">
    //         <TbCurrencyTaka className="text-2xl" /> 140
    //       </button>
    //     </div>
    //     <div className="card-actions ">
    //       <button className="w-full btn btn-sm bg-[#0000] hover:bg-[#0000] hover:bg-[#2d5f3b] border-[#3b784c] hover:text-white font-semibold" type="button">
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="card card-compact bg-white rounded-md hover:shadow-xl transition-shadow relative">
        {discount && <p className="bg-my-accent rounded-md py-1 px-2 text-xs font-medium text-white absolute top-4 left-4">-{discount}% OFF</p>}
        <figure>
          <img className="h-72 w-full object-cover rounded-t-md" src={medicine?.image_url} alt="medicine" />
        </figure>
        <div className="card-body space-y-2 lg:space-y-3">
          <div className="space-y-1">
            <p className="text-gray-5 text-xs font-medium">{medicine?.category_name}, personal care</p>
            <h2 className="text-[1.125rem] font-semibold title-color tracking-wide hover:underline inline-block hover:cursor-pointer">Medicine Nmae</h2>
          </div>
          <div className="space-y-3">
            <Rating style={{ maxWidth: 70 }} value={20} readOnly />
            <p className="inline-flex gap-1">
              <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">
                <TbCurrencyTaka /> {20}
              </span>
              <span className="font-semibold inline-flex items-center text-[16px] text-gray-5 line-through">
                <TbCurrencyTaka /> 170
              </span>
            </p>
          </div>
          <button className="cart-btn " type="button">
            <BiCartAdd /> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HSMedicine;
