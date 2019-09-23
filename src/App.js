import React from "react";
import "./App.css";
import { fetchCharacters } from "./services/fetchCharacters";
import logo from "./images/logo.png";

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
    return (
      <div className="App">
        <div className="app_logo">
          <img src={logo} alt="Welcome to Rick and Morty world" className="app_logo--img" />
        </div>
        <ul className="characters">
          {characters.map(character => {
            return (
              <li className="character" key={`key${character.id}`}>
                <div className="character__img">
                  <img src={character.image} alt={`We introduce you to ${character.name}`} />
                </div>
                <div className="character__card">
                  <h3 className="character__card--name">{character.name}</h3>
                  <h5 className="character__card--species">{character.species}</h5>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
