import React, { useEffect, useState } from "react";
import "./Banner.css";
import { apiKey, imgUrl } from "../../constants/Constants";
import axios from "../../axios"; //importing axios(custom hook) instance from axios.js

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        // console.log(res.data.results.length);
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
