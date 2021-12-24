import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header className="main-header">
        <NavLink to="/" className="homeLink">
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
