import diamond from "../../../assets/images/AboutUs/diamond.png";
import growth from "../../../assets/images/AboutUs/growth.png";
import opening from "../../../assets/images/AboutUs/open-sign.png";
import reward from "../../../assets/images/AboutUs/reward.png";

const Values = () => {
  return (
    <div className="my-14">
      <h2 className="text-4xl text-center font-bold">Our Values & Approach</h2>
      <div className="flex justify-between gap-10 mt-10">
        <div className="text-center  border-[1px] border-neutral-300 rounded-lg shadow-lg  p-4 space-y-4">
          <img className="w-32 mx-auto" src={reward} alt="" />

          <div className="px-8 space-y-2">
            <h4 className="text-xl font-semibold text-neutral-500">Quality & Trust</h4>
            <p className="text-gray-5">We always strive to sell quality products. This is why we are so trustworthy.</p>
          </div>
        </div>
        <div className="text-center  border-[1px] border-neutral-300 rounded-lg shadow-lg  p-4 space-y-4">
          <img className="w-28 mx-auto" src={growth} alt="" />

          <div className="px-8 space-y-2">
            <h4 className="text-xl font-semibold text-neutral-500">Sustainability</h4>
            <p className="text-gray-5">Our sustainability is increasing day by day. Because we work with integrity</p>
          </div>
        </div>
        <div className="text-center  border-[1px] border-neutral-300 rounded-lg shadow-lg  p-4 space-y-4">
          <img className="w-28 mx-auto" src={diamond} alt="" />

          <div className="px-8 space-y-2">
            <h4 className="text-xl font-semibold text-neutral-500">Excellence</h4>
            <p className="text-gray-5">Our sustainability is increasing day by day. Because we work with a lot of trust.</p>
          </div>
        </div>
        <div className="text-center  border-[1px] border-neutral-300 rounded-lg shadow-lg p-4 space-y-4">
          <img className="w-28 mx-auto" src={opening} alt="" />

          <div className="px-8 space-y-2">
            <h4 className="text-xl font-semibold text-neutral-500">24 hour Open</h4>
            <p className="text-gray-5">Our sustainability is increasing day by day. Because we work with a lot of trust.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
