import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const { characters } = props;
  return (
    <ul className="characters">
      {characters.map(character => {
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
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterList;
