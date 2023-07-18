import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import MovieBox from "../components/MovieBox";
import { Navigation } from "../components/Navigation";

const key = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`;
function Shows() {
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularShows(data.results);
      });
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="grid">
          {popularShows.map((popularShow) => (
            <MovieBox key={popularShow.id} {...popularShow} />
          ))}
        </div>
      </div>
    </>
  );
}

export { Shows };
