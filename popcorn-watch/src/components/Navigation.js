import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Form, FormControl, Button } from "react-bootstrap";


function Navigation() {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="search" name=""> 
          </FormControl>
          <Button variant="dark">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export { Navigation };
