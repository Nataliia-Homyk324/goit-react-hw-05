import MovieItem from '../MovieItem/MovieItem';
import style from './MovieList.module.css';
// import { Link } from 'react-router-dom';

const MovieList = ({ filmsList }) => {
  return (
    <div className={style.containerList}>
      <ul className={style.filmsList}>
        {filmsList.map(film => (
          <li key={film.id} className={style.filmItem}>
            {/* <Link to={`/movies/${film.id}`}> */}
            <MovieItem dataFilm={film} />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
