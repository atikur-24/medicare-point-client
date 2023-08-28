import { FaAngleRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import sample from "../../../../assets/Lab/bloodsample.webp";
import gender from "../../../../assets/Lab/gender.webp";
import time from "../../../../assets/Lab/ic_rgt.webp";
import call from "../../../../assets/Lab/on time_1.webp";
import users from "../../../../assets/Lab/users.webp";
import CheckCard from "../CheckCard/CheckCard";

const LabBook = () => {
  const { test_name, price, image_url, discount, category_name } = useLoaderData();
//   console.log(test_name, price, discount, category);
  const price2 = (price * discount) / 100;
  const remaining = parseFloat(price - price2);
  return (
    <div>
      <div className="container mx-auto px-4 py-10 md:px-10">
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
                <span className="font-bold text-my-primary">Within 1 hours </span>
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
                <button type="button" className="my-btn w-full">
                  Book Now
                </button>
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
                  <img src={gender} alt={test_name} />
                </figure>
                <p className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-my-accent">Gender </span>
                  <span className="font-bold text-my-primary text-sm">Both</span>
                </p>
              </div>
              <div className="flex gap-4 items-center justify-center py-4">
                <figure>
                  <img src={users} alt={test_name} />
                </figure>
                <p className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-my-accent">Age group </span>
                  <span className="font-bold text-my-primary text-sm">Above 10 years</span>
                </p>
              </div>
            </div>
            <div className="card-body items-center text-center p-0 mt-6">
              <p className="text-justify text-black-2  tracking-wide">
                The liver function test (LFT) is a comprehensive package to assess the function of your liver by examining the levels of various enzymes and proteins in your blood. These enzymes,
                proteins, and bilirubin collectively determine the health of the liver. Any variation from the normal range of these enzymes can indicate a problem in your liver. On the basis of the
                results, your physician can start treatment or request further tests. Apollo 24|7’s liver function test price is extremely competitive and the brand utilises the latest technologies to
                assess the results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBook;
