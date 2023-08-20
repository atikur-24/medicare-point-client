/* eslint-disable no-undef */

const CommonBanner = ({ bgImage, height }) => {
  const mystyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  return (
    <div style={mystyle}>
      <div className={`md:h-[${height}]`}>
        <div className="bg-black bg-opacity-80 w-full h-full">
          <div className="my-container">
            <div>content</div>
            <div>image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;

// style={{ height: `${height}px` }}
