import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Navigation() {
  return (
    <Navbar bg="black" variant="dark">
      <Container fluid>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </Container>
    </Navbar>
  );
}

export { Navigation };
