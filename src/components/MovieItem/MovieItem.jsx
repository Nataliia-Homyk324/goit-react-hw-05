import { format } from 'date-fns';
import style from './MovieItem.module.css';
import { Link, useLocation } from 'react-router-dom';
import notFoundImg from '../../assets/img/image-not-found.jpg';

const MovieItem = ({
  dataFilm: { id, poster_path, title, release_date, vote_average },
}) => {
  const location = useLocation();
  const formatDate = date => {
    if (!date || isNaN(new Date(date))) {
      return 'Unknown date';
    }
    return format(new Date(date), 'MMMM dd yyyy');
  };
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const voteAverage = Number(vote_average).toFixed(2);

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <img
        className={style.movieImg}
        src={poster_path ? urlImg : notFoundImg}
        alt={title}
        width="350"
        height="500"
      />
      <div className={style.trandingThumb}>
        <h3 className={style.trandingTitle}>{title}</h3>
        <p className={style.trandingText}>
          Release date: {formatDate(release_date)}
        </p>
        {voteAverage !== '0.00' && (
          <p className={style.trandingText}>Rating: {voteAverage}</p>
        )}
      </div>
    </Link>
  );
};

export default MovieItem;
