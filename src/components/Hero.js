import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
  });
  return (
    <section className="hero-section">
      <div data-aos="fade-up" className="hero-content">
        <h1>
          {" "}
          <span className="image-left"></span> CREATIVE DESIGNER &amp; DEVELOPER{" "}
          <span className="image-left"></span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
