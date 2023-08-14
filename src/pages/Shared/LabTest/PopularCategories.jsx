const PopularCategories = ({ category }) => {
  return (
    <div className="bg-white border py-4 rounded-lg flex justify-between items-center flex-col h-[200px]">
      <figure className="bg-[#f1f5f9] p-2 rounded-full">
        <img src={category?.image_url} alt="Category_photo" className=" rounded-md w-20 h-20" />
      </figure>
      <div>
        <h2 className="text-center font-semibold mt-2">{category?.category_name}</h2>
      </div>
    </div>
  );
};

export default PopularCategories;
