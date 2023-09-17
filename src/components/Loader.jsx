/* eslint-disable consistent-return */
import { PulseLoader } from "react-spinners";
import logo from "../assets/Logo/logo.svg";

const Loader = ({ loader, spinner }) => {
  if (loader) {
    return (
      <div>
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)] ">
          <div className="space-y-4">
            <img className="w-32 mx-auto" src={logo} alt="" />
            <div className="text-xl font-semibold text-my-primary ">
              <div className="flex justify-center items-center gap-3">
                <div className="flex items-center">
                  L<p className="animate-spin border-4 border-dotted border-my-primary rounded-full h-5 w-5" />
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
        <div className="flex justify-center items-center gap-3">
          <div className="flex items-center">
            L<p className="animate-spin border-4 border-dotted border-my-primary rounded-full h-5 w-5" />
            ADING
          </div>
          <PulseLoader size={10} color="#006F70" />
        </div>
      </div>
    );
  }
};

export default Loader;
