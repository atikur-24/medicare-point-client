/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { addPrescriptionCardApi } from "../../../../Features/UploadPrescription/addPrescriptionCard";
import logo from "../../../../assets/Logo/logo.svg";

const UploadPrescription = () => {
  const [search, setSearch] = useState("");
  const [isUploading, setUploading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token source

    axios
      .get(
        `${import.meta.env.VITE_API_URL}/searchMedicinesByName?name=${search}`,
        {
          cancelToken: source.token, // Pass the cancel token to the request
        },
      )
      .then((res) => {
        setMedicines(res.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    // Cleanup function to cancel the request when the component unmounts
    return () => {
      source.cancel("Data request canceled by cleanup"); // Cancel the request with a message
    };
  }, [search]);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);
  };

  const handleAddToCart = (medicine) => {
    const { _id, medicine_name, image, price, discount, category } = medicine;
    const singleCardData = {
      email: params.email,
      medicine_Id: _id,
      medicine_name,
      image,
      price,
      discount,
      category: category.value,
      quantity: 1,
    };
    setCart([...cart, singleCardData]);
  };

  const handleRemoveToCart = (_id) => {
    const restMedicines = cart.filter((sm) => sm.medicine_Id !== _id);
    setCart(restMedicines);
  };

  const handleUploadToDB = (e) => {
    e.preventDefault();
    setUploading(true);
    dispatch(addPrescriptionCardApi({ cart, id })).then(() => {
      setCart([]);
      setSearch("");
      setUploading(false);
      toast.success("Added to cart");
      navigate("/dashboard/prescriptions");
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="pb-10">
      <div className="stats shadow">
        <div className="stat space-y-2">
          <div className=" stat-value text-2xl">Uploaded Prescription</div>
          <div className="stat-title">{params.email}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-3  p-1 xl:grid-cols-2">
        {/* search div  */}
        <div className="relative h-[80vh] rounded-2xl  border border-gray-3 bg-white p-2">
          <form className="">
            <input
              onChange={handleSearch}
              className="absolute  -top-px  left-0 z-20 w-full rounded-full bg-primary/10  p-2 px-4 outline-none placeholder:text-gray-5 lg:pr-5 "
              type="search"
              value={search}
              placeholder="Search Medicines"
              name="searchMedicines"
              id=""
            />
          </form>
          {search.length === 0 && (
            <div className="mt-10 flex justify-center">
              <img className="h-20 w-20" src={logo} alt="" />
            </div>
          )}

          <div
            className={`h-[75vh] overflow-y-scroll pt-10 ${
              search ? "block" : "hidden"
            }`}
          >
            {medicines.length === 0 && (
              <div className="mt-2 flex gap-2 rounded-xl  bg-my-pink/5  p-2 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 shrink-0 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>No results found. Please search by right name</span>
              </div>
            )}

            {medicines?.map((m) => (
              <div
                key={m?._id}
                className="my-2 flex items-center space-x-3 rounded-2xl border  border-gray-3 bg-white px-4 py-2 text-gray-6 md:gap-20 md:px-5"
              >
                <div
                  role="button"
                  tabIndex="0"
                  onClick={() => handleAddToCart(m)}
                  className="relative"
                >
                  {m?.discount > 0 && (
                    <div className="absolute -left-2 -top-2 z-10 flex rounded-md bg-my-accent p-1 text-xs font-medium text-white">
                      <p>{m?.discount}</p>
                      <p>% OFF</p>
                    </div>
                  )}
                  <img className="h-20 w-20" src={m?.image} alt="medicine" />
                </div>

                <div
                  role="button"
                  tabIndex="0"
                  onClick={() => handleAddToCart(m)}
                  type="button"
                >
                  <div className="relative space-y-1 p-2 ">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-5">
                        {m?.category?.label}, personal care
                      </p>
                      <h2 className="inline-block text-[1.125rem] font-semibold tracking-wide text-title-color">
                        {m?.medicine_name}
                      </h2>
                    </div>
                    <p className="inline-flex gap-1">
                      <span className="inline-flex items-center text-[1.125rem] font-bold text-my-pink">
                        ৳{" "}
                        {m?.discount > 0
                          ? (m.price - (m.price / 100) * m.discount).toFixed(2)
                          : m?.price?.toFixed(2)}
                      </span>
                      {m?.discount > 0 && (
                        <span className="inline-flex items-center text-[16px] font-medium text-gray-5 line-through">
                          ৳ {m.price}
                        </span>
                      )}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 md:flex-row" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* all div  */}
        <div className="rounded-2xl border border-gray-3 bg-white p-2">
          <div className="relative h-[75vh] overflow-y-scroll p-2">
            {cart.map((m) => (
              <div
                key={m.medicine_Id}
                className="my-2 items-center  justify-around gap-10 space-x-3 rounded-2xl border border-gray-3 px-1 text-gray-6 md:flex"
              >
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleRemoveToCart(m.medicine_Id)}
                    type="button"
                    className="rounded-full bg-lite px-3 py-1"
                  >
                    <span className="text-red-500">X</span>
                  </button>
                  <div className="relative bg-primary">
                    <img className="h-20 w-20" src={m.image} alt="medicine" />
                  </div>
                </div>

                <div className="">
                  <div className="relative space-y-1 p-2 ">
                    <div className="space-y-1">
                      <h2 className="inline-block text-[1.125rem] font-semibold tracking-wide text-title-color">
                        {m.medicine_name}
                      </h2>
                    </div>
                    <p className="inline-flex gap-1">
                      <span className="inline-flex items-center text-[1.125rem] font-bold text-my-pink">
                        ৳{" "}
                        {m.discount > 0
                          ? (m.price - (m.price / 100) * m.discount).toFixed(2)
                          : m.price.toFixed(2)}
                      </span>
                      {m.discount > 0 && (
                        <span className="inline-flex items-center text-[16px] font-medium text-gray-5 line-through">
                          ৳ {m.price}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex w-fit space-x-5 rounded-full border border-gray-3 px-5 py-3">
                  <button type="button" className="cursor-pointer">
                    <HiMinus />
                  </button>
                  <span className="text-gray-5">{m.quantity}</span>
                  <button type="button" className="cursor-pointer">
                    <HiPlus />
                  </button>
                </div>
              </div>
            ))}

            {cart.length === 0 && (
              <div className="mt-2 flex gap-2 rounded-xl  bg-my-pink/5  p-2 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 shrink-0 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>No medicines added yet!</span>
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <form
              className="flex flex-col gap-4 pr-4 xl:flex-row"
              onSubmit={handleUploadToDB}
            >
              <button
                className="my-btn btn w-full bg-my-accent/50 p-2 xl:w-1/2 "
                type="submit"
                name="searchMedicines"
                id=""
              >
                {isUploading ? "Uploading..." : "Upload"}
              </button>
              <button
                type="button"
                className="btn btn-error w-full xl:w-1/2"
                onClick={handleClearCart}
              >
                Clear
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
