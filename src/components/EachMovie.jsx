// EachMovie.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
export default function EachMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=eec3b1ba5436e349c64e3784895267d5`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" className="go-back">
        <ArrowLeftIcon className="arrow-icon" />
      </Link>
      <div className="each-movies">
        <div className="movie-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie Poster"
            className="each-img"
          />
        </div>
        <div className="movie-context">
          <h2>{movie.original_title}</h2>
          <p className="overview">{movie.overview}</p>
          <p>
            Type <br /> Movie
          </p>
          <p>
            Release Date <br /> {movie.release_date}
          </p>
          <p>
            Run Time <br /> {movie.runtime} mins
          </p>
          <p>
            Genres <br />
            <span className="genres">
              {movie.genres.map((item) => {
                return <p className="each-genres">{item.name}</p>;
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
