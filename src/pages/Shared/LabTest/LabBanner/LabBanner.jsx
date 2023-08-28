import time from "../../../../assets/Lab/time.webp";

const LabBanner = () => {
  return (
    <div className="bg-my-primary py-6">
      <div className="flex items-center justify-center gap-6">
        <figure>
          <img src={time} alt="" />
        </figure>
        <p className="text-xs md:text-2xl text-white font-bold text-center">Get your sample collected in the next 30 minutes!</p>
      </div>
    </div>
  );
};

export default LabBanner;
