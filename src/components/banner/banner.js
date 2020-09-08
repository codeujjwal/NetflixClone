import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchnetflixorignals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchdata();
  }, []);

  return (
    <div
      className="banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1>{movie.name}</h1>
        <div className="buttons">
          <button>play</button>
          <button>My List</button>
        </div>
        <p>{movie.overview}</p>
      </div>
      <div className="fadebottom"></div>
    </div>
  );
}

export default Banner;
