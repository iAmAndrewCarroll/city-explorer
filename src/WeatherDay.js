import React from "react";
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData ? (
          this.props.weatherData.map((day, idx) =>
            <Card key={idx} className="weatherDay">
              <Card.Text>Date: {day.time}</Card.Text>
              <Card.Text>Forecast: {day.forecast}</Card.Text>
              <Card.Text>High of: {day.high}</Card.Text>
              <Card.Text>Low of: {day.low}</Card.Text>
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

export default WeatherDay;