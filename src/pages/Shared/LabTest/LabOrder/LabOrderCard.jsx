const LabOrderCard = ({ cart, handlerLabRemove }) => {
  const { price, test_name, remaining, discount, _id } = cart || {};
  return (
    <div className="card mt-4 w-full overflow-hidden border border-gray-3 shadow">
      <div className="card-body flex-row items-center justify-between p-4">
        <div className="space-y-2">
          <h2 className="card-title text-xs md:text-base">{test_name}</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-5 ">
            <span> BDT</span>{" "}
            {discount > 0 && <span className="line-through">৳{price}</span>}
            {discount > 0 && (
              <span className="badge badge-accent border-0 bg-my-primary py-0.5 text-white">
                {discount}% off
              </span>
            )}
            <span className="text-xs text-my-primary md:text-base ">
              ৳{remaining}
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() => handlerLabRemove(_id)}
            type="button"
            className="btn-error flex h-6 w-6 items-center justify-center  rounded-full  md:text-lg"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabOrderCard;
