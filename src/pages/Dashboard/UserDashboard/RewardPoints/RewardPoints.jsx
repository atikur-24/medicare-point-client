import ProgressBar from "@ramonak/react-progress-bar";
import { useContext } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { MdRedeem } from "react-icons/md";
import { PiMedalDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import "./RewardPoints.css";

const RewardPoints = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div className="px-5 mt-10">
      <h3 className="text-xl lg:text-3xl font-bold uppercase font-nunito border-l-4 pl-4 border-primary  mb-5">My Points</h3>

      <div className="reward-card   p-5 bg-opacity-10  bg-primary rounded-2xl box-shadow space-y-5">
        <div className="grid grid-cols-2">
          <div className="text-title-color space-y-2">
            <h3 className="text-2xl font-semibold">{userInfo?.name}</h3>
            <p className="text-lg font-medium">{userInfo?.email}</p>
          </div>

          <div className="text-end">
            <h3 className="font-medium text-lg">MCP Points</h3>
            <p className="text-2xl font-semibold">{userInfo?.rewardPoints}</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex flex-col justify-center items-center  font-semibold">
            <PiMedalDuotone className="text-5xl xl:text-7xl" />

            {userInfo?.rewardPoints < 100 && <span>Bronze</span>}
            {userInfo?.rewardPoints >= 100 && userInfo?.rewardPoints < 250 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 250 && userInfo?.rewardPoints < 400 && <span>Gold</span>}
            {userInfo?.rewardPoints >= 100 && userInfo?.rewardPoints < 250 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 400 && userInfo?.rewardPoints < 750 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 750 && <span>Silver</span>}
          </div>

          <div className="w-full space-y-1">
            <ProgressBar className="w-full" height="10px" completed={userInfo?.rewardPoints || 0} maxCompleted={1000} customLabel=" " baseBgColor="#f59e0b" bgColor="#ffc107" />
            <div className="flex justify-between font-semibold text-primary xl:pt-4">
              <p>Silver</p>
              <p>Gold</p>
              <p>Diamond</p>
            </div>
          </div>
          <GiTrophyCup className="text-5xl xl:text-7xl text-[#f59e0b]" />
        </div>
      </div>

      <h3 className="text-xl lg:text-3xl font-bold uppercase font-nunito border-l-4 pl-4 border-primary  my-8">My Rewards</h3>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 my-5">
        <div className="bg-opacity-10 items-center bg-primary rounded-2xl box-shadow  p-5 flex justify-between ">
          <div className="space-y-2  ">
            <h3 className="text-xl lg:text-3xl font-bold">Earn MCP Rewards</h3>
            <p className="font-medium text-md lg:text-lg">Book Lab Test & Earn Points</p>
            <p className="font-medium">Reward points will be 10% of your order amount</p>
            <Link to="/lab-test" className="my-btn">
              Book LabTest
            </Link>
          </div>
          <div className=" bg-[#fb923c] hidden xl:block rounded-full  p-4">
            <MdRedeem className="w-28 h-28 text-white " />
          </div>
        </div>

        <div className="bg-opacity-10 items-center  bg-primary rounded-2xl box-shadow  p-5 flex justify-between ">
          <div className="space-y-2  ">
            <h3 className="text-xl lg:text-3xl font-bold">Earn MCP Rewards</h3>
            <p className="font-medium text-md lg:text-lg">Buy medicines & Earn Points</p>
            <p className="font-medium">Reward points will be 5% of your order amount</p>
            <Link to="/medicines" className="my-btn">
              Buy Medicines
            </Link>
          </div>
          <div className=" bg-[#fb923c] hidden xl:block rounded-full  p-4">
            <MdRedeem className="w-28 h-28 text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPoints;
