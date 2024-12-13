import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Movies() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${Math.random()}&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Today's Movie ({movies.length})</h1>
            <div>
                <Link to={`/`}>
                    <button>홈으로</button>
                </Link>
            </div>
            {loading ?
                <h1>Loading....</h1>
                :
                <div>{movies.map((movie) =>
                    <div key={movie.id}>
                        <hr />
                        <img src={movie.medium_cover_image} alt="" />
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                        <p>Rating : {movie.rating}</p>
                        <ul>
                            {movie.genres.map(g => <li key={g}>{g}</li>)}
                        </ul>

                    </div>
                )}</div>}
        </div>
    );
}

export default Movies;