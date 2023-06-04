import React from "react";
import Card from 'react-bootstrap/Card'

class MovieDay extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData ? (
          this.props.movieData.map((movie, idx) =>
            <Card key={idx} className='movieDay'>
              <Card.Text>Title: {movie.title}</Card.Text>
              <Card.Text>Overview: {movie.overview}</Card.Text>
              <Card.Text>Average # of Votes: {movie.averageVotes}</Card.Text>
              <Card.Text>Total # of Votes: {movie.totalVotes}</Card.Text>
              {movie.image_url
                ?
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${movie.image_url}`}
                /> : ''
              }
              <Card.Text>Popularity Level: {movie.popularity}</Card.Text>
              <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
            </Card>
          )
        ) : (
          <p>loading data; </p>
        )
        }
      </>
    );
  }
}

export default MovieDay;