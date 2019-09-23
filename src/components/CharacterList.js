import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const { characters, query } = props;
  return (
    <ul className="characters">
      {characters
        .filter(wantedCharacter => wantedCharacter.name.toUpperCase().includes(query.toUpperCase()))
        .map(character => {
          return (
            <li className="character" key={`key${character.id}`}>
              <CharacterCard image={character.image} name={character.name} species={character.species} />
            </li>
          );
        })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired
};

export default CharacterList;
