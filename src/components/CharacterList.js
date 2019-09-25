import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterList.scss";

const CharacterList = props => {
  const { characters, query } = props;
  return (
    <ul className="characters">
      {characters
        .filter(wantedCharacter => wantedCharacter.name.toUpperCase().includes(query.toUpperCase()))
        .map(character => {
          return (
            <li className="character" key={`key${character.id}`}>
              <Link to={`/character/${character.id}`} className="character__link">
                <CharacterCard image={character.image} name={character.name} species={character.species} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  wantedCharacter: PropTypes.object,
  character: PropTypes.object,
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.object
};

export default CharacterList;
