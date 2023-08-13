import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
  });
  return (
    <section className="about-section">
      <div>
        <h2>01/ about</h2>
      </div>
      <p data-aos="fade-up">
        Hey I’m Jess, a software developer based in Christchurch, New Zealand.
        In the last few years i have immersed myself in the world of software
        development, creating projects and challenging myself everyday learning
        new skills.
      </p>
    </section>
  );
}

export default About;
