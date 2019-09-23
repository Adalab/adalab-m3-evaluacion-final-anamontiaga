import React from "react";
import "./App.css";
import { fetchCharacters } from "./services/fetchCharacters";
import logo from "./images/logo.png";
import CharacterList from "./components/CharacterList";
import Filters from "./components/Filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      query: ""
    };
    this.getCharacterQuery = this.getCharacterQuery.bind(this);
  }
  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters().then(data => {
      this.setState({ characters: data.results });
    });
  }

  getCharacterQuery(ev) {
    const query = ev.currentTarget.value;
    this.setState({ query: query });
  }

  render() {
    const { characters, query } = this.state;
    return (
      <div className="App">
        <div className="app_logo">
          <img src={logo} alt="Welcome to Rick and Morty world" className="app_logo--img" />
        </div>
        <Filters getCharacterQuery={this.getCharacterQuery} value={query} />
        <CharacterList characters={characters} query={query} value={query} />
      </div>
    );
  }
}

export default App;
