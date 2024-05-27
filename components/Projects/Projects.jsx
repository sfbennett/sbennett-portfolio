import React from "react";
import styles from "./Projects.module.css";
import List from "./List";
import projectsData from "./projectsData";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Projects</h1>
      <List projects={projectsData} />
    </div>
  );
}

export default Projects;
