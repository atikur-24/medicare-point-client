const LabOrderCard = ({ cart, handlerLabRemove }) => {
  const { price, test_name, remaining, discount, _id } = cart || {};
  return (
    <div className="card overflow-hidden w-full mt-4 shadow border border-gray-3">
      <div className="card-body flex-row justify-between items-center p-4">
        <div className="space-y-2">
          <h2 className="card-title text-xs md:text-base">{test_name}</h2>
          <div className="text-xs text-gray-5 font-bold flex items-center gap-2 ">
            <span> BDT</span> {discount > 0 && <span className="line-through">৳{price}</span>}
            {discount > 0 && <span className="badge bg-my-primary border-0 badge-accent text-white py-0.5">{discount}% off</span>}
            <span className="text-xs md:text-base text-my-primary ">৳{remaining}</span>
          </div>
        </div>
        <div>
          <button onClick={() => handlerLabRemove(_id)} type="button" className="w-6 h-6 flex items-center justify-center md:text-lg  btn-error  rounded-full">
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabOrderCard;
