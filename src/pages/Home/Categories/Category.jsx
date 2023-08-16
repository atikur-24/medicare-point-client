const Category = ({ category }) => {
  return (
    <div className="bg-white drop-shadow-2xl p-2 rounded-md cursor-pointer border border-gray-3">
      <img src={category?.image_url} alt="Category_photo" className=" rounded-md" />
      <div>
        <h2 className="text-center font-semibold mt-2">{category?.category_name}</h2>
      </div>
    </div>
  );
};

export default Category;
