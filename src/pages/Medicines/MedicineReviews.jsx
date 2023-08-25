import { Rating, StickerStar } from "@smastrom/react-rating";
import { MdLocationOn } from "react-icons/md";

const MedicineReviews = ({ allRatings }) => {
  console.log(allRatings);

  const customStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#fbb614",
    inactiveFillColor: "#DEE1E6",
  };

  return (
    <div className="pl-3">
      <div className="lg:w-4/5">
        {allRatings.map((singleR) => (
          <div key={singleR?._id}>
            <div className="flex justify-between items-center mb-5">
              <Rating style={{ maxWidth: 100 }} value={singleR?.rating} readOnly itemStyles={customStyles} />
              <p>{singleR.date}</p>
            </div>
            <p className="text-gray-5 text-justify">{singleR?.reviewMessage}</p>
            <div className="flex items-center justify-between">
              <h3 className="my-5 font-semibold">–– {singleR?.name}</h3>
              <div className="flex items-center gap-1">
                <MdLocationOn />
                <span>{singleR?.city}</span>
              </div>
            </div>
            <div className="divider" />
          </div>
        ))}

        {/* <div>
          <div className="flex justify-between items-center mb-5">
            <Rating style={{ maxWidth: 100 }} value={4.5} readOnly itemStyles={customStyles} />
            <p>21-Oct-2020</p>
          </div>
          <p className="text-gray-5 text-justify">
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes
            completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter
            in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
          </p>
          <div className="flex items-center justify-between">
            <h3 className="my-5 font-semibold">–– Mr. AK</h3>
            <div className="flex items-center gap-1">
              <MdLocationOn />
              <span>Faridpur</span>
            </div>
          </div>
          <div className="divider" />
        </div> */}
      </div>
    </div>
  );
};

export default MedicineReviews;
