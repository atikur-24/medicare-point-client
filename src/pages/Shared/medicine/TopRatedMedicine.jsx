import { Rating, StickerStar } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import useMedicines from "../../../hooks/useMedicines";

const customStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#fbb614",
  inactiveFillColor: "#DEE1E6",
};

const TopRatedMedicine = () => {
  const [medicines] = useMedicines();
  return (
    <div className="bg-white rounded">
      <h2 className="text-title-color text-lg lg:text-xl font-medium lg:font-bold pl-3 py-3 font-nunito uppercase border-l-2 border-my-primary">Top Rated Medicine</h2>
      <div className="border-t border-gray-3 divide-y px-[18px] py-5">
        {medicines.slice(0, 5)?.map((medicine) => (
          <div className="flex py-3 border-b border-gray-3" key={medicine._id}>
            <Link to={`/details/${medicine._id}`}>
              <figure>
                <img className="h-[78px] w-[78px] object-cover border border-gray-3 rounded-sm" src={medicine.image} alt="medicine" />
              </figure>
            </Link>
            <div className="space-y-2 ml-6 lg:ml-[14px]">
              <Link to={`/details/${medicine._id}`}>
                <p className="text-xs font-medium text-gray-5">{medicine.medicine_name}</p>
              </Link>
              <Rating style={{ maxWidth: 60 }} value={medicine.rating} readOnly itemStyles={customStyles} />
              <p className="inline-flex gap-1 text-xs">
                <span className="font-medium text-my-pink inline-flex items-center">৳ {medicine.discount > 0 ? (medicine.price - (medicine.price / 100) * medicine.discount).toFixed(2) : medicine.price.toFixed(2)}</span>
                {medicine.discount > 0 && <span className="inline-flex items-center text-gray-4 line-through">৳ {medicine.price}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMedicine;
