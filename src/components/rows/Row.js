import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchURL]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_container">
        {movies.map((movie) => (
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
