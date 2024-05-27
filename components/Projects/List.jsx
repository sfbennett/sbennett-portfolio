import React from "react";
import Project from "./Project";
import styles from "./Projects.module.css";

function List({ projects }) {
  return (
    <div>
      <div className={styles.container}>
        {projects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
