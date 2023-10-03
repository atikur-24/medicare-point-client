const MedicineReturnByAdmin = () => {
  return (
    <section className="py-6 lg:py-10 ">
      <div className=" space-y-2 mb-5">
        <div className="flex  mb-8">
          <div className="stats shadow">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title text-title-color font-nunito font-bold uppercase ">Return Order</div>
              <div className="stat-value text-my-primary">0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-b flex-col md:flex-row bg-white rounded-md gap-5 border-gray-3 md:items-center md:justify-between p-5">
        <h2 className="text-base lg:text-lg">No Return Product</h2>
        <button disabled type="button" className="text-white bg-red-500 opacity-50 py-1 px-2 rounded-md">
          Return
        </button>
      </div>
    </section>
  );
};

export default MedicineReturnByAdmin;
