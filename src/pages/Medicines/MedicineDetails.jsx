/* eslint-disable import/no-unresolved */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import moment from "moment/moment";
import { useCallback, useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import { BiLogoFacebook, BiLogoGooglePlus, BiLogoInstagram, BiLogoLinkedin, BiLogoPinterest, BiLogoTumblr, BiLogoTwitter, BiSolidEnvelope } from "react-icons/bi";
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
    axios.get(`http://localhost:5000/medicines/details/${params?.id}`).then((res) => {
      setMedicine(res.data);
      setLoading(false);
    });
  }, [params?.id, isReview]);

  if (isLoading) {
    return <Loader spinner />;
  }

  const customStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#fbb614",
    inactiveFillColor: "#DEE1E6",
  };

  const { _id, medicine_name, image, price, sellQuantity, available_quantity, medicine_summary, medicine_description, tags, rating, feature_with_details, category, allRatings, discount, pharmacist_email, order_quantity } = medicine || {};
  const cartMedicine = { medicine_Id: _id, medicine_name, image, price, discount, quantity, category: category.label, email: user?.email, order_quantity };
  const reqToStock = { reqByMedicine_Id: _id, medicine_name, image, request_count: 1, pharmacist_email };
  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMessage = form.reviewMessage.value;
    const date = moment().format("Do MMM YYYY");

    const newReview = { name: user?.displayName, email: user.email, date, rating: rating1, reviewMessage };

    axios.post(`http://localhost:5000/reviews/${_id}`, newReview).then((res) => {
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
        setReview(isReview + 1);
      }
    });
  };

  return (
    <section className="bg-lite">
      <div className="container mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-2">
        <p className="inline-flex items-center gap-1 font-medium md:font-semibold tracking-wider text-black-2 lg:text-lg">
          <Link to="/" className="hover:text-my-accent cursor-pointer transition-colors">
            Home
          </Link>
          <HiOutlineChevronRight />
          <Link to="/medicines" className="hover:text-my-accent cursor-pointer transition-colors">
            Medicines
          </Link>
          <HiOutlineChevronRight />
          <span>Details</span>
        </p>
      </div>
      {/* product details */}
      <div className="my-container bg-white rounded-md">
        <div className="xl:flex gap-3">
          <div className="xl:w-1/2 h-96">
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
          <div className="xl:w-1/2 space-y-5 lg:space-y-7">
            <div className="space-y-1">
              {discount > 0 && <p className="bg-my-accent rounded-md py-1 px-2 text-xs font-medium text-white w-fit">-{discount}% OFF</p>}
              <h3 className="text-xl lg:text-3xl font-medium lg:font-semibold tracking-wider text-title-color">{medicine_name}</h3>
            </div>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly itemStyles={customStyles} />
            <p className="inline-flex gap-1">
              <span className="font-semibold lg:font-bold text-my-pink inline-flex items-center text-lg md:text-xl lg:text-2xl">৳ {discount > 0 ? (price - (price / 100) * discount).toFixed(2) : price.toFixed(2)}</span>
              {discount > 0 && <span className="font-medium inline-flex items-center text-base lg:text-xl text-gray-5 line-through">৳ {price}</span>}
            </p>
            <p className="font-medium text-black-2 tracking-wide text-sm lg:text-base">Availability: {available_quantity === sellQuantity ? <span className="text-red-500">Out of Stock</span> : <span className="text-my-primary">In Stock</span>}</p>
            <p className="text-gray-4 text-justify text-sm lg:text-base lg:leading-7 w-full">{medicine_summary}</p>
            <div className="border border-gray-3 py-5 px-3 rounded-md font-semibold flex items-center justify-around">
              <span className="text-base lg:text-lg tracking-wide">Quantity:</span>
              <div className="border border-gray-3 rounded-full w-fit py-3 px-5 flex items-center justify-between gap-5">
                <button type="button" disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)} className="cursor-no-drop">
                  <HiMinus />
                </button>
                <span className="text-gray-5">{quantity}</span>
                <button type="button" disabled={quantity >= 5} onClick={() => setQuantity(quantity + 1)} className={`${quantity} == 5 ? "cursor-none" : "cursor-no-drop"`}>
                  <HiPlus />
                </button>
              </div>
              {available_quantity === sellQuantity ? <ReqToStockButton reqToStock={reqToStock} cls="req-btn-lg" /> : <AddCartButton cartMedicine={cartMedicine} cls="cart-btn" />}
            </div>
            <div className="text-[14px] space-y-1 md:space-y-2">
              <p className="font-medium text-black-2">
                SKU: <span className="text-gray-4">N/A-202</span>
              </p>
              <p className="font-medium text-black-2">
                Categories: <span className="text-gray-4">{category.label}</span>
              </p>
              <p className="font-medium text-black-2">
                Tags:{" "}
                {tags.map((tag, idx) => (
                  <span key={idx} className="text-gray-4 mr-2">
                    {tag.label}
                  </span>
                ))}
              </p>
              <p className="font-medium text-black-2">
                Share:{" "}
                <span className="text-gray-4 inline-flex items-center gap-2">
                  <BiLogoFacebook className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoTwitter className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoGooglePlus className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoLinkedin className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoTwitter className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoInstagram className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiLogoPinterest className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoTumblr className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                  <BiSolidEnvelope className="cursor-pointer hover:text-my-accent text-[16px]" />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Description & reviews */}
      <div className="my-container bg-white mt-10 rounded-md">
        <div className="flex gap-8">
          <div className={`${isOpen ? "border-b-[3px]" : ""} text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent border-my-accent pb-3 cursor-pointer transition duration-200`}>
            <button type="button" onClick={toggleOpen}>
              Description
            </button>
          </div>
          <div className={`${isOpen ? "" : "border-b-[3px]"} text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent border-my-accent pb-3 cursor-pointer transition duration-200`}>
            <button type="button" onClick={toggleOpen}>
              Reviews ({allRatings?.length || 0})
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative">
          {/* description */}
          {isOpen && (
            <div className="transition-all duration-500 max-w-[100vw]">
              <div className="lg:leading-8 pt-6 lg:pt-8">{HtmlParser(medicine_description)}</div>
              <div className="space-y-6 lg:space-y-10 pt-8 lg:pt-10">
                <h3 className="text-xl lg:text-2xl font-medium lg:font-semibold tracking-wide text-black-2">Product Features</h3>
                <div>{HtmlParser(feature_with_details)}</div>
              </div>
            </div>
          )}

          {/* Reviews  */}
          {!isOpen && (
            <div className="mt-8 w-full max-w-[100vw] transition-all duration-500">
              {allRatings && <MedicineReviews allRatings={allRatings} />}
              <div className="lg:w-4/5">
                <h4 className="my-5 text-gray-5">Your feedback is invaluable.Share your thoughts and experiences with a quick review.</h4>
                <h3 className="my-1 text-xl font-semibold lg:tracking-wide">Your Rating</h3>
                <div>
                  <Rating className="mb-5" style={{ maxWidth: 100 }} value={rating1} onChange={setRating} isRequired />
                </div>
                <div>
                  <form onSubmit={handleReviews}>
                    <div className="pb-6">
                      <textarea required placeholder="Your Review" className="w-full outline-my-primary rounded-md border-[1px] border-gray-3 p-2" name="reviewMessage" rows="4" />
                    </div>
                    <input className="circle-btn" type="submit" value="SUBMIT YOUR REVIEW" />
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Related Medicines */}
      <div className="my-container bg-white mt-10 rounded-md ">
        <RelatedMedicines category={category?.value} />
      </div>
      <WorkInfo />
      <NewsLetter />
    </section>
  );
};

export default MedicineDetails;
