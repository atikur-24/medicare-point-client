import ProgressBar from "@ramonak/react-progress-bar";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import "./RewardPoints.css";

const RewardPoints = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div className="px-5 mt-10">
      <h3 className="text-xl lg:text-3xl font-bold uppercase font-nunito text-center mb-5">Reward Points</h3>

      <div className="reward-card p-5 bg-opacity-10 rounded-md space-y-5">
        <div className="grid grid-cols-2">
          <div className="text-white">
            <h3 className="text-2xl font-semibold">{userInfo?.name}</h3>
            <p className="text-lg font-medium">{userInfo?.email}</p>
          </div>

          <div className="text-white text-end">
            <h3 className="font-medium text-lg">MCP Points</h3>
            <p className="text-2xl font-semibold">{userInfo?.rewardPoints}</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex flex-col justify-center items-center text-white font-semibold">
            <img className="w-10 h-10" src="https://i.ibb.co/80RgtPb/star.png" alt="" />

            {userInfo?.rewardPoints < 100 && <span>Bronze</span>}
            {userInfo?.rewardPoints >= 100 && userInfo?.rewardPoints < 250 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 250 && userInfo?.rewardPoints < 400 && <span>Gold</span>}
            {userInfo?.rewardPoints >= 100 && userInfo?.rewardPoints < 250 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 400 && userInfo?.rewardPoints < 750 && <span>Silver</span>}
            {userInfo?.rewardPoints >= 750 && <span>Silver</span>}
          </div>

          <div className="w-full space-y-1">
            <ProgressBar className="w-full" height="10px" completed={userInfo?.rewardPoints || 0} maxCompleted={1000} customLabel=" " baseBgColor="#10B6A8" bgColor="#ffc107" />
            <div className="flex justify-between font-semibold text-slate-3">
              <p>Silver</p>
              <p>Gold</p>
              <p>Diamond</p>
            </div>
          </div>
          <img className="w-12 h-12" src="https://i.ibb.co/vv40D31/award.png" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 my-5">
        <div className="reward-card2 p-5 flex justify-between rounded-md">
          <div className="space-y-2 text-white ">
            <h3 className="text-xl lg:text-3xl font-bold">Earn MCP Rewards</h3>
            <p className="font-medium text-md lg:text-lg">Book Lab Test & Earn Points</p>
            <p className="font-medium">Reward points will be 10% of your order amount</p>
            <Link to="/lab-test" className="text-slate-1 transition-all duration-300 btn btn-sm border-none px-5 bg-my-accent hover:bg-opacity-80 hover:bg-my-accent">
              Book LabTest
            </Link>
          </div>
          <img className="w-20" src="https://i.ibb.co/P5CVzKZ/gift.png" alt="" />
        </div>

        <div className="reward-card2 p-5 flex justify-between rounded-md">
          <div className="space-y-2 text-white ">
            <h3 className="text-xl lg:text-3xl font-bold">Earn MCP Rewards</h3>
            <p className="font-medium text-md lg:text-lg">Buy medicines & Earn Points</p>
            <p className="font-medium">Reward points will be 5% of your order amount</p>
            <Link to="/medicines" className="text-slate-1 transition-all duration-300 btn btn-sm border-none px-5 bg-my-accent hover:bg-opacity-80 hover:bg-my-accent">
              Buy Medicines
            </Link>
          </div>
          <img className="w-20" src="https://i.ibb.co/P5CVzKZ/gift.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RewardPoints;
