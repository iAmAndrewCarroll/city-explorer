import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Weather from './Weather';
import Movie from './Movie';
import Map from './Map'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      haveCityData: false,
      error: false,
      errorMessage: '',
      weather: [],
      movies: [],
      lat: '',
      lon: '',
    }
  }

  // 3 things you need when using axios
  // async, await, .data
  handleCitySubmit = async (event) => {
    event.preventDefault();
    try {
      let cityUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.cityName}&format=json`;
      let city = await axios.get(cityUrl);
      this.setState({
        Data1: city.data[0],
        error: false,
        haveCityData: true,
        lat: city.data[0].lat,
        lon: city.data[0].lon
      });
      // this.getWeather(city.data[0].lat, city.data[0].lon);
      this.getMovie();
    }
    catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `An error Occured: ${error.response.status}`
      });
    }
  }

  getWeather = async (lat, lon) => {
    try {
      // let { lat, lon } = this.state.Data1;
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?cityData=${this.state.cityName}&lat=${lat}&lon=${lon}`;
      let weatherResponse = await axios.get(weatherUrl);
      // console.log(weatherResponse.data)
      let weatherData = weatherResponse.data;
      this.setState({
        weatherData
      })
      // console.log('Date:', date);
      // console.log('Description:', description);
    } catch (error) {
      console.log('Error getting weather: ', error);
    }
  };

  getMovie = async () => {
    let movieURL = `${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.cityName}`;
    console.log(movieURL);
    try {
      let movieResponse = await axios.get(movieURL);
      console.log(movieResponse.data)

      this.setState({
        movieData: movieResponse.data
      })

    } catch (error) {
      console.log('Error getting movie: ', error);
    }
  };


  changeCityInput = (event) => {
    this.setState({
      cityName: event.target.value
    });
    // the value won't be in state yet when this runs:
    // console.log(this.state.cityName)
  }



  render() {
    console.log('This is the MovieData: ', this.state.movieData)
    return (
      <>
        <header>
          <h1>Data from an API</h1>
          <form onSubmit={this.handleCitySubmit}>
            <label>
              <input name="city" onChange={this.changeCityInput} />
            </label>
            <Button type="submit" className="button">Explore!</Button>
          </form>
        </header>
        {this.state.error ? <p>{this.state.errorMessage}</p> :
          this.state.haveCityData &&
          <main>
            <Map
                  img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${this.state.Data1.lat},${this.state.Data1.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`}
                  city={this.state.location}
                />
            <Card className='City' style={{ width: '75%' }}>
            {/* <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${this.state.Data1.lat},${this.state.Data1.lon}&zoom=12`} alt="" /> */}
              <Card.Body>
                <Card.Title>{this.state.cityName}</Card.Title>
                <Card.Text>Lat: {this.state.Data1.lat}</Card.Text>
                <Card.Text>Lon: {this.state.Data1.lon}</Card.Text>
                {/* < Weather
                  weatherData={this.state.weatherData}
                  cityName={this.state.cityName}
                /> */}
                {/* {this.state.movieData.length > 0 && <Movie
                  movieData={this.state.movieData}
                />} */}
                {this.state.movieData ? 
                (<Movie movieData={this.state.movieData} />
                ) : (
                  <p>Loading Movie Data...</p>
                )}
              </Card.Body>
            </Card>
            </main>
        }
      </>
    );
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