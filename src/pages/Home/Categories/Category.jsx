const Category = ({ category }) => {
  return (
    <div className="bgc-white drop-shadow-2xl p-2 rounded-md cursor-pointer border-[1px]">
      <img src={category?.image_url} alt="Category_photo" className=" rounded-md" />
      <div>
        <h2 className="text-center font-semibold mt-2">{category?.category_name}</h2>
      </div>
    </div>
  );
};

export default Category;
