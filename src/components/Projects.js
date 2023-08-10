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
            title="Project 1"
            description="Description of Project 1."
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
