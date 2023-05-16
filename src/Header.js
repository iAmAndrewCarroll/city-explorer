import React from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {

  render() {
    return (
      <>
      <header>
        <h1>iAmAndrewCarroll's Head</h1>
        <form onSubmit={this.handleLocationSubmit}>
          <label>City Seeking Missile
          <input name="city" style={{ marginLeft: "10px" }} onChange={this.changeCityInput} />
          <Button type="submti">Explore!</Button>
        </label>
      </form>
    </header>
    <main>
      <Card className='City p-3 h-100%' style={{width: '75%'}}>
        <Card.Body>
          <Card.Title className="title">{this.state.cityName}</Card.Title>
          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`} alt={`Map of ${this.state.cityName}`} />
          <Card.Text>Latitude: {this.state.cityData.lon}</Card.Text>
          <Card.Text>Longitude: {this.state.cityData.lat}</Card.Text>
        </Card.Body>
      </Card>
    </main>
    </>
    );
  }
}

export default Header;