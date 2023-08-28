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
    <div className="">
      <div className=" rounded-lg border border-gray-3 bg-white p-6">
        <form className="flex gap-8" action="">
          <input placeholder="Enter Coupon code" className="border-b border-gray-5 outline-none w-full max-w-md" type="text" name="" id="" />
          <input className="my-btn" type="submit" value="Apply" />
        </form>
      </div>
      <div className=" mt-4 border border-gray-3 bg-white p-6 space-y-4 font-nunito">
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
      <div className="text-center mt-4">
        <button type="button" className="my-btn">
          Payment
        </button>
      </div>
    </div>
  );
};

export default LabOrder;
