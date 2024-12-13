import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movInfo, setMovInfo] = useState([]);

    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovInfo(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movInfo);
    return (
        <div>
            {loading ?
                <div>
                    <h2>"Now Loading..."</h2>
                </div >
                :
                <div>
                    <h1>{`Detail of ${movInfo.title_long}`}</h1>
                    <img src={movInfo.large_cover_image} />
                    <p>"{movInfo.description_full}</p>
                </div>
            }
        </div>);
}

export default Detail;