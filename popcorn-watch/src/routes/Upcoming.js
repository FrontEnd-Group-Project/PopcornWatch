import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import MovieBox from "../components/MovieBox";
import { Navigation } from "../components/Navigation";

const key = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;
function Upcoming() {
  const [upcomingItems, setUpcomingItems] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpcomingItems(data.results);
      });
  }, []);

  return (
    <div>
      <Navigation />
      {upcomingItems.map((upcomingItem) => (
        <MovieBox key={upcomingItem.id} {...upcomingItem} />
      ))}
    </div>
  );
}

export { Upcoming };
