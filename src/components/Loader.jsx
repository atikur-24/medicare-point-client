/* eslint-disable consistent-return */
import { PulseLoader, RiseLoader } from "react-spinners";

const Loader = ({ loader, spinner }) => {
  if (loader) {
    return (
      <div className=" w-full flex justify-center h-full items-center mt-40">
        <RiseLoader color="#006F70" />
      </div>
    );
  }
  if (spinner) {
    return (
      <div className=" w-full flex justify-center items-center h-full">
        <PulseLoader color="#36d7b7" />
      </div>
    );
  }
};

export default Loader;
