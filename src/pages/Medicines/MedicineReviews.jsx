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
            <div className="flex justify-between items-center mb-5">
              <div>
                <Rating style={{ maxWidth: 100 }} value={singleR?.rating} readOnly itemStyles={customStyles} />
              </div>
              <small>{singleR.date}</small>
            </div>
            <p className="text-gray-5 text-xs lg:text-sm xl:text-base text-justify">{singleR?.reviewMessage}</p>
            <div className="flex items-center justify-between">
              <h3 className="my-5 font-medium text-sm">–– {singleR?.name}</h3>
            </div>
            <div className="divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineReviews;
