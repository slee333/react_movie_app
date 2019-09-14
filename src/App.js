import React from "react";
import Movie from "./Movie";
import axios from "axios";
// axios: fetch data. Better than fetch()

class App extends React.Component {
  // Declaring some states, just to use them in future. Not that we add them later
  // 그냥 나중에 추가 할 법 한 것들을 미리 선언해두기.
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // When component mounts, call getmovies()
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; // Get isLoading in this.state. AWESOMENESS of ES6!
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map(movie => {
            return(<Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              summary={movie.summary}
            />)
            })}
      </div>
    );
  }
}

export default App;
