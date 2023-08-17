/* eslint-disable no-mixed-operators */
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router";
import { TbCurrencyTaka } from "react-icons/tb";
import { BiCartAdd, BiLogoFacebook, BiLogoTwitter, BiLogoTumblr, BiLogoLinkedin, BiLogoGooglePlus, BiLogoPinterest, BiLogoInstagram, BiSolidEnvelope } from "react-icons/bi";
import { RiHeartAddLine } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const customStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#fbb614",
    inactiveFillColor: "#DEE1E6",
};

const MedicineDetails = () => {
  // const [feature, setFeature] = useState([]);
    const medicine = useLoaderData();
    const { medicine_name, image, price, medicine_description, category, tags, rating, discount, features, product_details } = medicine || {};
    // features?.map(f => console.log(f));
    // console.log(feature);
    return (
      <section className="bg-lite">
        <div className="my-container bg-white rounded-md">
          <div className="lg:flex gap-3">
            <div className="w-1/2">
              <img className="" src={image} alt="medicine" />
            </div>
            <div className="w-1/2 space-y-5 lg:space-y-7">
              <div className="space-y-1">
                { discount > 0 && (
                <p className="bg-my-accent rounded-md py-1 px-2 text-xs font-medium text-white w-fit">
                  -{discount}% OFF
                </p>
                )}
                <h3 className="text-xl lg:text-3xl font-semibold tracking-wider text-title-color">{medicine_name}</h3>
              </div>
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly itemStyles={customStyles} />
              <p className="inline-flex gap-1">
                <span className="font-bold text-my-pink inline-flex items-center text-xl lg:text-2xl">
                  <TbCurrencyTaka /> {discount > 0 ? (price - (price / 100 * discount)).toFixed(2) : (price).toFixed(2)}
                </span>
                { discount > 0 && (
                <span className="font-medium inline-flex items-center text-[17px] lg:text-xl text-gray-5 line-through">
                  <TbCurrencyTaka /> {price}
                </span>
                )}
              </p>
              <p className="text-gray-4 text-justify leading-7">{medicine_description.slice(0, 200)}</p>
              <div className="border border-gray-3 py-5 px-3 rounded-md font-semibold flex items-center gap-5 lg:gap-8">
                <span>Quantity:</span>
                <div className="border border-gray-3 rounded-full w-fit py-3 px-5 space-x-5">
                  <span className="cursor-pointer">-</span>
                  <span className="text-gray-5">1</span>
                  <span className="cursor-pointer">+</span>
                </div>
                <button className="cart-btn" type="button">
                  <BiCartAdd /> add to cart
                </button>
                <div className="rounded-full w-fit p-2 border border-gray-3 hover:bg-my-primary cursor-pointer transition duration-200">
                  <RiHeartAddLine className="h-8 w-8 text-gray-4 hover:text-white transition duration-200" />
                </div>
              </div>
              <div className="text-[14px] space-y-1">
                <p className="font-medium text-black-2">SKU: <span className="text-gray-4">N/A-202</span></p>
                <p className="font-medium text-black-2">Categories: <span className="text-gray-4">{category}</span></p>
                <p className="font-medium text-black-2">Tags: <span className="text-gray-4">{tags}</span></p>
                <p className="font-medium text-black-2">Share: <span className="text-gray-4 inline-flex items-center gap-2"><BiLogoFacebook className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoTwitter className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoGooglePlus className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoLinkedin className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoTwitter className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoInstagram className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoPinterest className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiLogoTumblr className="cursor-pointer hover:text-my-accent text-[16px]" /> <BiSolidEnvelope className="cursor-pointer hover:text-my-accent text-[16px]" /> </span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="bg-white my-container mt-10 rounded-md">
          <div className="lg:flex gap-8">
            <div className="text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent border-b-[3px] border-my-accent pb-3 cursor-pointer transition duration-200">Description</div>
            <div className="text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent hover:border-b-[3px] border-my-accent pb-3 cursor-pointer transition duration-200">Additional Information</div>
            <div className="text-xl lg:text-2xl font-semibold tracking-wide text-title-color hover:text-my-accent hover:border-b-[3px] border-my-accent pb-3 cursor-pointer transition duration-200">Reviews</div>
          </div>
          <p className="text-gray-4 leading-7 lg:leading-8 pt-6 lg:pt-8">{medicine_description}</p>
          <div className="space-y-6 lg:space-y-10 pt-8 lg:pt-10">
            <h3 className="text-xl lg:text-2xl font-semibold tracking-wide text-black-2">Product Features</h3>
            {
              features.map((feature, idx) => <div key={idx}><h4 className="text-xl font-medium inline-flex items-center gap-1 mb-2"><HiOutlineBadgeCheck className="text-my-accent" /> {feature?.name}:</h4><p className="text-gray-4">{feature?.desc}</p></div>)
            }
          </div>
          <div className="space-y-6 lg:space-y-10 pt-8 lg:pt-10">
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-semibold tracking-wide text-black-2">Product Details</h3>
              <p className="text-gray-4 leading-7 lg:leading-8">{product_details}</p>
            </div>
            <div className="text-gray-5 font-semibold space-y-2">
              <p>Schiff is a trusted company known for a quality product</p>
              <p>Lack of ingredients could be good for beginners</p>
              <p>Phosphatidylserine is vital to long-term brain health</p>
              <p>Neuriva Plus offers Vitamins B6, B9, B12 (better option than the original formula)</p>
              <p>Twice the amount of phosphatidylserine in the Plus version</p>
              <p>Can be found anywhere</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MedicineDetails;
