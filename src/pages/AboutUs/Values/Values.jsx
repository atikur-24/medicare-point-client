import diamond from "../../../assets/images/AboutUs/diamond.png";
import growth from "../../../assets/images/AboutUs/growth.png";
import opening from "../../../assets/images/AboutUs/open-sign.png";
import reward from "../../../assets/images/AboutUs/reward.png";

const Values = () => {
  return (
    <div className="my-14">
      <h2 className="text-center text-4xl font-bold">Our Values & Approach</h2>
      <div className="mt-10 flex justify-between gap-10">
        <div className="space-y-4  rounded-lg border-[1px] border-neutral-300 p-4  text-center shadow-lg">
          <img className="mx-auto w-32" src={reward} alt="" />

          <div className="space-y-2 px-8">
            <h4 className="text-xl font-semibold text-neutral-500">
              Quality & Trust
            </h4>
            <p className="text-gray-5">
              We always strive to sell quality products. This is why we are so
              trustworthy.
            </p>
          </div>
        </div>
        <div className="space-y-4  rounded-lg border-[1px] border-neutral-300 p-4  text-center shadow-lg">
          <img className="mx-auto w-28" src={growth} alt="" />

          <div className="space-y-2 px-8">
            <h4 className="text-xl font-semibold text-neutral-500">
              Sustainability
            </h4>
            <p className="text-gray-5">
              Our sustainability is increasing day by day. Because we work with
              integrity
            </p>
          </div>
        </div>
        <div className="space-y-4  rounded-lg border-[1px] border-neutral-300 p-4  text-center shadow-lg">
          <img className="mx-auto w-28" src={diamond} alt="" />

          <div className="space-y-2 px-8">
            <h4 className="text-xl font-semibold text-neutral-500">
              Excellence
            </h4>
            <p className="text-gray-5">
              Our sustainability is increasing day by day. Because we work with
              a lot of trust.
            </p>
          </div>
        </div>
        <div className="space-y-4  rounded-lg border-[1px] border-neutral-300 p-4 text-center shadow-lg">
          <img className="mx-auto w-28" src={opening} alt="" />

          <div className="space-y-2 px-8">
            <h4 className="text-xl font-semibold text-neutral-500">
              24 hour Open
            </h4>
            <p className="text-gray-5">
              Our sustainability is increasing day by day. Because we work with
              a lot of trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
