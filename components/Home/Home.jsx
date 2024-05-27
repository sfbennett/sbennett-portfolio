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
        <div className={styles.circleone}>
          {" "}
          <a
            href="mailto:susannah-bennett@hotmail.com"
            className={styles.icons}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <div className={styles.circletwo}>
          {" "}
          <a href="https://github.com/sfbennett" className={styles.icons}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className={styles.circlethree}>
          {" "}
          <a
            href="https://www.linkedin.com/in/susannah-bennett-a16627181/"
            className={styles.icons}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      <div className={styles.imagecontainer}></div>
    </div>
  );
}

export default Home;
