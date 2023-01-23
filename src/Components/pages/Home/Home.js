import React from "react";
import BannerCarousel from "./banner/BannerCarousel";
import Cart from "./Cart/Cart";

const Home = () => {
  return (
    <section className="container">
      <BannerCarousel />
      <Cart />
    </section>
  );
};

export default Home;
