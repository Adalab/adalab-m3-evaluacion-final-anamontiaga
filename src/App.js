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
      query: "",
      queryGender: "",
      queryEpisodes: "",
      querySpecie: "all"
    };
    this.getCharacterQuery = this.getCharacterQuery.bind(this);
    this.getGender = this.getGender.bind(this);
    this.getEpisodes = this.getEpisodes.bind(this);
    this.getSpecie = this.getSpecie.bind(this);
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
    console.log(routerProps);
    return this.state.characters.find(item => item.id === id);
  }

  getGender(event) {
    const query = event.currentTarget.value;
    this.setState({ queryGender: query });
  }

  getEpisodes(event) {
    const query = event.currentTarget.value;
    this.setState({ queryEpisodes: query });
  }

  getSpecie(event) {
    const query = event.currentTarget.value;
    this.setState({ querySpecie: query });
  }

  render() {
    const { characters, query, queryGender, queryEpisodes, querySpecie } = this.state;
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
              return <Home getCharacterQuery={this.getCharacterQuery} characters={characters} query={query} value={query} queryGender={queryGender} getGender={this.getGender} queryEpisodes={queryEpisodes} getEpisodes={this.getEpisodes} querySpecie={querySpecie} getSpecie={this.getSpecie} />;
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
