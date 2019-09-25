import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheets/CharacterDetail.scss";

const CharacterDetail = props => {
  if (props.character) {
    const { image, name, species, status, origin, episode } = props.character;

    const deadStatus = `${status}` === "Dead" ? <i className="fas fa-skull-crossbones"></i> : ` Alive`;

    return (
      <React.Fragment>
        <div className="character__detail--column">
          <div className="character__detail">
            <Link to="/" className="character__detail--link">
              {"<"} Volver{" "}
            </Link>

            <div className="character__detail--container">
              <div className="character__detail--img--container">
                <img className="character__detail--img" src={image} alt={`We introduce you to ${name}`} />
              </div>
              <div className="character__detail--info">
                <h3 className="character__detail--name">{name}</h3>
                <div className="character__detail--status--container">
                  <p className="character__detail--status">
                    <b>Status:</b> {deadStatus}
                  </p>
                </div>
                <p className="character__detail--species">
                  <b>Species: </b>
                  {species}
                </p>
                <p className="character__detail--origin">
                  <b>Origin: </b>
                  {origin.name}
                </p>
                <p className="character__detail--episode">
                  <b>Episode: </b>
                  {episode.length}
                </p>
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
          Anda, vuelve...
        </Link>
        <div className="character__error--img">
          <img src="https://media.giphy.com/media/3o85xxmivRBMAw9Uqs/giphy.gif" alt="Anda, vuelve" />
        </div>
      </React.Fragment>
    );
  }
};

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  character: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.string,
  deadStatus: PropTypes.string
};

export default CharacterDetail;
