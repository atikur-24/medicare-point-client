import useLabCart from "../../../../hooks/useLabCart";

const LabOrder = () => {
  const [labCart] = useLabCart();
  let price = 0;
  let remaining = 0;

  for (const items of labCart) {
    remaining += items.remaining;
  }
  for (const items of labCart) {
    price += items.price;
  }

  const saveMoney = price - remaining;
  const copy = remaining + 50;

  return (
    <div className="max-w-md w-full">
      <div className=" rounded-lg border border-gray-3 bg-white p-6">
        <p className="font-semibold">TOTAL BOOK TESTS ({labCart.length || 0})</p>
      </div>
      <div className="border border-gray-3 bg-white p-6 mt-4 space-y-4 font-nunito">
        <p className="flex justify-between  font-semibold">
          <span>BDT. Total</span>
          <span>৳{price}</span>
        </p>
        <p className="flex justify-between font-semibold">
          <span>Lab Discount</span>
          <span>-৳{saveMoney}</span>
        </p>
        <hr className="border-x border-my-accent" />
        <p className="flex justify-between font-semibold">
          <span>Hard copy of reports</span>
          <span>৳50</span>
        </p>
        <hr className="border-x border-my-accent" />
        <p className="flex justify-between font-extrabold">
          <span>TO BE PAID</span>
          <span>৳{copy}</span>
        </p>
        {/* <p className="font-bold text-my-primary">Total Savings ৳{saveMoney}</p> */}
      </div>
    </div>
  );
};

export default LabOrder;
