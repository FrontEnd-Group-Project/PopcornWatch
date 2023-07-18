import { useEffect, useState } from "react";
import "../App.css";
import MovieBox from "../components/MovieBox";
import { Navigation } from "../components/Navigation";
const key = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
function Home() {
  // States
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="grid">
          {movies.map((movie) => (
            <MovieBox key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export { Home };
