import React from 'react';
import { Alert, Form, Button, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      lat: '',
      lon: '',
      error: false,
      errorMessage: '',
      weather: []
    }
  }

  // 3 things you need when using axios
  // async, await, .data
handleCitySubmit = async (event) => {
    event.preventDefault();

    let cityData;
    
    try {
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.cityName}&format=json`

    console.log(this.state.cityName)
    // this actually gets the data via the url from axios and location iq
    cityData = await axios.get(url);

    console.log(cityData.data[0]);
    this.setState({
      cityData: cityData.data[0],
      lat: cityData.data[0].lat,
      lon: cityData.data[0].lon
    });
  } catch(error) {
    console.log('error: ', error);
    console.log('error.message: ', error.message);
    this.setState({
      error: true,
      errorMessage: `An Error Occured: ${error.response.status}`
    });
  }
  this.getWeather(cityData.data[0].lat, cityData.data[0].lon)
  }

  // this is an ASYNC FUNCTION that makes an API CALL
  getWeather = async (lat, lon) => {
    try {
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, {
        params: {cityName: this.state.cityName, lat: lat, lon: lon}});
        this.setState({
          weather: weather.data
        })
        console.log('weather from apiCall', weather)
    } catch(error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `An Error Occured: ${error.response.status}`
      });
    }    
  }

changeCityInput = (event) => {
  this.setState({
    cityName: event.target.value
  });
  // the value won't be in state yet when this runs:
  // console.log(this.state.cityName)
}



  render() {
    return(
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleCitySubmit}>
          <Form.Label>Quest For A City:
            <Form.Control name="city" onChange={this.changeCityInput}/>
          </Form.Label>
          <Button type="submit">Get City Info!</Button>
        </Form>
        {
          this.state.error
            ? <Alert variant="danger">{this.state.errorMessage}</Alert>
            : <Card>
            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`} alt={this.state.cityData.display_name}/>
            <Card.Title>{this.state.cityData.display_name}</Card.Title>
            <Card.Body>
              <Card.Text>Latitude: {this.state.cityData.lat}</Card.Text>
              <Card.Text>Longitude: {this.state.cityData.lon}</Card.Text>
            </Card.Body>
          </Card>
        }
            <Weather weather = {this.state.weather} />
      </>
    )
  }

}

export default App;

/*

Endpoint:

GET: https://maps.locationiq.com/v3/staticmap

Query parameters:

key: Authentication key
center: Defines the center of the map. It takes a comma separated value of a latitude, longitude pair.
zoom: 1-18

Example Response: PNG image

*/