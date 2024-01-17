import React, { useEffect, useState } from "react";
import styles from "./bannersection.module.css";
import { imageUrl,imageUrl500 } from "../../urls";
import { getTopMovies } from "./Services";

function BannerSection() {
  const [topMovies, setTopMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTopMovies(setTopMovies);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topMovies.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [topMovies]);

  return (
    <>
      {topMovies.length > 0 && (
      <div className={styles.banner_div} style={{backgroundImage: `url(${imageUrl+ topMovies[currentIndex].backdrop_path })`}}>
        <div className={styles.movie_details}>
          <h4 className={styles.movie_title}>{topMovies[currentIndex].title}</h4>
          <div className={styles.banner_button}>
            <button className={styles.button}>Play</button>
            <button className={styles.button}>My Playlist</button>
          </div>
          <p className={styles.movie_overview}>{topMovies[currentIndex].overview}</p>
          <h3 className={styles.banner_title}>Top Rated Movies</h3>
        </div>
        <div className={styles.fade}></div>
      </div>
      )}
    </>
  );
}

export default BannerSection;
