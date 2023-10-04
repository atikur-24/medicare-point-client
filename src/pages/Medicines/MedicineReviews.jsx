import { Rating, StickerStar } from "@smastrom/react-rating";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};
const MedicineReviews = ({ allRatings }) => {
  return (
    <div className="pl-3">
      <div className="lg:w-4/5">
        {allRatings.map((singleR, idx) => (
          <div key={idx}>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={singleR?.rating}
                  readOnly
                  itemStyles={customStyles}
                />
              </div>
              <small>{singleR.date}</small>
            </div>
            <p className="text-justify text-xs text-gray-5 lg:text-sm xl:text-base">
              {singleR?.reviewMessage}
            </p>
            <div className="flex items-center justify-between">
              <h3 className="my-5 text-sm font-medium">–– {singleR?.name}</h3>
            </div>
            <div className="divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineReviews;
