import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {}

  render() {
    const { storedJokes } = this.state;
    // const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
      </div>
    );
  }
}

export default DadJoke;