import MovieItem from '../MovieItem/MovieItem';
import style from './MovieList.module.css';

const MovieList = ({ filmsList }) => {
  return (
    <div className={style.containerList}>
      <ul className={style.filmsList}>
        {filmsList.map(film => (
          <li key={film.id} className={style.filmItem}>
            <MovieItem dataFilm={film} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
