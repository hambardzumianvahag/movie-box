import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const prevPage = () => {
    page !== 1 ? setPage(page - 1) : setPage(1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=eec3b1ba5436e349c64e3784895267d5&page=${page}`
    )
      .then((r) => r.json())
      .then((r) => setMovies(r.results));
  }, [page]);
  return (
    <div className="movies">
      {movies &&
        movies.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <div className="each-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="Movie Poster"
                    className="each-img"
                  />
                  <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
                </div>
              </li>
            </ul>
          );
        })}
      <div className="buttons">
        <button onClick={() => prevPage()}>Prev Page</button>
        <button onClick={() => nextPage()}>Next Page</button>
      </div>
    </div>
  );
}
