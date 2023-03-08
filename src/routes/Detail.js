import { useCallback,useEffect,useState } from "react";
import { useParams } from "react-router-dom";

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
        if (id !== "" && id.length > 1){
            getMovie();
        }
    }, [getMovie, id]);

    return (
        <div>
            {loading ? (<h1>Loading...Wait</h1>
            ) : (
            <div>
                <div>
                    <h1>
                        {movie.title_long}
                    </h1>
                </div>
                <div>
                    <img
                        src={movie.large_cover_image}
                        alt={movie.large_cover_image}
                    />
                </div>
            </div>
            )}
        </div>
    );
}

export default Detail;