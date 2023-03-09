import { useCallback,useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function Home() {
  const rating = (Math.random() * (8.5 - 6) ) + 6;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  },[rating]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              score={movie.rating}
              runtime={movie.runtime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;