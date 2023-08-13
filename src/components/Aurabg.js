import React, { useEffect } from "react";

const AuraBackground = () => {
  useEffect(() => {
    const auraBackground = document.querySelector(".aura-background");

    const updateGradientPosition = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const gradientX = (mouseX / window.innerWidth) * 100;
      const gradientY = (mouseY / window.innerHeight) * 100;

      auraBackground.style.background = `radial-gradient(at ${gradientX}% ${gradientY}%, #FBAB7E,#FFFFFF)`;
    };

    document.addEventListener("mousemove", updateGradientPosition);

    return () => {
      document.removeEventListener("mousemove", updateGradientPosition);
    };
  }, []);

  return <div className="aura-background"></div>;
};

export default AuraBackground;
