import React from "react";
import styles from "./Projects.module.css";

function Project({ image, name, description, link, github }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt={name} />
      <h2 className={styles.projectname}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.btncontainer}>
        <a href={link} className={styles.livebtn}>
          Live
        </a>
        <a href={github} className={styles.ghbtn}>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
