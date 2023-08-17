const LabCard = ({ category }) => {
  const price = (category.price * category.discount) / 100;
  const remaining = parseFloat(category.price - price);

  return (
    <div className="border border-gray-3 w-60 p-4 rounded-2xl  bg-white ">
      <figure className="flex justify-center ">
        <img src={category?.image_url} alt="" className="bg-[#f1f5f9]  rounded-full p-2 w-24 h-24" />
      </figure>
      <div className="">
        <h2 className="text-xl font-sans font-bold h-20">{category?.test_name}</h2>
      </div>
      <hr className="border border-my-primary my-2" />
      <div className="flex gap-2 items-center font-bold">
        <span>BDT </span>
        <span className={`${category.discount > 0 ? "line-through" : ""}`}>৳{category.price}</span>
        {category.discount > 0 && <span className="badge bg-my-primary border-0 badge-accent text-white py-0.5">{category.discount}% off</span>}
      </div>
      <p className="font-bold my-2 text-my-pink">৳{remaining}</p>
      <div className="">
        <button type="button" className="btn cart-btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default LabCard;
