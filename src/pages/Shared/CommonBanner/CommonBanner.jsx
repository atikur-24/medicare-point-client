/* eslint-disable no-undef */

const CommonBanner = ({ bgImage, title, description, button, image }) => {
  const mystyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  return (
    <div style={mystyle} className="md:bg-fixed">
      <div className="h-full">
        <div className="bg-black bg-opacity-80 w-full h-full">
          <div className="container mx-auto  p-8 items-center flex md:gap-24">
            <div className="w-full  flex flex-col space-y-4">
              <h2 className="text-white text-lg md:text-4xl font-bold">{title}</h2>
              <p className="text-gray-3 xl:w-2/3 text-justify hidden md:block">{description}</p>
              <div>
                {button && (
                  <button type="button" className="my-btn ">
                    {button}
                  </button>
                )}
              </div>
            </div>
            <div className="w-full ">
              <img className="w-full md:w-96 ms-auto rounded-md" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;

// style={{ height: `${height}px` }}
