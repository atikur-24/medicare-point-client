const LabAddCard = ({ cart, handlerLabRemove }) => {
  const { price, test_name, remaining, discount, _id } = cart || {};

  return (
    <div className="card mt-4 w-full overflow-hidden border border-gray-3 shadow">
      <div className="card-body">
        <div className="sp space-y-2">
          <h2 className="card-title text-base">{test_name}</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-5 ">
            <span> BDT</span>{" "}
            {discount > 0 && <span className="line-through">৳{price}</span>}{" "}
            <span className="text-base text-my-primary ">৳{remaining}</span>
          </div>
          <div className="flex items-center justify-between">
            {discount > 0 ? (
              <div className="badge  badge-accent border-0 bg-my-primary py-0.5 font-bold text-white">
                {discount}% Off
              </div>
            ) : (
              <div />
            )}
            <div>
              <button
                onClick={() => handlerLabRemove(_id)}
                type="button"
                className="btn btn-error text-xs "
              >
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
