/* eslint-disable consistent-return */
import { PulseLoader } from "react-spinners";
import logo from "../assets/Logo/logo.svg";

const Loader = ({ loader, spinner }) => {
  if (loader) {
    return (
      <div>
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center ">
          <div className="space-y-4">
            <img className="mx-auto w-32" src={logo} alt="" />
            <div className="text-xl font-semibold text-my-primary ">
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center">
                  L
                  <p className="h-5 w-5 animate-spin rounded-full border-4 border-dotted border-my-primary" />
                  ADING
                </div>
                <PulseLoader color="#006F70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (spinner) {
    return (
      <div className="text-xl font-semibold text-my-primary ">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center">
            L
            <p className="h-5 w-5 animate-spin rounded-full border-4 border-dotted border-my-primary" />
            ADING
          </div>
          <PulseLoader size={10} color="#006F70" />
        </div>
      </div>
    );
  }
};

export default Loader;
