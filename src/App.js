import React from "react";
import "./App.css";
import { fetchCharacters } from "./services/fetchCharacters";
import logo from "./images/logo.png";
import CharacterList from "./components/CharacterList";

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
    return (
      <div className="App">
        <div className="app_logo">
          <img src={logo} alt="Welcome to Rick and Morty world" className="app_logo--img" />
        </div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}

export default App;
