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
          Jess Cushnie. <br /> Frontend Developer{" "}
        </h1>
      </div>
      <div>
        <button>
          <a href="#projects"> my projects </a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
