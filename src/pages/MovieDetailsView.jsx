import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
// import CardMovie from '../components/CardMovie/CardMovie';
import { Link, Outlet } from 'react-router-dom';
// import ActorsItem from '../components/ActorsItem/ActorsItem.jsx';
// import Reviews from '../components/Reviews/Reviews.jsx';

function MovieDetailsView() {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovie();
  }, [movieId]);

  async function getMovie() {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b40c1cf48e7be8057f0d1401f7256d69`)
      .then(res => {
        setDataMovie(res.data);
      });
  }

  function goBack() {
    navigate(location?.state?.from ?? '/');
  }

  const calcUserScore = voteAverage => {
    return Math.round((voteAverage * 100) / 10);
  };

  if (!dataMovie) {
    return '';
  }

  const { title, poster_path, release_date } = dataMovie;

  const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const year = new Date(release_date).getFullYear();
  const actorsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b40c1cf48e7be8057f0d1401f7256d69`;

  console.log(actorsUrl);
  return (
    <>
      <h1>Страница одного фильма</h1>

      <button onClick={goBack}>Go back</button>

      {dataMovie && <img src={imageUrl} alt={title} width="300" />}
      {dataMovie && (
        <h2>
          {title} ({year})
        </h2>
      )}
      {dataMovie && <p>User score: {calcUserScore(dataMovie.vote_average)}%</p>}
      <h3>Overview</h3>
      {dataMovie && <p>{dataMovie.overview}</p>}
      <h4>Genres</h4>
      <ul>{dataMovie && dataMovie.genres.map(genre => <li key={genre.name}>{genre.name}</li>)}</ul>
      <hr />
      <p>Aditional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
      {/* <Routes>
        <Route path="cast" element={<ActorsItem />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes> */}
    </>
  );
}

export default MovieDetailsView;

// We don't have eny rewiews for this movie
