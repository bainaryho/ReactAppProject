import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const { id } = useParams();

    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setMovie(json.data.movie);
        setGenres(json.data.movie.genres);
        setLoading((current) => !current);
    }, [id]);

    useEffect(() => {
        if (id !== "" && id.length > 1) {
            getMovie();
        }
    }, [getMovie, id]);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div >
                    <div >
                        <h1 >{movie.title}</h1>
                    </div>
                    <div >
                        <img
                            src={movie.large_cover_image}
                            alt={movie.large_cover_image}
                            className={styles.movie__img}
                        />
                        <iframe className={styles.traiiler} src={`https://www.youtube.com/embed/${movie.yt_trailer_code}?mute=1&&autoplay=1`}></iframe>
                    </div>
                        <div >
                            <div >
                                <span>{movie.year}년 • </span>
                                <span>{movie.runtime}분</span>
                                <div>
                                    평점: {movie.rating}
                                </div>
                            </div>
                        </div>
                    
                    <div >
                        <div>{movie.description_full}</div>
                        <div >
                            {genres.map((g) => (
                                <span key={g}>{g} </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Detail;