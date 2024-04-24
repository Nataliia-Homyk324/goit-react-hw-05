import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(style.navLink, isActive && style.navLinkActive);
  };

  return (
    <header className={style.container}>
      <nav className={style.headerNav}>
        <NavLink className={buildLinkClass('/')} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass('/movies')} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
