import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import MovieBox from "../components/MovieBox";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FormControl, InputGroup } from "react-bootstrap";
import logo from "./images/logo-no-background.png";

const key = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;
function Upcoming() {
  const [upcomingItems, setUpcomingItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpcomingItems(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    const searchQuery = e.target.value;
    if (e.target.value === "") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setUpcomingItems(data.results);
        });
    } else {
      console.log("Searching");
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${e.target.value}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setUpcomingItems(data.results);
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
        {upcomingItems.length > 0 ? (
          <div className="container">
            <div className="grid">
              {upcomingItems.map((upcomingItem) => (
                <MovieBox key={upcomingItem.id} {...upcomingItem} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Upcoming Movies Found</h2>
        )}
      </div>
    </>
  );
}

export { Upcoming };
