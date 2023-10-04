import { Link, useParams } from "react-router-dom";
import img from "../../assets/images/check.png";

const PaymentSuccess = () => {
  const params = useParams();
  return (
    <div className="w-full">
      <div className="bg-card mx-5 my-5 flex flex-col items-center justify-center space-y-4 px-3 py-10 text-center lg:mx-auto lg:w-1/2">
        <img className="h-40 w-40" src={img} alt="" />
        <h3 className="text-xl font-semibold text-my-primary">
          Your payment has been received
        </h3>
        <div className="divider" />
        <p className="font-semibold">
          Your transaction ID:{" "}
          <span className="text-my-accent">{params.id}</span>
        </p>
        <div className="divider" />
        <h4>You will receive an order confirmation mail soon</h4>
        <div className="flex gap-3">
          <Link to="/dashboard" className="my-btn-outline">
            My Account
          </Link>
          <Link to="/" className="my-btn !rounded-full">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
