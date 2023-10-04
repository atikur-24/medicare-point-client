/* eslint-disable import/no-unresolved */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import moment from "moment/moment";
import { useCallback, useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import {
  BiLogoFacebook,
  BiLogoGooglePlus,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTumblr,
  BiLogoTwitter,
  BiSolidEnvelope,
} from "react-icons/bi";
import { HiMinus, HiOutlineChevronRight, HiPlus } from "react-icons/hi";
import ReactImageMagnify from "react-image-magnify";
import { Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import AddCartButton from "../../components/AddCartButton";
import Loader from "../../components/Loader";
import ReqToStockButton from "../../components/ReqToStockButton";
import useAuth from "../../hooks/useAuth";
import NewsLetter from "../Shared/medicine/NewsLetter";
import WorkInfo from "../Shared/medicine/WorkInfo";
import MedicineReviews from "./MedicineReviews";
import RelatedMedicines from "./RelatedMedicines";

const MedicineDetails = () => {
  const [medicine, setMedicine] = useState({});
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [rating1, setRating] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isReview, setReview] = useState(0);

  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/medicines/details/${params?.id}`)
      .then((res) => {
        setMedicine(res.data);
        setLoading(false);
      });
  }, [params?.id, isReview]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-5 md:py-8 lg:px-2 lg:pt-10">
        <Loader spinner />
      </div>
    );
  }

  const customStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#fbb614",
    inactiveFillColor: "#DEE1E6",
  };

  const {
    _id,
    medicine_name,
    image,
    price,
    sellQuantity,
    available_quantity,
    medicine_summary,
    medicine_description,
    tags,
    rating,
    feature_with_details,
    category,
    allRatings,
    discount,
    pharmacist_email,
    order_quantity,
  } = medicine || {};
  const cartMedicine = {
    medicine_Id: _id,
    medicine_name,
    image,
    price,
    discount,
    quantity,
    category: category?.label,
    email: user?.email,
    order_quantity,
  };
  const reqToStock = {
    reqByMedicine_Id: _id,
    medicine_name,
    image,
    request_count: 1,
    pharmacist_email,
  };
  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMessage = form.reviewMessage.value;
    const date = moment().format("Do MMM YYYY");

    const newReview = {
      name: user?.displayName,
      email: user.email,
      date,
      rating: rating1,
      reviewMessage,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/reviews/${_id}`, newReview)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          form.reset();
          setRating(0);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Review added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setReview((review) => review + 1);
        }
      });
  };

  return (
    <section className="bg-lite">
      <div className="container mx-auto px-4 py-5 md:py-8 lg:px-2 lg:pt-10">
        <p className="inline-flex items-center gap-1 font-medium tracking-wider text-black-2 md:font-semibold lg:text-lg">
          <Link
            to="/"
            className="cursor-pointer transition-colors hover:text-my-accent"
          >
            Home
          </Link>
          <HiOutlineChevronRight />
          <Link
            to="/medicines"
            className="cursor-pointer transition-colors hover:text-my-accent"
          >
            Medicines
          </Link>
          <HiOutlineChevronRight />
          <span>Details</span>
        </p>
      </div>
      {/* product details */}
      <div className="my-container rounded-md bg-white">
        <div className="gap-3 xl:flex">
          <div className="h-96 xl:w-1/2">
            <ReactImageMagnify
              className="z-50"
              {...{
                smallImage: {
                  alt: "medicine image",
                  isFluidWidth: true,
                  src: image,
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </div>
          {/* <div className="xl:w-1/2">
            <img className="h-96 mx-auto" src={image} alt="medicine" />
          </div> */}
          <div className="space-y-5 lg:space-y-7 xl:w-1/2">
            <div className="space-y-1">
              {discount > 0 && (
                <p className="w-fit rounded-md bg-my-accent px-2 py-1 text-xs font-medium text-white">
                  -{discount}% OFF
                </p>
              )}
              <h3 className="text-xl font-medium tracking-wider text-title-color lg:text-3xl lg:font-semibold">
                {medicine_name}
              </h3>
            </div>
            <Rating
              style={{ maxWidth: 80 }}
              value={rating}
              readOnly
              itemStyles={customStyles}
            />
            <p className="inline-flex gap-1">
              <span className="inline-flex items-center text-lg font-semibold text-my-pink md:text-xl lg:text-2xl lg:font-bold">
                ৳{" "}
                {discount > 0
                  ? (price - (price / 100) * discount)?.toFixed(2)
                  : price?.toFixed(2)}
              </span>
              {discount > 0 && (
                <span className="inline-flex items-center text-base font-medium text-gray-5 line-through lg:text-xl">
                  ৳ {price}
                </span>
              )}
            </p>
            <p className="text-sm font-medium tracking-wide text-black-2 lg:text-base">
              Availability:{" "}
              {available_quantity === sellQuantity ? (
                <span className="text-red-500">Out of Stock</span>
              ) : (
                <span className="text-my-primary">In Stock</span>
              )}
            </p>
            <p className="w-full text-justify text-sm text-gray-4 lg:text-base lg:leading-7">
              {medicine_summary}
            </p>
            <div className="flex items-center justify-around rounded-md border border-gray-3 px-3 py-5 font-semibold">
              <span className="text-base tracking-wide lg:text-lg">
                Quantity:
              </span>
              <div className="flex w-fit items-center justify-between gap-5 rounded-full border border-gray-3 px-5 py-3">
                <button
                  type="button"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                  className="cursor-no-drop"
                >
                  <HiMinus />
                </button>
                <span className="text-gray-5">{quantity}</span>
                <button
                  type="button"
                  disabled={quantity >= 5}
                  onClick={() => setQuantity(quantity + 1)}
                  className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}
                >
                  <HiPlus />
                </button>
              </div>
              {available_quantity === sellQuantity ? (
                <ReqToStockButton reqToStock={reqToStock} cls="req-btn-lg" />
              ) : (
                <AddCartButton cartMedicine={cartMedicine} cls="cart-btn" />
              )}
            </div>
            <div className="space-y-1 text-[14px] md:space-y-2">
              <p className="font-medium text-black-2">
                SKU: <span className="text-gray-4">N/A-202</span>
              </p>
              <p className="font-medium text-black-2">
                Categories:{" "}
                <span className="text-gray-4">{category?.label}</span>
              </p>
              <p className="font-medium text-black-2">
                Tags:{" "}
                {tags?.map((tag, idx) => (
                  <span key={idx} className="mr-2 text-gray-4">
                    {tag.label}
                  </span>
                ))}
              </p>
              <p className="font-medium text-black-2">
                Share:{" "}
                <span className="inline-flex items-center gap-2 text-gray-4">
                  <BiLogoFacebook className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoTwitter className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoGooglePlus className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoLinkedin className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoTwitter className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoInstagram className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoPinterest className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiLogoTumblr className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                  <BiSolidEnvelope className="cursor-pointer text-[16px] hover:text-my-accent" />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Description & reviews */}
      <div className="my-container mt-10 rounded-md bg-white">
        <div className="flex gap-8">
          <div
            className={`${
              isOpen ? "border-b-[3px]" : ""
            } cursor-pointer border-my-accent pb-3 text-xl font-semibold tracking-wide text-title-color transition duration-200 hover:text-my-accent lg:text-2xl`}
          >
            <button type="button" onClick={toggleOpen}>
              Description
            </button>
          </div>
          <div
            className={`${
              isOpen ? "" : "border-b-[3px]"
            } cursor-pointer border-my-accent pb-3 text-xl font-semibold tracking-wide text-title-color transition duration-200 hover:text-my-accent lg:text-2xl`}
          >
            <button type="button" onClick={toggleOpen}>
              Reviews ({allRatings?.length || 0})
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* description */}
          {isOpen && (
            <div className="max-w-[100vw] transition-all duration-500">
              <div className="pt-6 lg:pt-8 lg:leading-8">
                {HtmlParser(medicine_description)}
              </div>
              <div className="space-y-6 pt-8 lg:space-y-10 lg:pt-10">
                <h3 className="text-xl font-medium tracking-wide text-black-2 lg:text-2xl lg:font-semibold">
                  Product Features
                </h3>
                <div>{HtmlParser(feature_with_details)}</div>
              </div>
            </div>
          )}

          {/* Reviews  */}
          {!isOpen && (
            <div className="mt-8 w-full max-w-[100vw] transition-all duration-500">
              {allRatings && <MedicineReviews allRatings={allRatings} />}
              <div className="lg:w-4/5">
                <h4 className="my-5 text-gray-5">
                  Your feedback is invaluable.Share your thoughts and
                  experiences with a quick review.
                </h4>
                <h3 className="my-1 text-xl font-semibold lg:tracking-wide">
                  Your Rating
                </h3>
                <div>
                  <Rating
                    className="mb-5"
                    style={{ maxWidth: 100 }}
                    value={rating1}
                    onChange={setRating}
                    isRequired
                  />
                </div>
                <div>
                  <form onSubmit={handleReviews}>
                    <div className="pb-6">
                      <textarea
                        required
                        placeholder="Your Review"
                        className="w-full rounded-md border-[1px] border-gray-3 p-2 outline-my-primary"
                        name="reviewMessage"
                        rows="4"
                      />
                    </div>
                    <input
                      className="circle-btn"
                      type="submit"
                      value="SUBMIT YOUR REVIEW"
                    />
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Related Medicines */}
      <div className="my-container mt-10 rounded-md bg-white ">
        <RelatedMedicines category={category?.value} />
      </div>
      <WorkInfo />
      <NewsLetter />
    </section>
  );
};

export default MedicineDetails;
