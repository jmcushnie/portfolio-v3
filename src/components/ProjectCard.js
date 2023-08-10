import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={props.imageSrc} alt={props.title} />
      </div>
      <div className="card-content">
        <h3 className="title">{props.title}</h3>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
