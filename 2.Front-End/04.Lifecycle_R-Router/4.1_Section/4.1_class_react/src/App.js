import React, { Component } from 'react';
import './App.css';

import DadJoke from './components/DadJoke';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results })
      })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    // const { characters } = this.state;
    return (
      // <div className="App">
      //   <h1>
      //     Ricky and Morty Characters:
      //   </h1>
      //   <div className="body">
      //     {characters.map(({ name, image }) => {
      //       return (
      //         <div className="container" key={name}>
      //           <h3>{name}</h3>
      //           <img src={image} alt={name} />
      //         </div>
      //       )
      //     })}
      //   </div>
      // </div>
      <DadJoke />
    );
  }
}

export default App;