/* eslint-disable no-undef */

const CommonBanner = ({ bgImage, title, subtitle, description, button, image }) => {
  const mystyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  return (
    <div style={mystyle}>
      <div className="h-full">
        <div className="bg-black bg-opacity-80 w-full h-full">
          <div className="my-container flex flex-col md:flex-row flex-col-reverse gap-24">
            <div className="w-full flex flex-col justify-between">
              <h2 className="text-white text-4xl font-bold">{title}</h2>
              <p className="text-my-accent">{subtitle}</p>
              <p className="text-gray-3">{description}</p>
              <div>
                {button && (
                  <button type="button" className="my-btn ">
                    {button}
                  </button>
                )}
              </div>
            </div>
            <div className="w-full ">
              <img className="w-full rounded-md" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;

// style={{ height: `${height}px` }}
