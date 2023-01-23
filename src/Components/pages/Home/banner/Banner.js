import React, { useState } from "react";
import "./Banner.css";
import image1 from "../../../../assets/BannerImages/1.jpg";
import image2 from "../../../../assets/BannerImages/2.jpg";
import image3 from "../../../../assets/BannerImages/3.jpg";
import image4 from "../../../../assets/BannerImages/4.jpg";

const Banner = () => {
  const carouselImages = [image1, image2, image3, image4];

  let imagesIndex = 0;
  let imageLink = null;
  console.log(imageLink);
  setInterval(() => {
    if (imagesIndex === carouselImages.length) {
      imagesIndex = 0;
    }
    const imageLink = carouselImages[imagesIndex];
    console.log(imageLink);
    imagesIndex++;
  }, 2000);
  return (
    <div className="slider-container">
      <img src={imageLink} alt="" />
    </div>
  );
};

export default Banner;
