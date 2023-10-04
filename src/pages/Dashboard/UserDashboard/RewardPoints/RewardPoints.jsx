import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { BsGift } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { MdRedeem } from "react-icons/md";
import { PiMedalDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import "./RewardPoints.css";

const RewardPoints = () => {
  const { userInfo } = useContext(AuthContext);

  const handleRewardToDiscount = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/rewardToDiscount`, {
        email: userInfo?.email,
      })
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          toast.success("Reward to discount successful!");
          window.location.reload();
        }
      });
  };

  return (
    <div className=" mt-10">
      <h3 className="mb-5 border-l-4 border-primary pl-4 font-nunito text-xl font-bold uppercase  lg:text-3xl">
        My Points
      </h3>

      <div className="  box-shadow  reward-bg space-y-5 rounded-2xl p-5">
        <div className="grid grid-cols-[2fr_1fr] md:px-4">
          <div className="space-y-2 text-title-color">
            <h3 className="text-base font-semibold md:text-2xl">
              {userInfo?.name}
            </h3>
            <p className="font-medium md:text-sm">{userInfo?.email}</p>
          </div>

          <div className="text-end">
            <div className="reward-card px-2 md:ml-auto md:max-w-[150px]  md:px-4 ">
              <h3 className="text-sm font-medium md:text-lg">MCP Points</h3>
              <p className="text-xs font-semibold md:text-2xl">
                {userInfo?.rewardPoints}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center justify-center  font-semibold">
            <PiMedalDuotone className="text-5xl xl:text-7xl" />

            {userInfo?.rewardPoints < 100 && <span>Bronze</span>}
            {userInfo?.rewardPoints >= 100 && userInfo?.rewardPoints < 250 && (
              <span>Silver</span>
            )}
            {userInfo?.rewardPoints >= 250 && userInfo?.rewardPoints < 400 && (
              <span>Gold</span>
            )}
            {userInfo?.rewardPoints >= 400 && userInfo?.rewardPoints < 750 && (
              <span>Silver</span>
            )}
            {userInfo?.rewardPoints >= 750 && <span>Silver</span>}
          </div>

          <div className="w-full space-y-1">
            <ProgressBar
              className="w-full"
              height="10px"
              completed={userInfo?.rewardPoints || 0}
              maxCompleted={10000}
              customLabel=" "
              baseBgColor="#f59e0b"
              bgColor="#ffc107"
            />
            <div className="flex justify-between font-semibold  xl:pt-4">
              <p>Silver</p>
              <p>Gold</p>
              <p>Diamond</p>
            </div>
          </div>
          <GiTrophyCup className="text-5xl text-[#f59e0b] xl:text-7xl" />
        </div>
      </div>

      <h3 className="my-8 border-l-4 border-primary pl-4 font-nunito text-xl font-bold uppercase  lg:text-3xl">
        My Rewards
      </h3>
      <div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="shadow-box  rounded-2xl border  border-gray-3 md:bg-[#dbeafe]">
          <div className="flex flex-row items-center  justify-evenly gap-2 px-4 py-3 md:gap-8">
            <div>
              <BsGift className="h-10 w-10 text-primary" />
            </div>

            <div className="divide-y-2 divide-secondary ">
              <p className="py-1 font-bold md:text-lg">৳ 50TK off </p>
              <p className="py-1 md:text-base"> 5000 Points Claim </p>
              {userInfo?.rewardToDiscount && (
                <p className="py-1">
                  <span className="">
                    Promo Code: {userInfo?.rewardToDiscount || "xxx"}
                  </span>
                </p>
              )}
            </div>

            <div>
              <button
                onClick={handleRewardToDiscount}
                disabled={userInfo?.rewardPoints < 5000}
                type="button"
                className="my-btn !text-xs md:!text-base xl:!text-sm"
              >
                Get Reward
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-box  rounded-2xl border border-gray-3 md:bg-[#f3e8ff] ">
          <div className="flex flex-row items-center  justify-evenly gap-2 px-4 py-3 md:gap-8">
            <div>
              <BsGift className="h-10 w-10 text-primary" />
            </div>

            <div className="divide-y-2 divide-secondary ">
              <p className="py-1 font-bold md:text-lg">৳ 50TK off </p>
              <p className="py-1 md:text-base"> 5000 Points Claim </p>
              {userInfo?.rewardToDiscount && (
                <p className="py-1">
                  <span className="">
                    Promo Code: {userInfo?.rewardToDiscount || "xxx"}
                  </span>
                </p>
              )}
            </div>

            <div>
              <button
                onClick={handleRewardToDiscount}
                disabled={userInfo?.rewardPoints < 5000}
                type="button"
                className="my-btn !text-xs md:!text-base xl:!text-sm"
              >
                Get Reward
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-box  rounded-2xl border  border-gray-3 md:bg-[#ecfccb]">
          <div className="flex flex-row items-center justify-evenly gap-2 px-4 py-3 md:gap-8">
            <div>
              <BsGift className="h-10 w-10 text-primary" />
            </div>

            <div className="divide-y-2 divide-secondary ">
              <p className="py-1 font-bold md:text-lg">৳ 50TK off </p>
              <p className="py-1 md:text-base"> 5000 Points Claim </p>
              {userInfo?.rewardToDiscount && (
                <p className="py-1">
                  <span className="">
                    Promo Code: {userInfo?.rewardToDiscount || "xxx"}
                  </span>
                </p>
              )}
            </div>

            <div>
              <button
                onClick={handleRewardToDiscount}
                disabled={userInfo?.rewardPoints < 5000}
                type="button"
                className="my-btn !text-xs md:!text-base xl:!text-sm"
              >
                Get Reward
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:my-10">
        <div className=" shadow-box  flex items-center  justify-between rounded-2xl p-5 ">
          <div className="space-y-2  ">
            <h3 className="text-xl font-bold xl:text-2xl 2xl:text-3xl">
              Earn MCP Rewards
            </h3>
            <p className="text-md font-medium lg:text-lg">
              Book Lab Test & Earn Points
            </p>
            <p className="font-medium">
              Reward points will be 10% of your order amount
            </p>
            <Link to="/lab-test" className="my-btn">
              Book LabTest
            </Link>
          </div>
          <div className=" hidden rounded-full bg-[#fb923c]/90 p-4  xl:block">
            <MdRedeem className="h-24 w-24  text-white 2xl:h-28 2xl:w-28 " />
          </div>
        </div>

        <div className=" shadow-box flex items-center  justify-between rounded-2xl  border border-gray-3 p-5 ">
          <div className="space-y-2  ">
            <h3 className="text-xl font-bold xl:text-2xl 2xl:text-3xl">
              Earn MCP Rewards
            </h3>
            <p className="text-md font-medium lg:text-lg">
              Buy medicines & Earn Points
            </p>
            <p className="font-medium">
              Reward points will be 5% of your order amount
            </p>
            <Link to="/medicines" className="my-btn">
              Buy Medicines
            </Link>
          </div>
          <div className=" hidden  rounded-full bg-[#fb923c]/90 p-4  xl:block">
            <MdRedeem className="h-24 w-24  text-white 2xl:h-28 2xl:w-28 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPoints;
