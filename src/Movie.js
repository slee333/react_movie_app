import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

// Use function component cuz we no need to declare any state
function Movie({ title, summary, poster, year }) {
  return (
    <div class="movie">
        <img src={poster} alt={title} title={title}/>
      <div class="movie_data">
        <h3 class="movie_title">{title} </h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default Movie;
