import React from "react";
import Card from 'react-bootstrap/Card'
import MovieDay from "./MovieDay";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card.Title>{this.props.cityName} Movies</Card.Title>
        <hr></hr>
        <MovieDay movieData={this.props.movieData} />
      </>
    )
  }
}

export default Movie;