import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Img src={API_IMG + poster_path} alt="" />
      <Card.Text>{overview}</Card.Text>
    </Card>
  );
};

<MovieBox />;

export default MovieBox;
