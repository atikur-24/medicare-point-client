import { Rating, StickerStar } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

const TopRatedMedicine = () => {
  const [topRatedMedi, setTopRatedMedi] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`${import.meta.env.VITE_API_URL}/topRated-medicines`, {
        cancelToken: source.token, // Pass the cancel token to the request
      })
      .then((res) => setTopRatedMedi(res?.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      source.cancel("Data request canceled by cleanup"); // Cancel the request with a message
    };
  }, []);

  return (
    <div className="rounded bg-white">
      <h2 className="border-l-4 border-my-primary py-3 pl-3 font-nunito text-lg font-medium uppercase text-title-color lg:text-xl lg:font-extrabold">
        Top Rated Medicine
      </h2>
      <div className="divide-y divide-gray-3 border-t border-gray-3 px-[18px] py-5">
        {topRatedMedi.slice(0, 5)?.map((medicine) => (
          <div className="flex py-3 " key={medicine._id}>
            <Link to={`/details/${medicine._id}`}>
              <figure>
                <img
                  className="h-[78px] w-[78px] rounded-sm object-cover"
                  src={medicine.image}
                  alt="medicine"
                />
              </figure>
            </Link>
            <div className="ml-6 space-y-2 lg:ml-[14px]">
              <Link to={`/details/${medicine._id}`}>
                <p className="text-xs font-medium text-gray-5">
                  {medicine.medicine_name}
                </p>
              </Link>
              <Rating
                style={{ maxWidth: 60 }}
                value={medicine.rating}
                readOnly
                itemStyles={customStyles}
              />
              <p className="inline-flex gap-1 text-xs">
                <span className="inline-flex items-center font-medium text-my-pink">
                  ৳{" "}
                  {medicine.discount > 0
                    ? (
                        medicine.price -
                        (medicine.price / 100) * medicine.discount
                      ).toFixed(2)
                    : medicine.price.toFixed(2)}
                </span>
                {medicine.discount > 0 && (
                  <span className="inline-flex items-center text-gray-4 line-through">
                    ৳ {medicine.price}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMedicine;
