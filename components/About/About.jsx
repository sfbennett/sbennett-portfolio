import React from "react";
import styles from "./About.module.css";
import AlbumList from "./AlbumList";
import albumsData from "./albumsData";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.name}>ABOUT</h1>
        <p className={styles.description}>
          I'm a former editor turned full-stack web developer. After completing
          my MA at the University of Sussex, I spent the first five years of my
          career working in the editorial team at Penguin Books on a wide
          variety of non-fiction titles. Now, I'm eager to turn my passion for
          coding and keen eye for design into a career so that I can build
          meticulously-crafted and beautifully-designed websites and apps from
          scratch.
          <br />
          <br />
          As a queer developer, I'm passionate about LGBTQ+ inclusivity in tech,
          amplifying under-represented voices and diversifying the industry. In
          my spare time, I enjoy going to gigs, playing guitar, the sea,
          bouldering, writing, and reading.
        </p>
      </div>
      {/* <h3 className={styles.listening}>What I'm listening to</h3> */}
      <div className={styles.barsbox}>
        <h2 className={styles.musich2}>Currently streaming</h2>
        <div className={styles.nowplaying}>
          <span className={styles.bars} />
          <span className={styles.bars} />
          <span className={styles.bars} />
        </div>
      </div>
      <AlbumList albums={albumsData} />
    </div>
  );
}

export default About;
