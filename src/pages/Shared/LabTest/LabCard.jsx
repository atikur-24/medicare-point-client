const LabCard = ({ category }) => {
  return (
    <div className="border border-gray-3 w-60 p-4 rounded-2xl  ">
      <figure className="flex justify-center ">
        <img src={category?.image_url} alt="" className="bg-[#f1f5f9]  rounded-full p-2" />
      </figure>
      <div className="">
        <h2 className="text-xl font-sans font-bold h-16">{category?.category_name}</h2>
        <p className="text-sm text-[#10847e] font-bold font-nunito">20 tests includs</p>
      </div>
      <hr className="border border-[#10847e] my-2" />
      <div className="flex gap-2 items-center font-bold">
        <span>BDT </span>
        <span className="line-through">৳300</span>
        <span className="badge badge-accent text-white py-0.5">20% off</span>
      </div>
      <p className="font-bold my-2">৳200</p>
      <div className="">
        <button type="button" className="text-[#10847e] font-extrabold uppercase font-nunito ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default LabCard;
