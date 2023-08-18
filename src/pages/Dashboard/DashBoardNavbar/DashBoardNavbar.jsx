import { NavLink } from "react-router-dom";
import rewordIcon from "../../../assets/Dashboard-icons/reward.png";

const DashBoardNavbar = () => {
  return (
    <div className="py-5 pl-10 pr-2 md:px-5 flex justify-between items-center bg-base-200">
      <div>
        <div className="form-control">
          <div className="input-group rounded-2xl">
            <input type="text" placeholder="Search…" className="input input-bordered input-sm md:input-md" />
            <p className="btn btn-square hover:bg-[#16b4acb9] bg-[#16b4ac] btn-sm md:btn-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <NavLink to="/dashboard/reward-points">
          <img title="Reword" className="w-10 h-10" src={rewordIcon} alt="" />
        </NavLink>
        <NavLink to="/dashboard/profile">
          <img className="rounded-full w-10 h-10" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
