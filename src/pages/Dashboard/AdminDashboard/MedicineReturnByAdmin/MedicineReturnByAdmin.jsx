const MedicineReturnByAdmin = () => {
  return (
    <section className="bg-lite py-6 lg:py-10 px-4 lg:px-8">
      <div className=" space-y-2 mb-5">
        <h3 className="text-xl lg:text-3xl tracking-wider font-medium">Return Orders</h3>
      </div>
      <div className="flex border-b flex-col md:flex-row bg-white rounded-md gap-5 border-gray-3 md:items-center md:justify-between p-5">
        <h2 className="text-base lg:text-lg">No Delivered Product</h2>
        <button disabled type="button" className="text-white bg-red-500 opacity-50 py-1 px-2 rounded-md">
          Return
        </button>
      </div>
    </section>
  );
};

export default MedicineReturnByAdmin;
