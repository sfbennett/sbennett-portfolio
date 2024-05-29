import React from "react";
import styles from "./Projects.module.css";
import List from "./List";
import projectsData from "./projectsData";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titlecontainer}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.intro}>
          Here are some of my favourite front-end and full-stack projects so
          far. Please feel free to view the live site or check out the code and
          README files on my GitHub to see the tools and frameworks I used to
          create each one.
        </p>
      </div>
      <List projects={projectsData} />
    </div>
  );
}

export default Projects;
