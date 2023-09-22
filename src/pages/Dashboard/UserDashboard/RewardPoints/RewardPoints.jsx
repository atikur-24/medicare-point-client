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
    axios.post("http://localhost:5000/rewardToDiscount", { email: userInfo?.email }).then((res) => {
      if (res.data?.modifiedCount > 0) {
        toast.success("Reward to discount successful!");
        window.location.reload();
      }
    });
  };

  return (
    <div className=" mt-10">
      <h3 className="text-xl lg:text-3xl font-bold uppercase font-nunito border-l-4 pl-4 border-primary  mb-5">My Points</h3>

      <div className="  p-5  rounded-2xl box-shadow space-y-5 reward-bg">
        <div className="grid grid-cols-[2fr_1fr] md:px-4">
          <div className="text-title-color space-y-2">
            <h3 className="text-base md:text-2xl font-semibold">{userInfo?.name}</h3>
            <p className="md:text-sm font-medium">{userInfo?.email}</p>
          </div>

          <div className="text-end">
            <div className="md:max-w-[150px] px-2 md:px-4 md:ml-auto  reward-card ">
              <h3 className="font-medium text-sm md:text-lg">MCP Points</h3>
              <p className="md:text-2xl text-xs font-semibold">{userInfo?.rewardPoints}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex flex-col justify-center items-center  font-semibold">
            <PiMedalDuotone className="text-5xl xl:text-7xl" />

            {userInfo?.rewardPoints < 100 && <span>Bronze</span>}
            {userInfo?.rewardPoints >= 100 && userInfo?.rewardPoints < 250 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 250 && userInfo?.rewardPoints < 400 && <span>Gold</span>}
            {userInfo?.rewardPoints >= 400 && userInfo?.rewardPoints < 750 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 750 && <span>Silver</span>}
          </div>

          <div className="w-full space-y-1">
            <ProgressBar className="w-full" height="10px" completed={userInfo?.rewardPoints || 0} maxCompleted={10000} customLabel=" " baseBgColor="#f59e0b" bgColor="#ffc107" />
            <div className="flex justify-between font-semibold  xl:pt-4">
              <p>Silver</p>
              <p>Gold</p>
              <p>Diamond</p>
            </div>
          </div>
          <GiTrophyCup className="text-5xl xl:text-7xl text-[#f59e0b]" />
        </div>
      </div>

      <h3 className="text-xl lg:text-3xl font-bold uppercase font-nunito border-l-4 pl-4 border-primary  my-8">My Rewards</h3>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        <div className="md:bg-[#dbeafe]  rounded-2xl shadow-box  border border-gray-3">
          <div className="flex px-4 py-3  flex-row items-center justify-evenly gap-2 md:gap-8">
            <div>
              <BsGift className="w-10 h-10 text-primary" />
            </div>

            <div className="divide-y-2 divide-secondary ">
              <p className="py-1 font-bold md:text-lg">৳ 50TK off </p>
              <p className="py-1 md:text-base"> 5000 Points Claim </p>
              {userInfo?.rewardToDiscount && (
                <p className="py-1">
                  <span className="">Promo Code: {userInfo?.rewardToDiscount || "xxx"}</span>
                </p>
              )}
            </div>

            <div>
              <button onClick={handleRewardToDiscount} disabled={userInfo?.rewardPoints < 5000} type="button" className="my-btn !text-xs md:!text-base xl:!text-sm">
                Get Reward
              </button>
            </div>
          </div>
        </div>

        <div className="md:bg-[#f3e8ff]  rounded-2xl shadow-box border border-gray-3 ">
          <div className="flex px-4 py-3  flex-row items-center justify-evenly gap-2 md:gap-8">
            <div>
              <BsGift className="w-10 h-10 text-primary" />
            </div>

            <div className="divide-y-2 divide-secondary ">
              <p className="py-1 font-bold md:text-lg">৳ 50TK off </p>
              <p className="py-1 md:text-base"> 5000 Points Claim </p>
              {userInfo?.rewardToDiscount && (
                <p className="py-1">
                  <span className="">Promo Code: {userInfo?.rewardToDiscount || "xxx"}</span>
                </p>
              )}
            </div>

            <div>
              <button onClick={handleRewardToDiscount} disabled={userInfo?.rewardPoints < 5000} type="button" className="my-btn !text-xs md:!text-base xl:!text-sm">
                Get Reward
              </button>
            </div>
          </div>
        </div>
        <div className="md:bg-[#ecfccb]  rounded-2xl shadow-box  border border-gray-3">
          <div className="flex px-4 py-3 flex-row items-center justify-evenly gap-2 md:gap-8">
            <div>
              <BsGift className="w-10 h-10 text-primary" />
            </div>

            <div className="divide-y-2 divide-secondary ">
              <p className="py-1 font-bold md:text-lg">৳ 50TK off </p>
              <p className="py-1 md:text-base"> 5000 Points Claim </p>
              {userInfo?.rewardToDiscount && (
                <p className="py-1">
                  <span className="">Promo Code: {userInfo?.rewardToDiscount || "xxx"}</span>
                </p>
              )}
            </div>

            <div>
              <button onClick={handleRewardToDiscount} disabled={userInfo?.rewardPoints < 5000} type="button" className="my-btn !text-xs md:!text-base xl:!text-sm">
                Get Reward
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 my-5 xl:my-10">
        <div className=" items-center  rounded-2xl shadow-box  p-5 flex justify-between ">
          <div className="space-y-2  ">
            <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold">Earn MCP Rewards</h3>
            <p className="font-medium text-md lg:text-lg">Book Lab Test & Earn Points</p>
            <p className="font-medium">Reward points will be 10% of your order amount</p>
            <Link to="/lab-test" className="my-btn">
              Book LabTest
            </Link>
          </div>
          <div className=" bg-[#fb923c] bg-opacity-90 hidden xl:block rounded-full  p-4">
            <MdRedeem className="w-24 h-24  2xl:w-28 2xl:h-28 text-white " />
          </div>
        </div>

        <div className=" items-center border border-gray-3  rounded-2xl shadow-box  p-5 flex justify-between ">
          <div className="space-y-2  ">
            <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold">Earn MCP Rewards</h3>
            <p className="font-medium text-md lg:text-lg">Buy medicines & Earn Points</p>
            <p className="font-medium">Reward points will be 5% of your order amount</p>
            <Link to="/medicines" className="my-btn">
              Buy Medicines
            </Link>
          </div>
          <div className=" bg-[#fb923c] bg-opacity-90 hidden xl:block rounded-full  p-4">
            <MdRedeem className="w-24 h-24  2xl:w-28 2xl:h-28 text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPoints;
