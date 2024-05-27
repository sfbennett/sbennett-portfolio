import React from "react";
import styles from "./About.module.css";

function Albums({ image, title, artist, link }) {
  return (
    <div className={styles.albumcard}>
      <a href={link}>
        <img src={image} className={styles.albumart} alt={title} />
      </a>
      <h2 className={styles.albumtitle}>{title}</h2>
      <p className={styles.artist}>{artist}</p>
    </div>
  );
}

export default Albums;
