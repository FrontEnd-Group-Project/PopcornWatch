import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import MovieBox from "../components/MovieBox";
import { Navigation } from "../components/Navigation";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import logo from "./images/logo-no-background.png";

const key = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`;

function Shows() {
  const [popularShows, setPopularShows] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularShows(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    const searchQuery = e.target.value;
    if (e.target.value === "") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setPopularShows(data.results);
        });
    } else {
      console.log("Searching");
      try {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${e.target.value}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setPopularShows(data.results);
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
      <Navbar bg="black" expand="lg" variant="dark" style={{ height: "90px" }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ width: "130px", height: "70px", marginTop: "-20px" }}
            />
          </Navbar.Brand>
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
          <NavLink to="/shows" className="nav-links">
            Shows
          </NavLink>
          <NavLink to="/upcoming" className="nav-links">
            Upcoming
          </NavLink>
          <InputGroup className="d-flex" style={{ width: "auto" }}>
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
        {popularShows.length > 0 ? (
          <div className="container">
            <div className="grid">
              {popularShows.map((popularShow) => (
                <MovieBox key={popularShow.id} {...popularShow} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Shows Found</h2>
        )}
      </div>
    </>
  );
}

export { Shows };
