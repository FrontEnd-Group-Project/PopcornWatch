import { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./components/MovieBox";
const key = process.env.REACT_APP_API_KEY
const API_URL =
  `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
function App() {
  // States
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieBox key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default App;
