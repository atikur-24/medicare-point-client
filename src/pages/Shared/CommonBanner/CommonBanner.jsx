/* eslint-disable no-undef */

import { Link } from "react-router-dom";

const CommonBanner = ({ bgImage, title, description, button, image }) => {
  const mystyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  return (
    <div style={mystyle} className="md:bg-fixed">
      <div className="h-full">
        <div className="h-full  w-full bg-black/80">
          <div className="container mx-auto  flex items-center p-8 md:gap-24">
            <div className="flex  w-full flex-col space-y-4">
              <h2 className="text-lg font-bold text-white md:text-4xl">
                {title}
              </h2>
              <p className="hidden text-justify text-gray-3 md:block xl:w-2/3">
                {description}
              </p>
              <div>
                {button && (
                  <Link to="/medicines?category=Pain-Relief">
                    <button type="button" className="my-btn ">
                      {button}
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full ">
              <img
                className="ms-auto w-full rounded-md md:w-96"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;

// style={{ height: `${height}px` }}
