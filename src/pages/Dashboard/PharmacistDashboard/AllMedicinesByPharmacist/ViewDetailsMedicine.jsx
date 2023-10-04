import { Rating, StickerStar } from "@smastrom/react-rating";
import { useEffect } from "react";
import HtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailData } from "../../../../Features/AllMedicines/detailData";
import Loader from "../../../../components/Loader";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

const ViewDetailsMedicine = () => {
  const params = useParams();

  const api = `medicines/details/${params?.id}`;
  const { data, isLoading } = useSelector((state) => state.detailData);

  const {
    medicine_name,
    image,
    available_quantity,
    brand,
    category,
    price,
    feedback,
    updatedDate,
    rating,
    discount,
    date,
    status,
    sellQuantity,
    medicine_description,
    order_quantity,
    _id,
  } = data || {};
  const totalPrice = (price - (price / 100) * discount)?.toFixed(2);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailData(api));
  }, [dispatch, api]);

  return (
    <div>
      {isLoading ? (
        <Loader spinner />
      ) : (
        <div className="rounded-md bg-white p-10 ">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="w-full">
              <p className="font-semibold">
                Status:{" "}
                <span
                  className={`font-semibold capitalize ${
                    status === "approved" ? "badge badge-success" : ""
                  } ${status === "pending" ? "badge-warning" : ""} ${
                    status === "denied" ? "badge badge-error" : ""
                  }`}
                >
                  {status}
                </span>
              </p>
              <img
                className="mt-5 w-full rounded-md border-[1px] border-dashed border-my-primary shadow-md"
                src={image}
                alt="medicine"
              />
              <div className="mt-4 space-y-2 text-black-2 lg:mt-8 lg:space-y-3 lg:text-lg">
                <p>
                  Medicine Code: <span className="text-gray-5">{_id}</span>
                </p>
                <p>
                  Store Date: <span className="text-gray-5">{date}</span>
                </p>
                <p>
                  Update Date:{" "}
                  <span className="text-gray-5">{updatedDate}</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-my-primary">
                  Medicine Details:
                </h2>
                <div className="mt-2 space-y-2 text-black-2 lg:space-y-3 lg:text-lg">
                  <p>
                    Medicine Name:{" "}
                    <span className="text-gray-5">{medicine_name}</span>
                  </p>
                  <p>
                    Medicine Name:{" "}
                    <span className="text-gray-5">{category?.label}</span>
                  </p>
                  <p>
                    Brand Name: <span className="text-gray-5">{brand}</span>
                  </p>
                  <p>
                    Original Price:{" "}
                    <span className="text-gray-5">৳ {price}</span>
                  </p>
                  <p>
                    Discount:{" "}
                    <span className="text-gray-5">
                      {discount > 0 ? discount : 0}%
                    </span>
                  </p>
                  <p>
                    Selling Price:{" "}
                    <span className="text-gray-5">৳ {totalPrice}</span>
                  </p>
                  <p>
                    Initial Quantity:{" "}
                    <span className="text-gray-5">{available_quantity}</span>
                  </p>
                  <p>
                    Available Quantity:{" "}
                    <span className="text-gray-5">
                      {available_quantity - sellQuantity}
                    </span>
                  </p>
                  <p>
                    Total Sell:{" "}
                    <span className="font-medium text-my-accent">
                      {sellQuantity} {order_quantity}
                    </span>
                  </p>
                  <p>
                    Total Earning:{" "}
                    <span className="font-medium text-my-pink">
                      ৳{" "}
                      {discount > 0
                        ? totalPrice * sellQuantity
                        : price * sellQuantity}
                    </span>
                  </p>
                  <p className="inline-flex items-center gap-2">
                    Rating:{" "}
                    <Rating
                      style={{ maxWidth: 70 }}
                      value={rating}
                      readOnly
                      itemStyles={customStyles}
                    />{" "}
                    <span className="text-sm text-gray-5">({rating})</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 border border-gray-3" />
          <div>
            <h2 className="text-xl font-bold">Medicine Description</h2>
            <div>{HtmlParser(medicine_description)}</div>
          </div>
          <div className="my-5">
            <h2 className="text-xl font-bold">Admin Feedback:</h2>
            <div className="text-gray-5">
              {feedback || "NO Feedback from Admin Panel"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetailsMedicine;
