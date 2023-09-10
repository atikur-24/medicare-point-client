import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const HealthTipsDetails = () => {
  const diseaseDetails = useLoaderData();
  // const { image, title, content_details, published_date, topic } = healthArticles;

  return (
    <div className="my-8 p-8">
      <div className="container">
        <h1 className="text-4xl text-center font-bold my-4 md:hidden">{diseaseDetails.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center space-x-2 md:space-y-6">
          <img className="h-80 mx-auto my-2 md:my-8" src={diseaseDetails.image} alt="" />
          <div className="space-y-6">
            <h1 className="text-4xl text-center font-bold my-4 hidden md:block">{diseaseDetails.name}</h1>
            <p className="text-center">
              <span className="font-semibold text-center">Type of the disease:</span>
              {diseaseDetails.type}
            </p>
            <p className="text-center mb-6">
              <span className="font-semibold text-center">Cause of the disease:</span>
              {diseaseDetails.cause}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-8 ">
          <div className="shadow-xl h-full p-4 bgc-white border border-gray-3 hover:bg-[#d0f1f0] duration-500">
            <h3 className="text-2xl text-center font-semibold my-4">How To Prevent?</h3>
            <p>{diseaseDetails.prevention}</p>
          </div>
          <div className="shadow-xl h-full p-4 bgc-white border border-gray-3 hover:bg-[#d0f1f0] duration-500">
            <h3 className="text-2xl text-center font-semibold my-4 ">What's the cure?</h3>
            <p>{diseaseDetails.cure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTipsDetails;
