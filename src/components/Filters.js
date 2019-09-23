import React from "react";
import PropTypes from "prop-types";

const Filters = props => {
  const { getCharacterQuery, query } = props;
  return (
    <div className="character__filters">
      <input type="text" onChange={getCharacterQuery} value={query} />
    </div>
  );
};

Filters.propTypes = {
  getCharacterQuery: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default Filters;
