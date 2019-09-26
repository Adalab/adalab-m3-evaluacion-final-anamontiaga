import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterList.scss";

const CharacterList = props => {
  const { characters, query, queryGender, queryEpisodes, querySpecie, querySecondEpisodes } = props;
  return (
    <ul className="characters">
      {characters
        .filter(character => character.name.toUpperCase().includes(query.toUpperCase()))
        .filter(character => (queryGender === "" ? true : queryGender === character.gender))
        .filter(character => {
          if (queryEpisodes === "") {
            return true;
          } else if (queryEpisodes === "just1") {
            return character.episode.length === 1;
          } else if (queryEpisodes === "1-15") {
            return character.episode.length > 1 && character.episode.length < 15;
          } else {
            return character.episode.length >= 15;
          }
        })
        .filter(character => {
          return querySpecie === "all" ? true : querySpecie === character.species;
        })
        .filter(character => (parseInt(querySecondEpisodes) === character.episode.length ? true : "0"))
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
