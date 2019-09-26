import React from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import PropTypes from "prop-types";

const Home = props => {
  const { getCharacterQuery, query, characters, queryGender, getGender, queryEpisodes, getEpisodes, querySpecie, getSpecie, filteredEpisodes, querySecondEpisodes } = props;
  return (
    <React.Fragment>
      <Filters getCharacterQuery={getCharacterQuery} value={query} queryGender={queryGender} getGender={getGender} queryEpisodes={queryEpisodes} getEpisodes={getEpisodes} getSpecie={getSpecie} filteredEpisodes={filteredEpisodes} querySecondEpisodes={querySecondEpisodes} />
      <CharacterList characters={characters} query={query} value={query} queryGender={queryGender} queryEpisodes={queryEpisodes} querySpecie={querySpecie} querySecondEpisodes={querySecondEpisodes} />
    </React.Fragment>
  );
};

Home.propTypes = {
  getCharacterQuery: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default Home;
