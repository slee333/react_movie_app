import React from "react";
import PropTypes from "prop-types";

import axios from "axios";
// axios: fetch data. Better than fetch()

class App extends React.Component {
  // Declaring some states, just to use them in future. Not that we add them later
  // 그냥 나중에 추가 할 법 한 것들을 미리 선언해두기.
  state = {
    isLoading: true,
    movies:[],
  };
  getMovies = async () => {
    const {data: {data : {movies} }} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({isLoading: false, movies})
    console.log(this.state)
  }
  componentDidMount() {
    
    // When component mounts, call getmovies()
    this.getMovies();
    
  }
  render() {
    const { isLoading } = this.state; // Get isLoading in this.state. AWESOMENESS of ES6!
    return <div>{isLoading ? "Loading" : "We are ready haha"}</div>;
  }
}

export default App;
