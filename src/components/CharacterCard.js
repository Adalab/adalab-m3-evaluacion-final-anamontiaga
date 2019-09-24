import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = props => {
  const { image, name, species } = props;

  return (
    <div className="character__container">
      <div className="character__img--container">
        <img className="character__img" src={image} alt={`We introduce you to ${name}`} />
      </div>
      <div className="character__card">
        <h3 className="character__card--name">{name}</h3>
        <h5 className="character__card--species">{species}</h5>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterCard;
