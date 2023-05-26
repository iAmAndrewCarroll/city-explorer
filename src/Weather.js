import React from 'react';
import { Card } from 'react-bootstrap'

class Weather extends React.Component{
  render(){

    return (
      this.props.weather.map((day, index) => (
        <Card key={index} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{day.date}</Card.Title>
          <Card.Text>
            {day.description}
          </Card.Text>
        </Card.Body>
      </Card>
        // <div key={index}>
        //   <p>day: {day.date}</p>
        //   <p>description: {day.description}</p>
        // </div>
      ))
    )
    }
  }

export default Weather
