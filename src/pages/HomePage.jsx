import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
// const API_KEY = 'b40c1cf48e7be8057f0d1401f7256d69';
// const BASE_URL = 'http://api.themoviedb.org/3/';

class HomePage extends Component {
  state = {
    movies: [],
  };
  movieDetailsView;
  async componentDidMount() {
    const response = await axios.get(
      `http://api.themoviedb.org/3/trending/movie/day?api_key=b40c1cf48e7be8057f0d1401f7256d69`,
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>This is page popular movie</h1>
        <ul className="list-movie">
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
