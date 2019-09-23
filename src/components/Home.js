import React from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import PropTypes from "prop-types";

const Home = props => {
  const { getCharacterQuery, query, characters } = props;
  return (
    <React.Fragment>
      <Filters getCharacterQuery={getCharacterQuery} value={query} />
      <CharacterList characters={characters} query={query} value={query} />
    </React.Fragment>
  );
};

Home.propTypes = {
  getCharacterQuery: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default Home;
