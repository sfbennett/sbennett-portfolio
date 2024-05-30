import React from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.name}>Susannah Bennett</h1>
        <p className={styles.description}>
          Hello, welcome to my portfolio! I'm a creative, curious and ambitious
          front-end and full-stack developer eager to turn my passion for coding
          into a full-time career. I love building websites from scratch to
          solve problems and make the world a better, more accessible place.
        </p>
      </div>
      <div className={styles.circlesbox}>
        {" "}
        <a
          href="mailto:susannah-bennett@hotmail.com"
          className={styles.circleone}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.icon1}
            size="2x"
          />
        </a>
        <a href="https://github.com/sfbennett" className={styles.circletwo}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon1} size="2x" />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/susannah-bennett-a16627181/"
          className={styles.circlethree}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles.icon1}
            size="2x"
          />
        </a>
      </div>
      <div className={styles.imagecontainer}></div>
    </div>
  );
}

export default Home;
