const LabAddCard = ({ cart, handlerLabRemove }) => {
  const { price, test_name, remaining, discount, _id } = cart || {};

  return (
    <div className="card overflow-hidden w-full mt-4 shadow border border-gray-3">
      <div className="card-body">
        <div className="space-y-2 sp">
          <h2 className="card-title text-base">{test_name}</h2>
          <div className="text-xs text-gray-5 font-bold flex items-center gap-2 ">
            <span> BDT</span> {discount > 0 && <span className="line-through">৳{price}</span>} <span className="text-base text-my-primary ">৳{remaining}</span>
          </div>
          <div className="flex items-center justify-between">
            {discount > 0 ? <div className="badge  bg-my-primary border-0 badge-accent text-white py-0.5 font-bold">{discount}% Off</div> : <div />}
            <div>
              <button onClick={() => handlerLabRemove(_id)} type="button" className="btn text-xs btn-error ">
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
