import React from "react";

const CharacterList = props => {
  const { characters } = props;
  return (
    <ul className="characters">
      {characters.map(character => {
        return (
          <li className="character" key={`key${character.id}`}>
            <div className="character__img">
              <img src={character.image} alt={`We introduce you to ${character.name}`} />
            </div>
            <div className="character__card">
              <h3 className="character__card--name">{character.name}</h3>
              <h5 className="character__card--species">{character.species}</h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterList;
