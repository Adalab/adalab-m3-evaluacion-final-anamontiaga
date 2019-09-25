import React from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import PropTypes from "prop-types";

const Home = props => {
  const { getCharacterQuery, query, characters, queryGender, getGender, queryEpisodes, getEpisodes } = props;
  return (
    <React.Fragment>
      <Filters getCharacterQuery={getCharacterQuery} value={query} queryGender={queryGender} getGender={getGender} queryEpisodes={queryEpisodes} getEpisodes={getEpisodes} />
      <CharacterList characters={characters} query={query} value={query} queryGender={queryGender} queryEpisodes={queryEpisodes} />
    </React.Fragment>
  );
};

Home.propTypes = {
  getCharacterQuery: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default Home;
