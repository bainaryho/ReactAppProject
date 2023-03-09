import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.scss";

function Movie({ id, coverImg, year, title, summary, genres,score,runtime}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div className={styles.contextBox}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>『{title}』</Link>
        </h2>
        <p></p>
        <h3 className={styles.movie__year}>
          {runtime>0?`${runtime}분`: "00분"} {score}점 {year}년
        </h3>
        <p></p>
        <p>{summary.length > 180 ? `${summary.slice(0, 180)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          장르: {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Movie;