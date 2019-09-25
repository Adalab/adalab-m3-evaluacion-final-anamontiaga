import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filters.scss";

const Filters = props => {
  const { getCharacterQuery, query, getGender, queryGender, getEpisodes, queryEpisodes } = props;
  console.log(queryEpisodes);
  return (
    <div className="character__filters">
      <input className="character__filter" type="text" onChange={getCharacterQuery} value={query} />
      <div className="character__filters--improvements">
        <div className="character__filter--gender">
          <label htmlFor="gender" className="search__character--gender--label">
            By Gender:
          </label>
          <select id="gender" name="gender" value={queryGender} onChange={getGender} className="search__character--gender--select">
            <option value="">Select an option:</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Unknow">Unknow</option>
          </select>
        </div>
        <div className="character__filter--episodes">
          <label htmlFor="episodes" className="search__character--episodes--label">
            By Episode:
          </label>
          <select id="episodes" name="episodes" value={queryEpisodes} onChange={getEpisodes} className="search__character--episodes--select">
            <option value="">Select an option:</option>
            <option value="just1">1 episode</option>
            <option value="1-15">More than 1, less than 15</option>
            <option value="more15">More than 15</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  getCharacterQuery: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default Filters;
