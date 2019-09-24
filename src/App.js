import React from "react";
import "./stylesheets/App.scss";
import { fetchCharacters } from "./services/fetchCharacters";
import logo from "./images/logo.png";
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail";
import { Switch, Route } from "react-router-dom";
import "./stylesheets/App.scss";

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

  filteredName(routerProps) {
    const id = parseInt(routerProps.match.params.id);
    return this.state.characters.find(item => item.id === id);
  }

  render() {
    const { characters, query } = this.state;
    return (
      <div className="app">
        <div className="app__logo">
          <img src={logo} alt="Welcome to Rick and Morty world" className="app__logo--img" />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home getCharacterQuery={this.getCharacterQuery} characters={characters} query={query} value={query} />;
            }}
          />
          <Route
            path="/character/:id"
            render={routerProps => {
              return <CharacterDetail character={this.filteredName(routerProps)} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
