const LabAddCard = () => {
  return (
    <div className="card overflow-hidden w-full mt-4 shadow border border-gray-3">
      <div className="card-body">
        <div className="space-y-2 sp">
          <h2 className="card-title text-base">Molecular Tests (PCR Tests)</h2>
          <div className="text-xs text-gray-5 font-bold flex items-center gap-2 ">
            <span> BDT</span> <span className="line-through">৳527</span> <span className="text-base text-my-primary ">₹395</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="badge  bg-my-primary border-0 badge-accent text-white py-0.5 font-bold">20% Off</div>

            <div>
              <button type="button" className="btn text-xs btn-error">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabAddCard;
