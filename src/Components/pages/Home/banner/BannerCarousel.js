import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../../../assets/BannerImages/1.jpg";
import image2 from "../../../../assets/BannerImages/2.jpg";
import image3 from "../../../../assets/BannerImages/3.jpg";
import image4 from "../../../../assets/BannerImages/4.jpg";

const BannerCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={image1} />
      </div>
      <div>
        <img src={image2} />
      </div>
      <div>
        <img src={image3} />
      </div>
      <div>
        <img src={image4} />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
