import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const CharacterDetail = props => {
  return (
    <React.Fragment>
      <Link to="/" className="character__detail--link">
        {" "}
        Volver{" "}
      </Link>
      <div>Soy el detalle !!</div>
    </React.Fragment>
  );
};

export default CharacterDetail;
