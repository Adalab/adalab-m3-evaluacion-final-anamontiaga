import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filters.scss";

const Filters = props => {
  const { getCharacterQuery, query, queryStatus, getAliveStatus } = props;

  return (
    <div className="character__filters">
      <input className="character__filter" type="text" onChange={getCharacterQuery} value={query} />

      <div className="filter--status">
        <label htmlFor="filter">Status:</label>
        <select id="filter" type="text" name="filter" value={queryStatus} onChange={getAliveStatus}>
          <option value="all">Select an option</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
};

Filters.propTypes = {
  getCharacterQuery: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default Filters;
