import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [findMovies, setFindMovies] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      getFindMovie();
    }
  }, [searchQuery]);

  async function getFindMovie() {
    await axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=b40c1cf48e7be8057f0d1401f7256d69&query=${searchQuery}`)
      .then(res => {
        setFindMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch(() => 'This movie not found');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setSearchQuery(form.search.value);
  }
  console.log(findMovies);
  return (
    <div>
      <h1>Страница для поиска фильмов</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="search" />
      </form>

      <ul>
        {findMovies &&
          findMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
