import { useEffect } from "react";
import HtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailData } from "../../../../Features/AllMedicines/detailData";
import Loader from "../../../../components/Loader";

const ViewDetailsMedicine = () => {
  const params = useParams();

  const api = `medicines/details/${params?.id}`;
  const { data, isLoading } = useSelector((state) => state.detailData);

  const { medicine_name, image, available_quantity, brand, category, price, discount, date, status, sellQuantity, medicine_description, _id } = data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailData(api));
  }, [dispatch, api]);

  return (
    <div className="">
      {isLoading ? (
        <Loader spinner />
      ) : (
        <div className="bg-white p-10 rounded-md ">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full">
              <p className="font-semibold">
                Status: <span className={`font-semibold capitalize ${status === "approved" ? "badge badge-success" : ""} ${status === "pending" ? "badge-warning" : ""} ${status === "denied" ? "badge badge-error" : ""}`}>{status}</span>
              </p>
              <img className="w-full mt-5 shadow-md border-dashed border-[1px] rounded-md border-my-primary" src={image} alt="medicine" />
              <div className="mt-8">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    {/* <p className="flex items-center gap-3 font-semibold">
                        Rating: <ReactStarsRating isEdit={false} size={20} className="flex" value={rating} />
                      </p> */}
                    <p className="font-semibold">
                      Brand Name: <span className="font-normal">{brand}</span>
                    </p>
                    <p className="font-semibold">
                      Price: <span className="font-normal text-[#FFA500]">{price} ৳</span>
                    </p>
                    <p className="font-semibold">
                      Upload Date: <span className="font-normal">{date}</span>
                    </p>
                    <p className="font-semibold">
                      Medicine Status: <span className={`font-semibold ${status === "approved" ? "text-my-accent" : ""} ${status === "pending" ? "text-yellow-500" : ""} ${status === "denied" ? "text-red-500" : ""}`}>{status}</span>
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold">
                      available Quantity: <span className="text-my-accent">{available_quantity}</span>
                    </div>
                    <p className="font-semibold">
                      Category: <span className="font-normal">{category?.label}</span>
                    </p>
                    <p className="font-semibold">
                      Discount: <span className="font-normal">{discount}%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-wide">Medicine Details </h2>
                <div className="mt-5 space-y-2">
                  <p>Medicine Name: {medicine_name}</p>
                  <p>Medicine Price: {price}</p>
                  <p>Medicine Discount: {discount} % </p>
                  <p>Total Quantity: {available_quantity}</p>
                  <p>Total Sell: {sellQuantity}</p>
                  <p>Total Earning: {discount > 0 ? (price - (price / 100) * discount).toFixed(2) : price.toFixed(2) * sellQuantity}</p>
                  <p>Medicine Name: {medicine_name}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5  border-gray-4" />
          <div>
            <h2 className="text-xl font-bold">Medicine Description</h2>
            <div>{HtmlParser(medicine_description)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetailsMedicine;
