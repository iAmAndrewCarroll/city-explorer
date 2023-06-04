import React from "react";
import Card from 'react-bootstrap/Card';
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        <Card.Title>Weather in {this.props.cityName}</Card.Title>
        <hr></hr>
        <WeatherDay weatherData={this.props.weatherData} />
      </>
    )
  }
}

export default Weather;