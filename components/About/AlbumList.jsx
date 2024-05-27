import React from "react";
import Albums from "./Albums";
import styles from "./About.module.css";

function AlbumList({ albums }) {
  return (
    <div className={styles.albumcontainer}>
      {albums.map((album) => (
        <Albums
          key={album.id}
          image={album.image}
          title={album.title}
          artist={album.artist}
          link={album.link}
        />
      ))}
    </div>
  );
}

export default AlbumList;
