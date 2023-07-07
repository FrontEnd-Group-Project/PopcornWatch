import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Navigation() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Link to="/">Home</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/upcoming">Upcoming</Link>
      </Container>
    </Navbar>
  );
}

export { Navigation };
