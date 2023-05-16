import React from 'react';
import axios from 'axios';
import './App.css';

// class Header extends React.Component {
//   render() {
//     return <header>This is a test</header>;
//   }
// }

class Main extends React.Component {
  render() {
    return <main></main>;
  }
}

class Footer extends React.Component {
  render() {
    return <footer></footer>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }


render() {
  return (
    <>
    <header />
    <main />
    <footer />
    </>
  )
}

}

// function App() {
//   return (
//     <div className="App">
//       <h1>Adventurous Feet</h1>
//     </div>
//   );
// }

export default App;
