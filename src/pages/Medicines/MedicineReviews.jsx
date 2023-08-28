import { Rating, StickerStar } from "@smastrom/react-rating";
import { MdLocationOn } from "react-icons/md";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};
const MedicineReviews = ({ allRatings }) => {
  // console.log(allRatings);

  return (
    <div className="pl-3">
      <div className="lg:w-4/5">
        {allRatings.map((singleR) => (
          <div key={singleR?._id}>
            <div className="flex justify-between items-center mb-5">
              <div>
                <Rating style={{ maxWidth: 100 }} value={singleR?.rating} readOnly itemStyles={customStyles} />
              </div>
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
      </div>
    </div>
  );
};

export default MedicineReviews;
