import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <section id="projects" className="project-section">
        <div>
          <h2>02/ projects</h2>
        </div>
        <div className="project-cards-container">
          <ProjectCard
            title="Cocktail Search App"
            description="A cocktail search app using React js, TheCocktailDB API and CSS"
            imageSrc={require("../img/Screenshot 2023-08-23 at 10.47.03 PM.png")}
            link1="https://jess-cocktail-club.netlify.app/"
            link2="https://github.com/jmcushnie/cocktail-club.git"
          />
          <ProjectCard
            title="My Wrapped"
            description="This project showcases my use of the Spotify Web API to create an interactive app that offers insights into your music listening habits."
            imageSrc={require("../img/Screenshot 2023-08-23 at 10.43.10 PM.png")}
            link1="https://mywrapped.netlify.app/"
            link2="https://github.com/jmcushnie/wrapped.git"
          />
          <ProjectCard
            title="Haukai Website"
            description="HTML, CSS Responsive Website for Web Development Assignment."
            imageSrc={require("../img/Screenshot 2023-08-23 at 10.43.36 PM.png")}
            link1="https://haukai-website.netlify.app/"
            link2="https://github.com/jmcushnie/Haukai-Website-Main.git"
          />
          <ProjectCard
            title="Weather App"
            description="In this project i used the OpenWeatherAPI along with HTML, CSS and JavaScript to create a nice personal dashboard with your time, location and weather."
            imageSrc={require("../img//Screenshot 2023-08-23 at 10.41.40 PM.png")}
            link1="https://weather-app-jesscushnie.netlify.app/"
            link2="https://github.com/jmcushnie/Weather-app.git"
          />
        </div>
      </section>
    </section>
  );
}

export default Projects;
