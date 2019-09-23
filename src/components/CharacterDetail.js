import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheets/CharacterDetail.scss";

const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const id = parseInt(routerProps.match.params.id);

  const character = characters.filter(item => item.id === id);

  if (character[0]) {
    const { image, name, status, species, origin, episode } = character[0];

    return (
      <React.Fragment>
        <div className="character__detail--column">
          <div className="character__detail">
            <Link to="/" className="character__detail--link">
              {" "}
              Volver{" "}
            </Link>

            <div className="character__detail--container">
              <div className="character__detail--img">
                <img src={image} alt={`We introduce you to ${name}`} />
              </div>
              <div className="character__detail--info">
                <h3 className="character__detail--name">{name}</h3>
                <p className="character__detail--status">{`Status: ${status}`}</p>
                <p className="character__detail--species">{`Species: ${species}`}</p>
                <p className="character__detail--origin">{`Origin: ${origin.name}`}</p>
                <p className="character__detail--episode">{`Episodes: ${episode.length}`}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to="/" className="character__error--back">
          Anda, vuelve
        </Link>
        <div className="character__error--img">
          <img src="https://media.giphy.com/media/3o85xxmivRBMAw9Uqs/giphy.gif" alt="Anda, vuelve" />
        </div>
      </React.Fragment>
    );
  }
};

CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;
