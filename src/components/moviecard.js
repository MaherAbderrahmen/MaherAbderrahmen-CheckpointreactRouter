// import { Button } from 'bootstrap';
import React from "react";
import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.movie.posterUrl} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.description}</Card.Text>
          <Card.Text>{props.movie.rate}</Card.Text>

          <Link to= {`/${props.movie.id}`}>
          <Button variant="primary">See more</Button>  
          </Link>
          
        </Card.Body>
      </Card>
    </div>
  );
}
export default MovieCard;
