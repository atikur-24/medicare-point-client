import React from "react";

import image1 from "../../assets/Medicine/banner_img-25.jpg";
import image2 from "../../assets/Medicine/Home10_bg1.jpg";
import image3 from "../../assets/Medicine/medi-banner.jpg";

const MedicineSwiper = () => {
  return (
    <div className="h-96 w-full carousel carousel-vertical rounded">
      <div className="carousel-item h-full cursor-pointer">
        <button type="button" className="absolute top-8 left-16  my-btn">
          Order Now
        </button>
        <img className="w-full hover:scale-105" src={image1} alt="" />
      </div>
      <div className="carousel-item h-full cursor-pointer">
        <button type="button" className="absolute top-8 left-16  my-btn">
          Order Now
        </button>
        <img className="w-full hover:scale-105" src={image2} alt="" />
      </div>
      <div className="carousel-item h-full cursor-pointer">
        <button type="button" className="absolute top-8 left-16  my-btn">
          Order Now
        </button>
        <img className="w-96 " src={image3} alt="" />
      </div>
    </div>
  );
};

export default MedicineSwiper;
