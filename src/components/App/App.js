import { lazy, Suspense } from 'react';
import './App.css';
import '../../styles/base.css';
import { Routes, Route } from 'react-router-dom';
// import HomePage from '../../pages/HomePage.jsx';
const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
// import MoviesPage from '../../pages/MoviesPage.jsx';
const MoviesPage = lazy(() => import('../../pages/MoviesPage.jsx'));
// import NotFoundPage from '../../pages/NotFoundPage.jsx';
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage.jsx'));
// import MovieDetailsView from '../../pages/MovieDetailsView.jsx';
const MovieDetailsView = lazy(() => import('../../pages/MovieDetailsView.jsx'));
// import ActorsItem from '../../components/ActorsItem/ActorsItem.jsx';
const ActorsItem = lazy(() => import('../../components/ActorsItem/ActorsItem.jsx'));
// import Reviews from '../../components/Reviews/Reviews.jsx';
const Reviews = lazy(() => import('../../components/Reviews/Reviews.jsx'));
// import Layout from '../Layout/Layout';
const Layout = lazy(() => import('../Layout/Layout'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loader...</h2>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/" element={<MovieDetailsView />}>
              <Route path="cast" element={<ActorsItem />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
