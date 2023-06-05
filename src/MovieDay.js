import React from "react";
import Card from 'react-bootstrap/Card'

class MovieDay extends React.Component {
  render() {
    return (
        <Card className='movieDay'>
              <Card.Text>Title: {this.props.movieData.title}</Card.Text>
              <Card.Text>Overview: {this.props.movieData.overview}</Card.Text>
              <Card.Text>Average # of Votes: {this.props.movieData.averageVotes}</Card.Text>
              <Card.Text>Total # of Votes: {this.props.movieData.totalVotes}</Card.Text>
              <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${this.props.movieData.image_url}`} />
              <Card.Text>Popularity Level: {this.props.movieData.popularity}</Card.Text>
              <Card.Text>Release Date: {this.props.movieData.releaseDate}</Card.Text>
            </Card>
    );
  }
}

export default MovieDay;