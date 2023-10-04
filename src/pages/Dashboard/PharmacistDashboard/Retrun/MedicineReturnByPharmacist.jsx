const MedicineReturnByPharmacist = () => {
  return (
    <section className="py-6 lg:py-10 ">
      <div className=" mb-5 space-y-2">
        <div className="mb-8  flex">
          <div className="stats shadow">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Return Order
              </div>
              <div className="stat-value text-my-primary">0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-md border-b border-gray-3 bg-white p-5 md:flex-row md:items-center md:justify-between">
        <h2 className="text-base lg:text-lg">No Return Product</h2>
        <button
          disabled
          type="button"
          className="rounded-md bg-red-500 px-2 py-1 text-white opacity-50"
        >
          Return
        </button>
      </div>
    </section>
  );
};

export default MedicineReturnByPharmacist;
