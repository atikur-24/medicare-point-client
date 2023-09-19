import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import HtmlParser from "react-html-parser";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDetailData } from "../../../../Features/AllMedicines/detailData";
import sample from "../../../../assets/Lab/bloodsample.webp";
import gen from "../../../../assets/Lab/gender.webp";
import time from "../../../../assets/Lab/ic_rgt.webp";
import call from "../../../../assets/Lab/on time_1.webp";
import users from "../../../../assets/Lab/users.webp";
import useAuth from "../../../../hooks/useAuth";
import useLabCart from "../../../../hooks/useLabCart";
import CheckCard from "../CheckCard/CheckCard";
import LabButton from "../LabButton/LabButton";

const LabBook = () => {
  const params = useParams();
  const api = `labAllItems/${params?.id}`;

  const { data, isLoading } = useSelector((state) => state.detailData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailData(api));
  }, [dispatch, api]);

  const { test_name, price, image_url, discount, category_name, _id, gender, age, labTestDetails, report } = data;
  const [labCart] = useLabCart();
  const [isBook, setIsBook] = useState({});
  const { user } = useAuth();
  const price2 = (price * discount) / 100;
  const remaining = parseFloat(price - price2);
  const labAddCart = { lab_id: _id, test_name, price, remaining, discount, email: user?.email };
  // Todo
  useEffect(() => {
    const isExisting = labCart.find((lab) => lab.lab_id === _id);
    setIsBook(isExisting);
  }, [_id, labCart]);

  return (
    <div>
      <div className="container mx-auto px-4 py-10 md:px-10">
        <Helmet>
          <title>{`MediCare Point - ${test_name} `}</title>
        </Helmet>
        <CheckCard />
        <div className="flex flex-wrap gap-2 items-center mb-4 md:text-xl font-bold font-nunito">
          <Link className="hover:text-my-primary" to="/">
            Home
          </Link>
          <FaAngleRight />
          <Link className="hover:text-my-primary " to="/lab-test">
            Lab Test
          </Link>
          <FaAngleRight /> {test_name}
        </div>
        <hr className="border border-gray-3 mb-8" />
        <div className="mt-8">
          <img src={call} alt="" className="w-full" />
        </div>
        <div className="flex mt-4 gap-6 md:flex-row flex-col justify-between max-w-5xl mx-auto">
          <div className="card relative rounded shadow-xl border border-gray-3 md:w-96  divide-y space-y-2 divide-gray-3">
            <h2 className="text-center lg:text-2xl font-bold mt-4 text-my-primary">{test_name}</h2>
            <figure className="px-10 pt-10">
              <img src={image_url} alt={test_name} className="rounded-xl" />
            </figure>
            <div className="flex gap-4 items-center justify-center py-4">
              <img src={time} alt={test_name} className="w-10 h-10" />
              <p className="flex flex-col text-left">
                <span className="text-sm font-semibold text-my-accent">Get reports </span>
                <span className="font-bold text-my-primary">Within {report} hours </span>
              </p>
            </div>
            <div className="card-body items-center   ">
              <div className="flex gap-2 items-center font-bold">
                <span>BDT </span>
                <span className={`${discount > 0 ? "line-through" : ""}`}>৳{price}</span>
                {discount > 0 && <span className="badge bg-my-primary border-0 badge-accent text-white py-0.5">{discount}% off</span>}
              </div>
              <p className="font-bold my-2 text-my-pink mb-8">৳{remaining}</p>
              <div className=" absolute bottom-0 w-full">
                {isBook ? (
                  <Link to="/labPayment" className="my-btn w-full">
                    Proceed to checkout
                  </Link>
                ) : (
                  <LabButton labAddCart={labAddCart} />
                )}
              </div>
            </div>
          </div>
          <div className="card border border-gray-3 md:w-[60%] p-6">
            <h2 className="card-title ">About</h2>
            <div className="flex flex-wrap md:justify-between gap-8">
              <div className="flex gap-4 items-center justify-center py-4">
                <figure>
                  <img src={sample} alt={test_name} />
                </figure>
                <p className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-my-accent">Sample </span>
                  <span className="font-bold text-my-primary text-sm">{category_name}</span>
                </p>
              </div>
              <div className="flex gap-4 items-center justify-center py-4">
                <figure>
                  <img src={gen} alt={test_name} />
                </figure>
                <p className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-my-accent">Gender </span>
                  <span className="font-bold text-my-primary text-sm">{gender}</span>
                </p>
              </div>
              <div className="flex gap-4 items-center justify-center py-4">
                <figure>
                  <img src={users} alt={test_name} />
                </figure>
                <p className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-my-accent">Age group </span>
                  <span className="font-bold text-my-primary text-sm">Above {age} years</span>
                </p>
              </div>
            </div>
            <div className=" items-center text-center p-0 mt-6">
              <div className="text-justify text-black-2  tracking-wide">{HtmlParser(labTestDetails)}</div>
              <ul className="pl-6 mt-6 text-start text-black-2  tracking-wide list-disc">
                <li>Age of the patient</li>
                <li>Existing conditions </li>
                <li>Estimation of future medical problems</li>
                <li>Affect of lifestyle on the health </li>
                <li>Routine screenings </li>
                <li>Medical history </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBook;
