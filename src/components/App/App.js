import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../../pages/HomePage.jsx';
import MoviesPage from '../../pages/MoviesPage.jsx';
import NotFoundPage from '';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/" className="NavLink" activeClassName="NavLink-active">
          Home
        </NavLink>
        <NavLink to="/movies" className="NavLink" activeClassName="NavLink-active">
          Movies
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
