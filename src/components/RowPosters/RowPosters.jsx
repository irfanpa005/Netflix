import React, { useEffect, useState } from "react";
import styles from './rowposters.module.css'
import { getMovies, getTrailer } from "./Services";
import { imageUrl500 } from "../../urls";
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function RowPosters(props) {
  const [movies, setmovies] = useState([]);
  const [trailerId, setTrailerId] = useState('')
  console.log(movies)

  useEffect(() => {
    getMovies(setmovies,props.url);
  }, [])

  const handleTrailer = (movieId) => {
    getTrailer(movieId,setTrailerId);
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
  <>
  <div className="row">
    <h4 className="text-white ms-4 mb-0">{props.title}</h4>
    <div className={styles.posters}>
      {movies.map((movie,index) => {
        return (
          <div key={index} className={styles.movie_container}>
            <img className={props.isSmall ? styles.movie_image_small : styles.movie_image} onClick={() => handleTrailer(movie.id)}
              src={`${imageUrl500}${movie.poster_path}`} alt={`Poster for ${movie.name}`}>  
            </img>
            <h6 className={props.isSmall ? styles.movie_name_small:styles.movie_name}>{movie.name ? movie.name : movie.title}</h6>
          </div> 
        )
      })}
    </div>
    {trailerId && <YouTube className={styles.youtu_player} videoId={trailerId[0].key} opts={opts}/> }
  </div>
  </>
  );
}


export default RowPosters;
