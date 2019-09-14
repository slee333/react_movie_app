import React from "react";
import PropTypes from "prop-types";

// Use function component cuz we no need to declare any state
function Movie({id, title, summary, poster, year}) {
  return <div id={id}>{title}</div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default Movie;