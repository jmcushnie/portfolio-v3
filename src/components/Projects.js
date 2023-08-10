import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <section className="project-section">
        <div>
          <h2>02/ projects</h2>
          <hr className="line"></hr>
        </div>
        <div className="project-cards-container">
          <ProjectCard
            title="Cocktail Search App"
            description="A cocktail search app using React js, TheCocktailDB API and CSS"
            imageSrc={require("../img/aqua mock 3.jpg")}
            link1="https://jess-cocktail-club.netlify.app/"
            link2="https://github.com/jmcushnie/cocktail-club.git"
          />
          <ProjectCard
            title="Project 2"
            description="Description of Project 2."
            imageSrc={require("../img/aqua mock 3.jpg")}
          />
          <ProjectCard
            title="Project 2"
            description="Description of Project 2."
            imageSrc={require("../img/aqua mock 3.jpg")}
          />
          <ProjectCard
            title="Project 2"
            description="Description of Project 2."
            imageSrc={require("../img/aqua mock 3.jpg")}
          />
        </div>
      </section>
    </section>
  );
}

export default Projects;
