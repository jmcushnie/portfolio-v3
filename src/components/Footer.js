import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
  });

  return (
    <footer>
      <div data-aos="fade-up" className="email-link">
        <p>feel free to</p>{" "}
        <a className="email" href="mailto:jesscushnie@gmail.com">
          get in touch
        </a>
      </div>
      <div class="icons">
        {" "}
        <a href="https://github.com/jmcushnie" target="_blank">
          {" "}
          <i class="fa-brands fa-github fa-2xs"></i>
        </a>
        <a href="https://www.linkedin.com/in/jesscushnie/" target="_blank">
          <i class="fa-brands fa-linkedin fa-2xs"></i>{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
