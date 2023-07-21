import { useEffect, useState } from "react";
import "../App.css";
import MovieBox from "../components/MovieBox";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FormControl, Button, InputGroup } from "react-bootstrap";

const key = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";
function Home() {
  // States
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    const searchQuery = e.target.value;
    if (e.target.value === "") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    } else {
      console.log("Searching");
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${e.target.value}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar bg="black" expand="lg" variant="dark">
        <Container fluid>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
          <InputGroup className="d-flex">
            <FormControl
              placeholder="Search"
              className="me-2"
              aria-label="search"
              name="query"
              // value={query}
              onChange={searchMovie}
            ></FormControl>
          </InputGroup>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>
  );
}

export { Home };
