import { Link, useParams } from "react-router-dom";
import img from "../../assets/images/multiply.png";

const PaymentFailed = () => {
  const params = useParams();
  return (
    <div className="w-full">
      <div className="text-center lg:w-1/2 mx-5 px-3 lg:mx-auto flex flex-col justify-center items-center bg-card py-10 my-5 space-y-4">
        <img className="h-40 w-40" src={img} alt="" />
        <h3 className="text-xl font-semibold ">Unable to process payment</h3>
        <div className="divider" />
        <p className="font-semibold">
          Your transaction ID: <span className="text-my-accent">{params.id}</span>
        </p>
        <div className="divider" />
        <h4>We are sorry, we unable to process your payment. Please try again</h4>
        <div className="flex gap-3">
          <Link to="/medicineCarts" className="my-btn-outline">
            View Cart
          </Link>
          <Link to="/" className="my-btn !rounded-full">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
