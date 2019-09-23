import React from "react";
import "./App.css";
import { fetchCharacters } from "./services/fetchCharacters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }
  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters().then(data => {
      this.setState({ characters: data.results });
    });
  }

  render() {
    const { characters } = this.state;
    console.log(characters);
    return <div className="App">:)</div>;
  }
}

export default App;
